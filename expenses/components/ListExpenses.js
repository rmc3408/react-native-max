import { useRef } from 'react';
import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderItems(objRendered) {
  return <ExpenseItem {...objRendered.item} />;
}

const ListExpenses = (props) => {
  const flatRef = useRef();

  return (
    <FlatList
      ref={flatRef}
      data={props.expenses}
      keyExtractor={(item) => item.id}
      scrollToEnd={{ animated: true, offset: 0 }}
      renderItem={renderItems}
      contentContainerStyle={{ paddingBottom: 20 }}
      onContentSizeChange={() => flatRef.current.scrollToEnd()}
    />
  );
};

export default ListExpenses;
