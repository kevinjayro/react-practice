# Exercises – 07 Event Handling

1. **Product Action Panel**

   Create a functional component named `ProductActionPanel` that receives the following prop:
   - `product` (object)

   The object contains the following properties:

   ```ts
   {
     id: number;
     name: string;
     price: number;
     category: string;
   }
   ```

   Example data:

   ```ts
   const product = {
     id: 1,
     name: 'Mechanical Keyboard',
     price: 120,
     category: 'Accessories',
   };
   ```

   Render the following structure:

   ```html
   <section>
     <h2>Mechanical Keyboard</h2>
     <p>Category: Accessories</p>
     <p>Price: $120</p>

     <button>View Details</button>
     <button>Add to Cart</button>
     <button>Add to Wishlist</button>
   </section>
   ```

   Each button must perform a different action.

   **Requirements:**
   - Use `onClick` with a separate handler for each button action.
   - Pass the required product data to the handlers from the button callbacks.
   - Log the complete product for `View Details`, the product `id` for `Add to Cart`, and the product name for `Add to Wishlist`.
   - Define the product data with an appropriate TypeScript type.

   [View Solution](#)

---

2. **Product Search**

   Create a functional component named `ProductSearch`.

   The component must allow the user to enter a search term and display the current value.

   Render the following structure:

   ```html
   <section>
     <h2>Product Search</h2>

     <input type="text" placeholder="Search products..." />

     <p>Search term: keyboard</p>

     <p>No search term entered.</p>
   </section>
   ```

   The displayed message must change depending on the input value.

   **Requirements:**
   - Manage the search term with `useState` and use it as the value of a controlled input.
   - Handle input changes with `onChange` and read the new value from `event.target.value`.
   - Use a typed `handleChange` handler to update the search term.
   - Display `No search term entered.` when the search term is empty.
   - Display `Search term: {value}` when the search term contains text.

   [View Solution](#)

---

3. **Newsletter Signup**

   Create a functional component named `NewsletterSignup`.

   The component should contain a newsletter subscription form.

   Render the following structure:

   ```html
   <section>
     <h2>Newsletter Signup</h2>

     <form>
       <label>
         Name
         <input type="text" placeholder="Enter your name" />
       </label>

       <label>
         Email
         <input type="email" placeholder="Enter your email" />
       </label>

       <button type="submit">Subscribe</button>
     </form>
   </section>
   ```

   The form must be handled entirely by React.

   **Requirements:**
   - Manage the name and email values with state and use controlled inputs.
   - Handle both input changes with `onChange` and read their values from `event.target.value`.
   - Handle form submission with a typed `handleSubmit` function connected to `onSubmit`.
   - Use `event.preventDefault()` and log an object containing the submitted `name` and `email`.
   - Clear both input values after the form is submitted.

   [View Solution](#)

---

4. **Employee Directory Actions**

   Create a functional component named `EmployeeDirectoryActions` that receives the following prop:
   - `employees` (array of objects)

   Each object contains:

   ```ts
   {
     id: number;
     name: string;
     position: string;
     department: string;
   }
   ```

   Example data:

   ```ts
   const employees = [
     {
       id: 1,
       name: 'Michael Carter',
       position: 'Project Manager',
       department: 'Management',
     },
     {
       id: 2,
       name: 'Emily Parker',
       position: 'UX Designer',
       department: 'Design',
     },
     {
       id: 3,
       name: 'Daniel Brooks',
       position: 'Frontend Developer',
       department: 'Development',
     },
   ];
   ```

   Render a directory similar to:

   ```html
   <section>
     <h2>Employee Directory</h2>

     <article>
       <h3>Michael Carter</h3>
       <p>Project Manager</p>
       <p>Management</p>

       <button>View Profile</button>
       <button>Contact</button>
       <button>Remove</button>
     </article>

     <article>
       <h3>Emily Parker</h3>
       <p>UX Designer</p>
       <p>Design</p>

       <button>View Profile</button>
       <button>Contact</button>
       <button>Remove</button>
     </article>
   </section>
   ```

   The directory must be generated dynamically from the `employees` array.

   **Requirements:**
   - Use `map()` to render the employees and use `employee.id` as the `key`.
   - Create separate handlers for `View Profile`, `Contact`, and `Remove`.
   - Pass the employee `id` to `View Profile` and `Remove`, and the employee name to `Contact`.
   - Use arrow functions in the button callbacks to pass employee data to the handlers.
   - Log an appropriate message for each action.
   - Define the employee data with an appropriate TypeScript type.

   [View Solution](#)

---

5. **Interactive Task Manager**

   Create a functional component named `TaskManager`.

   The component manages a list of tasks.

   Each task contains:

   ```ts
   {
     id: number;
     title: string;
     completed: boolean;
   }
   ```

   Use the following initial data:

   ```ts
   const initialTasks = [
     {
       id: 1,
       title: 'Learn React Events',
       completed: false,
     },
     {
       id: 2,
       title: 'Practice TypeScript',
       completed: false,
     },
     {
       id: 3,
       title: 'Build a React Component',
       completed: true,
     },
   ];
   ```

   Render a structure similar to:

   ```html
   <section>
     <h2>Task Manager</h2>

     <form>
       <input type="text" placeholder="Enter a new task" />

       <button type="submit">Add Task</button>
     </form>

     <ul>
       <li>
         <span>Learn React Events</span>

         <button>Complete</button>
         <button>Delete</button>
       </li>
     </ul>
   </section>
   ```

   The component must allow the user to add, complete, uncomplete, and delete tasks.

   **Requirements:**
   - Manage the task list and input value with state, using the input as a controlled component.
   - Handle input changes with `onChange` and form submission with `onSubmit`, using appropriately typed event handlers.
   - Prevent the form's default submission behavior and ignore submissions when the input contains no text.
   - Add a new task with a unique `id`, the entered title, and `completed: false`, then clear the input.
   - Render tasks with `map()` and use `task.id` as the `key`.
   - Create a handler that toggles the `completed` value of only the selected task.
   - Reflect the task's completion state in the UI and display `Complete` or `Mark Incomplete` accordingly.
   - Create a `Delete` action that removes only the selected task from the list.
   - Pass task IDs from the rendered buttons to the appropriate handlers using arrow functions.

   [View Solution](#)
