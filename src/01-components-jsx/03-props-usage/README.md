# Exercises – 03 Props Usage

1. **Company Badge**

   Create a functional component named `CompanyBadge` that receives the following props:
   - `companyName` (string)
   - `industry` (string)
   - `employees` (number)

   Render the following structure:

   ```html
   <section>
     <h1>OpenAI</h1>
     <p>Industry: Artificial Intelligence</p>
     <p>Employees: 4500</p>
   </section>
   ```

   **Requirements:**
   - Receive all values through props.
   - Display every value using JSX expressions.
   - Do not hardcode any dynamic values inside the component.

   [View Solution](./01-company-badge/CompanyBadge.tsx)

---

2. **Book Details**

   Create a functional component named `BookDetails` that receives the following props:
   - `title` (string)
   - `author` (string)
   - `pages` (number)
   - `publishedYear` (number)

   Render the following structure:

   ```html
   <article>
     <h2>Atomic Habits</h2>
     <p>Author: James Clear</p>
     <p>Pages: 320</p>
     <p>Published: 2018</p>
   </article>
   ```

   **Requirements:**
   - Receive all values through props.
   - Render every dynamic value using JSX expressions.
   - Do not hardcode any dynamic values inside the component.

   [View Solution](./02-book-details/BookDetails.tsx)

---

3. **Weather Report**

   Create a functional component named `WeatherReport` that receives the following props:
   - `city` (string)
   - `temperature` (number)
   - `condition` (string)
   - `humidity` (number)

   Render the following structure:

   ```html
   <section>
     <h1>Cochabamba</h1>
     <p>Temperature: 22°C</p>
     <p>Condition: Sunny</p>
     <p>Humidity: 45%</p>
   </section>
   ```

   **Requirements:**
   - Receive all values through props.
   - Use template literals where appropriate.
   - Do not hardcode any dynamic values inside the component.

   [View Solution](#)

---

4. **Course Card**

   Create a functional component named `CourseCard` that receives the following props:
   - `title` (string)
   - `instructor` (string)
   - `duration` (string)
   - `students` (number)
   - `isOnline` (boolean)

   Render the following structure:

   ```html
   <section>
     <h2>React Fundamentals</h2>
     <p>Instructor: Sarah Wilson</p>
     <p>Duration: 12 hours</p>
     <p>Students: 850</p>
     <p>Mode: Online</p>
   </section>
   ```

   **Requirements:**
   - Receive all values through props.
   - Display `"Online"` when `isOnline` is `true`, otherwise `"On-site"`.
   - Render every dynamic value using JSX expressions.
   - Do not hardcode any dynamic values inside the component.

   [View Solution](#)

---

5. **Restaurant Menu**

   Create a functional component named `RestaurantMenu` that receives the following props:
   - `restaurantName` (string)
   - `mainDish` (string)
   - `price` (number)
   - `ingredients` (array of strings)

   Render the following structure:

   ```html
   <section>
     <h1>Italian Corner</h1>
     <p>Main Dish: Lasagna</p>
     <p>Price: $14.99</p>
     <p>Ingredients: Pasta,Cheese,Tomato Sauce,Beef</p>
   </section>
   ```

   **Requirements:**
   - Receive every value through props.
   - Display the ingredients array directly.
   - Do not use `map()`.
   - Render every dynamic value using JSX expressions.
   - Do not hardcode any dynamic values inside the component.

   [View Solution](#)
