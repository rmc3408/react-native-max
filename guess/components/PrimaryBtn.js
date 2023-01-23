import { Button, useTheme } from '@rneui/themed';

const PrimaryButton = (props) => {
  const styles = useTheme();

  function pressHandler() {
    console.log('hi');
  }

  return (
        <Button title={props.children} radius={'md'} onPress={pressHandler} 
          color={props.children === 'Confirm' ? styles.theme.colors.primary : styles.theme.colors.white }
        />
  );
};

export default PrimaryButton;
