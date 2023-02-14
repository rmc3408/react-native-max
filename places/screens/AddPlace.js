import { StyleSheet } from 'react-native'
import PlaceForm from '../components/PlaceForm'
 
const AddPlaces = ({ navigation }) => {
  function createPlace(place) {
    navigation.navigate('allPlaces', place)
  }

  return <PlaceForm onCreatePlace={createPlace} />
}

export default AddPlaces

const styles = StyleSheet.create({})