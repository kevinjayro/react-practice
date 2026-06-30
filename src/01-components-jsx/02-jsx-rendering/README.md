# Exercises – 02 JSX Rendering

1. **User Profile**

   Create a functional component named `UserProfile`.

   Inside the component, create:
   - A variable named `firstName` (string).
   - A variable named `lastName` (string).
   - A variable named `age` (number).

   Assign appropriate values to each variable.

   Render the following structure:

   ```html
   <section>
     <h1>Ethan Walker</h1>
     <p>Age: 25</p>
   </section>
   ```

   **Requirements:**
   - Display the full name by combining `firstName` and `lastName`.
   - Render the age using a JSX expression.
   - Do not hardcode any dynamic values inside the JSX.

   [View Solution](./01-user-profile/UserProfile.tsx)

---

2. **Shopping Cart Summary**

   Create a functional component named `ShoppingCartSummary`.

   Inside the component, create:
   - A variable named `productName` (string).
   - A variable named `price` (number).
   - A variable named `quantity` (number).
   - A variable named `discount` (number representing a percentage).

   Assign appropriate values to each variable.

   Render the following structure:

   ```html
   <section>
     <h2>Mechanical Keyboard</h2>
     <p>Unit Price: $89.99</p>
     <p>Quantity: 2</p>
     <p>Discount: 10%</p>
     <p>Total: $161.98</p>
   </section>
   ```

   **Requirements:**
   - Calculate the total price after applying the discount.
   - Perform the calculation directly inside JSX.
   - Do not create an additional variable for the final total.
   - Do not hardcode any dynamic values inside the JSX.

   [View Solution](#)

---

3. **Employee Dashboard**

   Create a functional component named `EmployeeDashboard`.

   Inside the component, create an object named `employee` with the following properties:
   - `firstName`
   - `lastName`
   - `position`
   - `department`
   - `salary`

   Assign appropriate values to each property.

   Render the following structure:

   ```html
   <section>
     <h1>Alice Johnson</h1>
     <p>Position: Frontend Developer</p>
     <p>Department: Engineering</p>
     <p>Monthly Salary: $5200</p>
   </section>
   ```

   **Requirements:**
   - Access the object's properties directly from JSX.
   - Do not destructure the object.
   - Do not hardcode any dynamic values.

   [View Solution](#)

---

4. **Movie Collection**

   Create a functional component named `MovieCollection`.

   Inside the component, create:
   - An array named `movies` containing at least four movie titles.
   - A variable named `collectionName` (string).

   Render the following structure:

   ```html
   <section>
     <h1>Favorite Movies</h1>
     <p>Total Movies: 4</p>
     <p>Interstellar,Inception,The Prestige,Dune</p>
   </section>
   ```

   **Requirements:**
   - Display the collection name dynamically.
   - Display the total number of movies using the array.
   - Render the array directly.
   - Do not use `map()`.
   - Do not hardcode any dynamic values.

   [View Solution](#)

---

5. **Developer Portfolio**

   Create a functional component named `DeveloperPortfolio`.

   Inside the component, create:
   - A variable named `firstName` (string).
   - A variable named `lastName` (string).
   - A variable named `profession` (string).
   - A variable named `yearsOfExperience` (number).
   - An array named `technologies` containing at least three technologies.
   - A function named `getGreeting` that returns a welcome message.

   Assign appropriate values to all variables.

   Render the following structure:

   ```html
   <main>
     <h1>Welcome to my portfolio!</h1>
     <h2>John Smith</h2>
     <p>Frontend Developer</p>
     <p>Experience: 3 years</p>
     <p>Primary Technologies: React,TypeScript,Node.js</p>
     <p>Profile: JOHN SMITH</p>
   </main>
   ```

   **Requirements:**
   - Call the function from JSX.
   - Build the full name using template literals.
   - Display the technologies array.
   - Convert the full name to uppercase using a string method.
   - Use JSX expressions to render every dynamic value.
   - Do not hardcode any dynamic values inside the JSX.

   [View Solution](#)
