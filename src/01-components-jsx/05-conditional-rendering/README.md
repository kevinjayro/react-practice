# Exercises – 05 Conditional Rendering

1. **User Status**

   Create a functional component named `UserStatus` that receives the following prop:
   - `isOnline` (boolean)

   Render the following structure:

   ```html
   <p>Online</p>
   ```

   when the user is online.

   Otherwise, render:

   ```html
   <p>Offline</p>
   ```

   **Requirements:**
   - Use conditional rendering.
   - Display "Online" when `isOnline` is `true`.
   - Display "Offline" when `isOnline` is `false`.
   - Use JSX expressions.
   - Use the ternary operator.
   - Keep the component simple and readable.

   [View Solution](./01-user-status/UserStatus.tsx)

---

2. **Product Availability**

   Create a functional component named `ProductAvailability` that receives the following props:
   - `productName` (string)
   - `inStock` (boolean)

   Render the following structure:

   ```html
   <div>
     <h2>Mechanical Keyboard</h2>
     <p>In Stock</p>
   </div>
   ```

   when the product is available.

   Otherwise, render:

   ```html
   <div>
     <h2>Mechanical Keyboard</h2>
     <p>Out of Stock</p>
   </div>
   ```

   **Requirements:**
   - Always display the product name.
   - Use conditional rendering for the availability message.
   - Avoid duplicating the parent element.
   - Display dynamic values using JSX expressions.
   - Practice conditional rendering inside an existing structure.

   [View Solution](./02-product-availability/ProductAvailability.tsx)

---

3. **Notification Message**

   Create a functional component named `NotificationMessage` that receives the following props:
   - `showMessage` (boolean)
   - `message` (string)

   Render the following structure only when `showMessage` is `true`:

   ```html
   <div>
     <p>Your changes have been saved.</p>
   </div>
   ```

   If `showMessage` is `false`, render nothing.

   **Requirements:**
   - Use conditional rendering with the logical AND (`&&`) operator.
   - Display the message using JSX expressions.
   - Do not render empty containers.
   - Practice rendering optional UI elements.

   [View Solution](#)

---

4. **Admin Panel**

   Create a functional component named `AdminPanel` that receives the following prop:
   - `isAdmin` (boolean)

   When the user is an administrator, render:

   ```html
   <section>
     <h2>Admin Panel</h2>
     <button>Manage Users</button>
   </section>
   ```

   Otherwise, render:

   ```html
   <p>Access Denied</p>
   ```

   **Requirements:**
   - Use conditional rendering with an early return (`if` statement).
   - Render completely different JSX depending on the condition.
   - Keep the component readable.
   - Avoid unnecessary duplication.

   [View Solution](#)

---

5. **User Profile Card**

   Create a functional component named `UserProfileCard` that receives the following props:
   - `name` (string)
   - `role` (string)
   - `isVerified` (boolean)
   - `hasPremium` (boolean)

   Render the following structure:

   ```html
   <article>
     <h2>Emma Johnson</h2>
     <p>Frontend Developer</p>
     <span>Verified Account</span>
     <button>Premium Settings</button>
   </article>
   ```

   **Requirements:**
   - Always display the user's name.
   - Always display the user's role.
   - Display "Verified Account" only when `isVerified` is `true`.
   - Display the "Premium Settings" button only when `hasPremium` is `true`.
   - Use conditional rendering for optional elements.
   - Use JSX expressions to display dynamic values.
   - Combine multiple conditions inside the same component.
   - Avoid duplicating the main structure.

   [View Solution](#)
