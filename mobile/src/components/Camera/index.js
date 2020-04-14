import React from 'react';
import { StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, PendingView, PendindText, ButtonBlock, ButtonCapture } from './styles';
 
export default function Camera({onPress}) {
  
  async function takePicture(camera) {
      const options = { quality: 0.5, base64: true };
      const image = await camera.takePictureAsync(options);
      onPress(image);
  }


  return (
    <Container>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') 
            return (
              <PendingView>
                <PendindText>AGUARDANDO</PendindText>
              </PendingView>
            );
          return (
            <ButtonBlock>
              <ButtonCapture onPress={() => takePicture(camera)}>
                <Icon name="camera-alt" size={28} color="#FFF" style={{marginLeft: 15}}/>
              </ButtonCapture>
            </ButtonBlock>
          );
        }}
      </RNCamera>
    </Container>
  );
}
 
const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});