import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import PlacesList from '../components/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchDataPlaces } from '../utils/database';

const AllPlaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [ loadPlaces, setLoadPlaces ] = useState([]);

  // useEffect(() => {
  //   if(route.params && isFocused) {
  //     setLoadPlaces(prevSt => [ route.params, ...prevSt ])
  //   }
  // }, [route.params, isFocused]);

  useEffect(() => {
    fetchDataPlaces().then((data) => {
      setLoadPlaces(data)
    })
  }, [isFocused])
  
  //console.log(loadPlaces);
  return <PlacesList places={loadPlaces} />
}

export default AllPlaces

const styles = StyleSheet.create({})