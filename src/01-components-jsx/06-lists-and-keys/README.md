# Exercises – 06 Lists and Keys

1. **Favorite Books Library**

   Create a functional component named `FavoriteBooksLibrary` that receives the following prop:
   - `books` (array of objects)

   Each object contains the following properties:

   ```ts
   {
     id: number;
     title: string;
     author: string;
     year: number;
   }
   ```

   Render the following structure:

   ```html
   <section>
     <h2>Favorite Books</h2>

     <ul>
       <li>
         <h3>The Great Gatsby</h3>
         <p>F. Scott Fitzgerald</p>
         <span>1925</span>
       </li>

       <li>
         <h3>1984</h3>
         <p>George Orwell</p>
         <span>1949</span>
       </li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Use the `map()` method.
   - Render one `<li>` element for each book.
   - Use the `id` property as the `key`.
   - Display all values using JSX expressions.
   - Avoid duplicating JSX.
   - Keep the component clean and readable.
   - Do not use the array index as the key.

   [View Solution](./01-favorite-books-library/FavoriteBooksLibraryExample.tsx)

---

2. **Employee Directory**

   Create a functional component named `EmployeeDirectory` that receives the following prop:
   - `employees` (array of objects)

   Each object contains the following properties:

   ```ts
   {
     id: number;
     name: string;
     position: string;
     department: string;
     email: string;
   }
   ```

   Render the following structure:

   ```html
   <section>
     <h2>Employee Directory</h2>

     <article>
       <h3>Michael Carter</h3>
       <p>Project Manager</p>
       <p>Management Department</p>
       <span>michael@example.com</span>
     </article>

     <article>
       <h3>Emily Parker</h3>
       <p>UX Designer</p>
       <p>Design Department</p>
       <span>emily@example.com</span>
     </article>
   </section>
   ```

   **Requirements:**
   - Use the `map()` method.
   - Render one `<article>` element for each employee.
   - Use the `id` property as the `key`.
   - Display dynamic values using JSX expressions.
   - Organize the structure clearly.
   - Avoid duplicating JSX.
   - Do not use the array index as the key.

   [View Solution](./02-employee-directory/EmployeeDirectoryExample.tsx)

---

3. **Order History**

   Create a functional component named `OrderHistory` that receives the following prop:
   - `orders` (array of objects)

   Each object contains the following properties:

   ```ts
   {
     id: number;
     productName: string;
     quantity: number;
     price: number;
     status: string;
     orderDate: string;
   }
   ```

   Render the following structure:

   ```html
   <section>
     <h2>Order History</h2>

     <article>
       <h3>Mechanical Keyboard</h3>
       <p>Quantity: 2</p>
       <p>Price: $120</p>
       <p>Delivered</p>
       <span>August 3, 2026</span>
     </article>

     <article>
       <h3>Wireless Mouse</h3>
       <p>Quantity: 1</p>
       <p>Price: $50</p>
       <p>Processing</p>
       <span>August 5, 2026</span>
     </article>
   </section>
   ```

   **Requirements:**
   - Use the `map()` method.
   - Use the `id` property as the `key`.
   - Render more complex structures from an array of objects.
   - Display multiple values inside the same element.
   - Avoid duplicating JSX.
   - Keep the component clean and readable.
   - Do not use the array index as the key.

   [View Solution](#)

---

4. **Category Navigation**

   Create a functional component named `CategoryNavigation` that receives the following prop:
   - `categories` (array of objects)

   Each object contains the following properties:

   ```ts
   {
     id: number;
     name: string;
     items: string[];
   }
   ```

   Render the following structure:

   ```html
   <nav>
     <section>
       <h2>Programming</h2>

       <ul>
         <li>React</li>
         <li>TypeScript</li>
         <li>Node.js</li>
       </ul>
     </section>

     <section>
       <h2>Design</h2>

       <ul>
         <li>Figma</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
       </ul>
     </section>
   </nav>
   ```

   **Requirements:**
   - Use nested `map()` functions.
   - Render multiple lists inside other lists.
   - Assign unique keys to all rendered elements.
   - Display dynamic values using JSX expressions.
   - Organize the structure clearly.
   - Avoid duplicated code.
   - Do not use the array index as the key.

   [View Solution](#)

---

5. **Team Dashboard**

   Create a functional component named `TeamDashboard` that receives the following prop:
   - `teams` (array of objects)

   Each object contains the following properties:

   ```ts
   {
     id: number;
     teamName: string;
     members: {
       id: number;
       name: string;
       role: string;
     }
     [];
   }
   ```

   Render the following structure:

   ```html
   <section>
     <h2>Development Team</h2>

     <ul>
       <li>
         <h3>Michael Carter</h3>
         <p>Frontend Developer</p>
       </li>

       <li>
         <h3>Emily Parker</h3>
         <p>UX Designer</p>
       </li>
     </ul>
   </section>

   <section>
     <h2>Marketing Team</h2>

     <ul>
       <li>
         <h3>Sarah Johnson</h3>
         <p>Content Manager</p>
       </li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Use multiple `map()` functions.
   - Use nested lists.
   - Assign unique keys to all rendered elements.
   - Render complex structures from nested objects.
   - Display dynamic values using JSX expressions.
   - Organize the JSX clearly.
   - Avoid duplicated code.
   - Do not use the array index as the key.
   - Combine everything learned in the previous exercises.

   [View Solution](#)
