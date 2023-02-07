import axios from 'axios';

const URL = 'https://expenses-b5f79-default-rtdb.firebaseio.com/';

export async function postFirebase(data) {
  const result =  await axios.post(URL + 'expenses.json', data);
  return result.data.name;
}

export async function getFirebase() {
  const result = await axios.get(URL + 'expenses.json');
  const list = [];

  const arr = Object.entries(result.data);

  for (const [key, value] of arr) {
    const newExpense = {
      id: key,
      amount: value.amount,
      createdAt: new Date(value.createdAt),
      description: value.description,
    };
    list.push(newExpense);
  }
  return list;
}

export function patchFirebase(id, data) {
  return axios.put(URL + 'expenses/' + id + '.json', data)
}

export function deleteFirebase(id) {
  axios.delete(URL + `expenses/${id}.json`);
}