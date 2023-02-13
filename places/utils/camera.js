import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { useCameraPermissions, PermissionStatus, launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';
import colors from '../ui/colors';

export default function CameraPicker() {
  const [image, setImage] = useState(null);
  const [status, reqPermissionFunction] = useCameraPermissions();
  let imagePreview = <Text>No image at moment</Text>;

  async function verifyPermission() {
    //console.log(status.status)
    if (status.status === PermissionStatus.UNDETERMINED) {
      const newStatus = await reqPermissionFunction();
      console.log('Accepted', newStatus.granted);
      return true;
    }

    if (status.status === PermissionStatus.DENIED) {
      await reqPermissionFunction().canAskAgain();
      console.log('Ask again for permission');
    }

    if (status.status === PermissionStatus.DENIED) {
      return false;
    }
    return true;
  }

  async function takePhoto() {
    // No permissions request is necessary for launching the camera async
    const hasPermissionCam = await verifyPermission();
    if (!hasPermissionCam) return;

    const camPickResult = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.1,
    });

    //console.log(camPickResult);

    if (!camPickResult.canceled) {
      setImage(camPickResult.assets[0].uri);
      imagePreview = <Image source={{ uri: image }} style={styles.image} />;
    }
  }

  return (
    <>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Photo" onPress={takePhoto} />
    </>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    marginBottom: 16,
    backgroundColor: colors.primary100,
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
