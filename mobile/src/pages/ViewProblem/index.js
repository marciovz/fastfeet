import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ItemsProblem from './ItemListProblem';

import { Container, HeaderTop, ContentBlock, TextTitle, ListProblems, ListEmpty, TextEmpty } from './styles';
import api from '~/services/api';


export default function ViewProblem() {
  const [problems, setProblems] = useState([]);
  const profileId = useSelector(state => state.user.profile.id);
  const delivery = useSelector(state => state.currentDelivery.delivery);

  useEffect(() => {
    try{
      async function loadProblems() {    
          if(profileId && delivery) {
            const {data} = await api.get(`deliveryman/${profileId}/delivery/${delivery.id}/problems`)
            setProblems(data);  
          }
      }
      loadProblems();
    }catch(err) {
      console.tron.log('Não foi possível buscar as informações de problemas da encomenda');
    }
  }, []);

  return (
<Container>
      <StatusBar barStyle="hight-content" backgroundColor="#7D40E7" />
      <HeaderTop/>
      
      <ContentBlock>
        <TextTitle>{delivery.product}</TextTitle>
        {problems.length > 0 ? (
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
            <ListEmpty>
              <TextEmpty>Nenhum problema registrado</TextEmpty>
            </ListEmpty>
          )}
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
