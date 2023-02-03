import { FlatList, Text } from 'react-native';


function renderItems(objRendered) {
  const { id, description, amount, createdAt } = objRendered.item;
  return (<Text>{description} - {createdAt}</Text>);
}


const ListExpenses = (props) => {
  return (
      <FlatList data={props.expenses} keyExtractor={item => item.id} renderItem={renderItems}/>
  );
};

export default ListExpenses;
