import { useState } from 'react';
import Card from './components/Card';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import { expenses as initialExpenses } from './data/expenses';
import type { Expense } from './types/expense';

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [editingExpense, setEditingExpense] = useState<Expense>();

  const handleSubmit = (description: string, amount: number, date: string) => {
    if (editingExpense) {
      setExpenses((currentExpenses) =>
        currentExpenses.map((expense) =>
          expense.id === editingExpense.id
            ? {
                ...expense,
                description,
                amount,
                date,
              }
            : expense,
        ),
      );

      setEditingExpense(undefined);
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      description,
      amount,
      date,
    };

    setExpenses((currentExpenses) => [...currentExpenses, newExpense]);
  };

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
  };

  const handleDelete = (id: number) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id),
    );

    if (editingExpense?.id === id) {
      setEditingExpense(undefined);
    }
  };

  const handleCancel = () => {
    setEditingExpense(undefined);
  };

  return (
    <main>
      <h1>Expense Tracker</h1>

      <Card>
        <ExpenseForm
          key={editingExpense?.id ?? 'new'}
          expense={editingExpense}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Card>

      <Card>
        <ExpenseSummary expenses={expenses} />
      </Card>

      <Card>
        <ExpenseList
          expenses={expenses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>
    </main>
  );
}
