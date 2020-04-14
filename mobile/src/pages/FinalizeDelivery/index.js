import React, {useState} from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {finalizeCurrentDeliveryInRequest} from '~/store/modules/CurrentDelivery/actions';

import Camera from "~/components/Camera";
import api from '~/services/api';

import { Container, HeaderTop, ContentBlock, BlockImg, Image, SubmitButton } from './styles';

export default function FinalizeDelivery({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const delivery = useSelector(state => state.currentDelivery.delivery);

  const [ loading, setLoading] = useState(false);  
  const [uriImage, setUriImage] = useState(null);

  function handlePressCapture(image) {

    setUriImage(image.uri);
  }

  async function handleSubmit() {
    try{
      if( uriImage === null) return;
      
      setLoading(true);
      
      const data = new FormData();
      data.append('file',{
        type: `image/${uriImage.substring(uriImage.lastIndexOf('.')+1)}`,
        uri: uriImage,
        name: uriImage.substring(uriImage.lastIndexOf('/')+1),
      });

      const response = await api.post('signatures', data);
      
      if (response.data) {
        await api.put(`deliveryman/${profile.id}/delivery/${delivery.id}/finalizeDelivery`, {
          signature_id: response.data.id,
        });

        dispatch(finalizeCurrentDeliveryInRequest({ 
          profileId: profile.id,
          deliveryId: delivery.id
        }));
        setLoading(false);
        navigation.navigate('Detail');
      } else {
        throw "Erro ao salvar a imagem no servidor!";
      }
    }catch(err){
      setLoading(false);
      console.tron.log('OPA DEU PAU!!! - ' + err);
    }
  }

  return (
    <Container>
      <StatusBar barStyle="hight-content" backgroundColor="#7D40E7" />
      <HeaderTop />

      <ContentBlock>
        <BlockImg>
          {
            uriImage ? (<Image source={{uri: uriImage}} />) : (<Camera onPress={handlePressCapture} />)
          }
        </BlockImg>
        <SubmitButton loading={loading} onPress={handleSubmit} disabled={uriImage? false : true }>
          Enviar
        </SubmitButton>
      </ContentBlock>
    </Container>
  );
}


FinalizeDelivery.navigationOptions = ({navigation}) => ({
  title: 'Confirmar entrega',
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
