# Final Project – Expense Tracker

Build an expense management application using the concepts learned throughout Module 1.

Start by defining the data structure for expenses and organizing the application into small, reusable components. Divide the interface into different parts based on each component's responsibilities and use props to pass the necessary data and actions between them.

The application should allow users to manage expenses through different interactions, such as adding, editing, and deleting expenses. The interface should respond to these actions and update the displayed information accordingly.

As you build the application, focus on reusing components, avoiding unnecessary JSX duplication, and maintaining a clear and easy-to-maintain structure. Use composition and `children` when appropriate to create more flexible components.

## Expense Object

The object contains the following properties:

```ts
{
  id: number;
  description: string;
  amount: number;
  date: string;
}
```

## Example Data

```ts
const expenses = [
  {
    id: 1,
    description: 'Groceries',
    amount: 45,
    date: '2026-08-18',
  },
  {
    id: 2,
    description: 'Bus',
    amount: 3,
    date: '2026-08-18',
  },
  {
    id: 3,
    description: 'Lunch',
    amount: 15,
    date: '2026-08-19',
  },
];

// For new expenses, Date.now() can be used to generate the id.
```

## Interface Example

```html
<article>
  <div>
    <h3>Groceries</h3>
    <p>August 18, 2026</p>
  </div>

  <strong>$45</strong>

  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</article>
```

## Requirements

- Display a list of all expenses.
- Display the description, amount, and date of each expense.
- Display the total amount of all expenses.
- Allow users to add a new expense.
- Allow users to edit an existing expense.
- Allow users to delete an expense.
- Update the list and total after adding, editing, or deleting an expense.
- Display an appropriate state when there are no expenses.
- Organize the interface using small, reusable components.
- Use props to pass data and actions between components.
- Use conditional rendering for different interface states.
- Render expenses dynamically using `map()` and the `id` as the `key`.
- Handle user interactions through event handlers.
- Compose components to build the complete interface.
- Use `children` when appropriate.
- Use TypeScript to define data and component props.
- Avoid unnecessary duplication of JSX and logic.
