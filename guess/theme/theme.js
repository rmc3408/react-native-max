import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: '#ffffaa',
    secondary: '#72063c',
    backgroundDark: '#4e0329',
    backgroundLight: '#ddb52a',
  },
  mode: 'light',
  components: {
    Button: {
      titleStyle: {
        color: '#363737',
      },
    },
    Input: {
      inputContainerStyle: {
        borderBottomColor: '#ffffaa',
      },
      inputStyle: {
        color: '#ffffaa',
      },
      placeholderTextColor: '#ffffaa',
    },
  },
});