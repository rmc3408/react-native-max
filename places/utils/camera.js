import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import { useCameraPermissions, PermissionStatus, launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';

export default function CameraPicker() {
  const [image, setImage] = useState(null);
  const [ status, reqPermissionFunction ] = useCameraPermissions()

  async function verifyPermission() {
    //console.log(status)
    if (status === PermissionStatus.UNDETERMINED) {
      const newStatus = await reqPermissionFunction();
      console.log('Accepted', newStatus.granted);
    }

    if (status === PermissionStatus.DENIED) {
      await reqPermissionFunction().canAskAgain();
      console.log('Ask again for permission');
    }
  }

  async function takePhoto() {
    // No permissions request is necessary for launching the camera async
    await verifyPermission()
    const camPickResult = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.1,
    });

    //console.log(camPickResult);

    if (!camPickResult.canceled) {
      setImage(camPickResult.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, marginBottom: 16 }} />}
      <Button title="Take Photo" onPress={takePhoto} />
    </View>
  );
}