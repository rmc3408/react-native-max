import { Button, useTheme } from '@rneui/themed';

const PrimaryButton = (props) => {
  const styles = useTheme();

  return (
        <Button title={props.children} radius={'md'} size='lg' 
          onPress={props.onPressing} 
          color={props.children === 'Confirm' ? styles.theme.colors.primary : styles.theme.colors.white }
        />
  );
};

export default PrimaryButton;
