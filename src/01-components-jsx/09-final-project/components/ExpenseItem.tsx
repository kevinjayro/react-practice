import type { Expense } from '../types/expense';

type ExpenseItemProps = {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  onDelete: (id: number) => void;
};

export default function ExpenseItem({
  expense,
  onEdit,
  onDelete,
}: ExpenseItemProps) {
  return (
    <article>
      <div>
        <h3>{expense.description}</h3>
        <p>{expense.date}</p>
      </div>

      <strong>${expense.amount}</strong>

      <div>
        <button onClick={() => onEdit(expense)}>Edit</button>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </article>
  );
}
