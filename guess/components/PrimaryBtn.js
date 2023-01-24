import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';

const PrimaryButton = (props) => {
  const styles = useTheme();

  return (
    <View style={{ flex: 1, marginHorizontal: 6 }}>
      <Button
        title={props.children}
        radius={'md'}
        size="lg"
        onPress={props.onPressing}
        color={
          props.children === 'Confirm'
            ? styles.theme.colors.primary
            : styles.theme.colors.white
        }
      />
    </View>
  );
};

export default PrimaryButton;
