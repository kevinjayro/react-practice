# Exercises – 02 State Updates Immutability

1. **User Profile Editor**

   Create a functional component named `UserProfileEditor` that manages a user profile object using React state.

   The initial state should be:

   ```ts
   {
     name: "Kevin",
     age: 25,
     role: "Developer"
   }
   ```

   The component should render the current profile information and provide controls to update each property.

   ```html
   <section>
     <h2>User Profile</h2>

     <p>Name: Kevin</p>
     <p>Age: 25</p>
     <p>Role: Developer</p>

     <button>Change Name</button>
     <button>Increase Age</button>
     <button>Change Role</button>
   </section>
   ```

   **Requirements:**
   - Use `useState` to manage the profile object.
   - Each button must update only its corresponding property.
   - Preserve the other properties when updating the state.
   - Create a new object when updating the profile.
   - Do not mutate the existing state object.
   - Use the spread operator to preserve the existing properties.

   [View Solution](#)

---

2. **Shopping List**

   Create a functional component named `ShoppingList` that manages a list of shopping items using React state.

   Each item should have the following structure:

   ```ts
   {
     id: number;
     name: string;
   }
   ```

   The initial state should contain:

   ```ts
   [
     {
       id: 1,
       name: 'Milk',
     },
     {
       id: 2,
       name: 'Bread',
     },
     {
       id: 3,
       name: 'Eggs',
     },
   ];
   ```

   Render the items in a list and provide controls to add a new item and remove an existing item.

   ```html
   <section>
     <h2>Shopping List</h2>

     <ul>
       <li>
         <span>Milk</span>
         <button>Remove</button>
       </li>

       <li>
         <span>Bread</span>
         <button>Remove</button>
       </li>

       <li>
         <span>Eggs</span>
         <button>Remove</button>
       </li>
     </ul>

     <button>Add Apples</button>
   </section>
   ```

   **Requirements:**
   - Use `useState` to manage the items array.
   - The **Add Apples** button must add a new item to the array.
   - Each **Remove** button must remove only its corresponding item.
   - Create a new array when adding an item.
   - Use `filter()` to remove an item.
   - Do not mutate the existing state array.
   - Use a functional updater when the new array depends on the previous state.

   [View Solution](#)

---

3. **Shopping Cart**

   Create a functional component named `ShoppingCart` that manages a list of products using React state.

   Each product should have the following structure:

   ```ts
   {
     id: number;
     name: string;
     price: number;
     quantity: number;
   }
   ```

   The initial state should contain:

   ```ts
   [
     {
       id: 1,
       name: 'Keyboard',
       price: 80,
       quantity: 1,
     },
     {
       id: 2,
       name: 'Mouse',
       price: 40,
       quantity: 2,
     },
     {
       id: 3,
       name: 'Monitor',
       price: 300,
       quantity: 1,
     },
   ];
   ```

   Render each product with its name, price, quantity, and controls to increase or decrease its quantity.

   ```html
   <section>
     <h2>Shopping Cart</h2>

     <ul>
       <li>
         <h3>Keyboard</h3>
         <p>Price: $80</p>
         <p>Quantity: 1</p>

         <button>Increase</button>
         <button>Decrease</button>
       </li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Use `useState` to manage the products array.
   - The **Increase** button must increase the selected product's quantity by `1`.
   - The **Decrease** button must decrease the selected product's quantity by `1`.
   - Quantity must never become less than `1`.
   - Use `map()` to update the selected product.
   - Create a new product object when changing its quantity.
   - Do not mutate the existing array or product objects.
   - Use a functional updater for quantity updates.

   [View Solution](#)

---

4. **Todo Manager**

   Create a functional component named `TodoManager` that manages a list of todo items using React state.

   Each todo should have the following structure:

   ```ts
   {
     id: number;
     title: string;
     completed: boolean;
   }
   ```

   The initial state should contain:

   ```ts
   [
     {
       id: 1,
       title: 'Learn React',
       completed: false,
     },
     {
       id: 2,
       title: 'Practice TypeScript',
       completed: false,
     },
     {
       id: 3,
       title: 'Build a project',
       completed: true,
     },
   ];
   ```

   Render each todo with its title, status, and controls to toggle or delete it.

   ```html
   <section>
     <h2>Todo Manager</h2>

     <ul>
       <li>
         <span>Learn React</span>
         <span>Pending</span>
         <button>Toggle</button>
         <button>Delete</button>
       </li>
     </ul>

     <p>Completed: 1</p>
   </section>
   ```

   **Requirements:**
   - Use `useState` to manage the todos.
   - The **Toggle** button must change only the selected todo's `completed` property.
   - The **Delete** button must remove only the selected todo.
   - Use `map()` to update a todo.
   - Use `filter()` to remove a todo.
   - Create a new object when updating a todo.
   - Do not mutate the existing array or its objects.
   - Derive the number of completed todos from the current state instead of storing it separately.

   [View Solution](#)

---

5. **Product Inventory**

   Create a functional component named `ProductInventory` that manages an inventory of products using React state.

   Each product should have the following structure:

   ```ts
   {
     id: number;
     name: string;
     price: number;
     stock: number;
     featured: boolean;
   }
   ```

   The initial state should contain:

   ```ts
   [
     {
       id: 1,
       name: 'Laptop',
       price: 1200,
       stock: 5,
       featured: true,
     },
     {
       id: 2,
       name: 'Keyboard',
       price: 80,
       stock: 10,
       featured: false,
     },
     {
       id: 3,
       name: 'Monitor',
       price: 350,
       stock: 3,
       featured: true,
     },
   ];
   ```

   Render each product with its name, price, stock, and featured status.

   Provide controls to increase or decrease stock, toggle the featured status, and remove a product.

   Also display the number of products currently in the inventory and the number of featured products.

   **Requirements:**
   - Use `useState` to manage the inventory.
   - Use `map()` to update a product.
   - Use `filter()` to remove a product.
   - Create new product objects when updating product properties.
   - Do not mutate the existing array or its objects.
   - Use functional state updates when the new state depends on the previous state.
   - Derive inventory counts from the current state instead of storing duplicated state.

   [View Solution](#)

---
