import type { Expense } from '../types/expense';

type ExpenseSummaryProps = {
  expenses: Expense[];
};

export default function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <strong>Total: ${total}</strong>;
}
