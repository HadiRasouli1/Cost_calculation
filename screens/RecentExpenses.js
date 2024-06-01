import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const [isFetching, setIsFetching] = useState(true);

  // const [fetchedExpenses, setFetchedExpenses] = useState();

  // useEffect(() => {
  //   const getExpenses = async () => {
  //     const expenses = await fetchExpenses();
  //     setFetchedExpenses(expenses);
  //   };

  //   getExpenses();
  // }, []);

  const closeLoaded = () => {
    setIsFetching(false);
  };
  if (isFetching) {
    return <LoadingOverlay closeLoaded={closeLoaded} />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="no Expenses registed expenses Found!!!"
    />
  );
};

export default RecentExpenses;
