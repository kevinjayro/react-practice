import { useState, type SubmitEvent } from 'react';
import type { Expense } from '../types/expense';

type ExpenseFormProps = {
  expense?: Expense;
  onSubmit: (description: string, amount: number, date: string) => void;
  onCancel: () => void;
};

type FormErrors = {
  description?: string;
  amount?: string;
  date?: string;
};

export default function ExpenseForm({
  expense,
  onSubmit,
  onCancel,
}: ExpenseFormProps) {
  const [description, setDescription] = useState(expense?.description ?? '');
  const [amount, setAmount] = useState(expense ? String(expense.amount) : '');
  const [date, setDate] = useState(expense?.date ?? '');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {};

    if (!description.trim()) {
      newErrors.description = 'Description is required.';
    }

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0.';
    }

    if (!date) {
      newErrors.date = 'Date is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(description.trim(), Number(amount), date);

    setErrors({});

    if (!expense) {
      setDescription('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>

      {errors.description && <p>{errors.description}</p>}

      <label>
        Amount
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>

      {errors.amount && <p>{errors.amount}</p>}

      <label>
        Date
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>

      {errors.date && <p>{errors.date}</p>}

      <button type="submit">{expense ? 'Update' : 'Add'}</button>

      {expense && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
