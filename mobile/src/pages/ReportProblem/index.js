import React, {useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, HeaderTop, Form, Textarea, SubmitButton} from './styles';

export default function ReportProblem({navigation}) {
  const reportRef = useRef();
  const profile = useSelector(state => state.user.profile);
  const delivery = useSelector(state => state.currentDelivery.delivery);
  
  const [textValue, setTextValue] = useState('');
  const [loading, setLoading] = useState(false);  
  

  async function handleSubmit() {
    if(textValue !== ''){
      try {
        setLoading(true);
        await api.post(`/deliveryman/${profile.id}/delivery/${delivery.id}/problems`, {
          description: textValue,
        });
        setLoading(false);
        navigation.navigate('Detail');
      } catch(err) {
        setLoading(false);
        console.tron.log(err);
        Alert.alert(
          'Falha de comunicação com o servidor',
          'Não foi possível enviar as informações para a base de dados',
        );
        
      }
    }
  }

  return (
    <Container>
      <StatusBar barStyle="hight-content" backgroundColor="#7D40E7" />
      <HeaderTop/>
      <Form>
        <Textarea 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu Id de cadastro"
          ref={reportRef}
          returnKeyType="send"
          blurOnSubmit={true}
          onSubmitEditing={handleSubmit}
          value={textValue}
          onChangeText={setTextValue}
          
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Form>
    </Container>
  );
}

ReportProblem.navigationOptions = ({navigation}) => ({
  title: 'Informar problema',
  headerTitleAlign: 'center',
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: '#7D40E7',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail');
      }}>
      <Icon name="chevron-left" size={24} color="#FFF" style={{marginLeft: 15}}/>
    </TouchableOpacity>
  ),
});
