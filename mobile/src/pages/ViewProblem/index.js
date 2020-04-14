import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {StatusBar, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ItemsProblem from './ItemListProblem';

import { Container, HeaderTop, ContentBlock, TextTitle, ListProblems, BlockContent, TextEmpty } from './styles';
import api from '~/services/api';


export default function ViewProblem() {
  const profileId = useSelector(state => state.user.profile.id);
  const delivery = useSelector(state => state.currentDelivery.delivery);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try{
      setLoading(true);
      async function loadProblems() {    
          if(profileId && delivery) {
            const {data} = await api.get(`deliveryman/${profileId}/delivery/${delivery.id}/problems`)
            setProblems(data);
            setLoading(false);  
          }
      }
      loadProblems();
    }catch(err) {
      setLoading(false);  
      setProblems([]);
      console.tron.log(err);
      Alert.alert(
        'Falha de cominicação com o servidor',
        'Não foi possível buscar as informações na base de dados',
      );
    }
  }, []);

  return (
<Container>
      <StatusBar barStyle="hight-content" backgroundColor="#7D40E7" />
      <HeaderTop/>
      
      <ContentBlock>
        <TextTitle>{delivery.product}</TextTitle>
        {
          loading ? (
            <BlockContent>
              <ActivityIndicator size="small" color="#7d40e7" />
            </BlockContent>
          ) : (
            problems.length > 0 ? (
              <ListProblems
                data={problems}
                keyExtractor={problem => String(problem.id)}
                renderItem={({item}) => (
                  <ItemsProblem
                    key={item.id}
                    dataProblem={item}
                  />
                )}
              />
            ) : (
              <BlockContent>
                <TextEmpty>Nenhum problema registrado</TextEmpty>
              </BlockContent>
            )
          )
        }
        </ContentBlock>
    
    </Container>
  );
}

ViewProblem.navigationOptions = ({navigation}) => ({
  title: 'Visualizar problemas',
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
