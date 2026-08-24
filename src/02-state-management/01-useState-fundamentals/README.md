# Exercises – 01 useState Fundamentals

1. **Counter**

   Create a functional component named `Counter` that manages a numeric state.

   The component should render:

   ```html
   <section>
     <h2>Counter</h2>

     <p>Count: 0</p>

     <button>Increment</button>
     <button>Decrement</button>
     <button>Reset</button>
   </section>
   ```

   **Requirements:**
   - Use `useState`.
   - The initial value must be `0`.
   - Increment the count by `1`.
   - Decrement the count by `1`.
   - Reset the count to `0`.
   - Use the state setter to update the state.
   - Do not modify the state directly.
   - Use the functional update form (`prev => ...`) for increment and decrement.

   [View Solution](./01-counter/Counter.tsx)

---

2. **Toggle**

   Create a functional component named `Toggle` that manages a boolean state.

   The component should render:

   ```html
   <section>
     <h2>Status</h2>

     <p>Current status: Off</p>

     <button>Toggle</button>
   </section>
   ```

   When the button is clicked, the status should alternate between:

   ```text
   Off
   On
   ```

   **Requirements:**
   - Use `useState`.
   - The initial state must be `false`.
   - Display `On` when the state is `true`.
   - Display `Off` when the state is `false`.
   - Use a ternary operator to display the status.
   - Use the functional update form (`prev => ...`) to toggle the state.
   - Do not modify the state directly.

   [View Solution](./02-toggle/Toggle.tsx)

---

3. **Score Manager**

   Create a functional component named `ScoreManager` that manages a player's score.

   The component should render:

   ```html
   <section>
     <h2>Player Score</h2>

     <p>Score: 0</p>

     <button>+10</button>
     <button>-10</button>
     <button>Reset</button>
   </section>
   ```

   **Requirements:**
   - Use `useState`.
   - The initial score must be `0`.
   - The `+10` button must increase the score by `10`.
   - The `-10` button must decrease the score by `10`.
   - The `Reset` button must set the score back to `0`.
   - Use the functional update form (`prev => ...`) for the `+10` and `-10` operations.
   - Display the current score using JSX.
   - Do not modify the state directly.

   [View Solution](#)

---

4. **Quantity Selector**

   Create a functional component named `QuantitySelector` that manages the quantity of a product.

   The component should render:

   ```html
   <section>
     <h2>Quantity</h2>

     <button>-</button>

     <span>1</span>

     <button>+</button>
   </section>
   ```

   The quantity must never be lower than `1`.

   **Requirements:**
   - Use `useState`.
   - The initial quantity must be `1`.
   - The `+` button must increase the quantity by `1`.
   - The `-` button must decrease the quantity by `1`.
   - Do not allow the quantity to become less than `1`.
   - Use the functional update form (`prev => ...`) when updating the quantity.
   - Use a conditional expression to prevent invalid values.
   - Display the current quantity using JSX.
   - Do not modify the state directly.

   [View Solution](#)

---

5. **Notification Center**

   Create a functional component named `NotificationCenter` that manages the number of unread notifications.

   The component should render:

   ```html
   <section>
     <h2>Notifications</h2>

     <p>Unread notifications: 0</p>

     <button>New Notification</button>
     <button>Mark One as Read</button>
     <button>Mark All as Read</button>
   </section>
   ```

   **Requirements:**
   - Use `useState`.
   - The initial number of notifications must be `0`.
   - `New Notification` must increase the number by `1`.
   - `Mark One as Read` must decrease the number by `1`.
   - The number of notifications must never become negative.
   - `Mark All as Read` must reset the number to `0`.
   - Use the functional update form (`prev => ...`) when the new value depends on the previous value.
   - Display the current number using JSX.
   - Do not modify the state directly.
   - Combine everything learned in the previous exercises.

   [View Solution](#)
