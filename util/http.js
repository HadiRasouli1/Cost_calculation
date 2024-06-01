import axios from "axios";

const BAKEND_URL =
  "https://react-native-course-1789f-default-rtdb.firebaseio.com";

export const storeExpense = (expenseData) => {
  axios.post(BAKEND_URL + "/expenses.json", expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(BAKEND_URL + "/expenses.json");
  const expenses = [];

  console.log(response.data);

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key],
      description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};
