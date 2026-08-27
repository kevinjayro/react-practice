# Exercises – 03 Derived State Patterns

1. **Shopping Cart Summary**

   Build a `ShoppingCartSummary` component that manages a list of products and derives the total quantity, subtotal, tax, and final total from the current products. The user must be able to increase or decrease product quantities, and the summary must always reflect the current cart.

   The product data should use the following structure:

   ```ts
   type Product = {
     id: number;
     name: string;
     price: number;
     quantity: number;
   };
   ```

   The initial state should contain:

   ```ts
   const initialProducts: Product[] = [
     { id: 1, name: 'Keyboard', price: 80, quantity: 1 },
     { id: 2, name: 'Mouse', price: 40, quantity: 2 },
     { id: 3, name: 'Monitor', price: 300, quantity: 1 },
   ];
   ```

   Render each product with quantity controls and a summary containing the derived cart values.

   ```html
   <section>
     <h2>Shopping Cart</h2>

     <div>
       <span>Keyboard</span>
       <button>-</button>
       <span>1</span>
       <button>+</button>
       <span>$80.00</span>
     </div>

     <div>
       <span>Mouse</span>
       <button>-</button>
       <span>2</span>
       <button>+</button>
       <span>$80.00</span>
     </div>

     <div>
       <span>Monitor</span>
       <button>-</button>
       <span>1</span>
       <button>+</button>
       <span>$300.00</span>
     </div>

     <aside>
       <p>Total items: 4</p>
       <p>Subtotal: $460.00</p>
       <p>Tax: $46.00</p>
       <strong>Total: $506.00</strong>
     </aside>
   </section>
   ```

   **Requirements:**
   - Store the products as state and use them as the single source of truth for the cart.
   - Derive total items, subtotal, tax, and final total from the products.
   - Do not store any calculated cart value as state.
   - Changing a quantity must automatically update every affected derived value.
   - A quantity cannot be reduced below `1`.

   [View Solution](./01-shopping-cart-summary/ShoppingCartSummary.tsx)

---

2. **Task Progress Dashboard**

   Build a `TaskProgressDashboard` component that manages a list of tasks and derives the progress statistics shown in the dashboard. A checkbox should allow the user to toggle the completion state of each task.

   The task data should use the following structure:

   ```ts
   type Task = {
     id: number;
     title: string;
     completed: boolean;
   };
   ```

   The initial state should contain:

   ```ts
   const initialTasks: Task[] = [
     { id: 1, title: 'Learn useState', completed: true },
     { id: 2, title: 'Practice derived state', completed: true },
     { id: 3, title: 'Build a dashboard', completed: false },
     { id: 4, title: 'Review TypeScript', completed: false },
   ];
   ```

   Render the progress information above the task list and update it whenever a task changes.

   ```html
   <section>
     <h2>Task Progress</h2>

     <div>
       <p>Total: 4</p>
       <p>Completed: 2</p>
       <p>Remaining: 2</p>
       <p>Progress: 50%</p>
       <p>Status: In Progress</p>
     </div>

     <ul>
       <li>
         <label>
           <input type="checkbox" checked />
           Learn useState
         </label>
       </li>

       <li>
         <label>
           <input type="checkbox" checked />
           Practice derived state
         </label>
       </li>

       <li>
         <label>
           <input type="checkbox" />
           Build a dashboard
         </label>
       </li>

       <li>
         <label>
           <input type="checkbox" />
           Review TypeScript
         </label>
       </li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Store only the tasks as state.
   - Derive total, completed, remaining, and completion percentage from the tasks.
   - Derive the progress status from the current completion percentage: `Not Started`, `In Progress`, or `Completed`.
   - Do not store any of these derived values as state.
   - Handle an empty task list without producing `NaN`.

   [View Solution](./02-task-progress-dashboard/TaskProgressDashboard.tsx)

---

3. **Product Catalog Filter**

   Build a `ProductCatalog` component where users can search products by name and filter them by category. The displayed products and result information must be derived from the current search and filter selections.

   The product data should use the following structure:

   ```ts
   type Category = 'electronics' | 'office' | 'accessories';

   type Product = {
     id: number;
     name: string;
     category: Category;
     price: number;
   };
   ```

   The initial data should contain:

   ```ts
   const products: Product[] = [
     { id: 1, name: 'Keyboard', category: 'electronics', price: 80 },
     { id: 2, name: 'Desk Lamp', category: 'office', price: 45 },
     { id: 3, name: 'Mouse', category: 'accessories', price: 40 },
     { id: 4, name: 'Monitor', category: 'electronics', price: 300 },
   ];
   ```

   Render a search field, category selector, result count, and the products matching the active filters.

   ```html
   <section>
     <h2>Product Catalog</h2>

     <input type="search" placeholder="Search products..." />

     <select>
       <option>All Categories</option>
       <option>Electronics</option>
       <option>Office</option>
       <option>Accessories</option>
     </select>

     <p>2 products found</p>

     <ul>
       <li>Keyboard — Electronics — $80.00</li>
       <li>Monitor — Electronics — $300.00</li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Keep the products as static source data and store only the search query and selected category as state.
   - Derive the visible products from the products, search query, and selected category.
   - Derive the result count from the visible products instead of storing it separately.
   - When both filters are active, a product must satisfy both conditions.
   - Searching must be case-insensitive and ignore leading or trailing spaces.
   - Display an empty state when no products match.

   [View Solution](./03-product-catalog/ProductCatalog.tsx)

---

4. **Invoice Payment Dashboard**

   Build an `InvoicePaymentDashboard` component that manages invoice payment amounts and derives the financial information displayed for each invoice. The user must be able to mark an unpaid invoice as fully paid.

   The invoice data should use the following structure:

   ```ts
   type Invoice = {
     id: number;
     client: string;
     amount: number;
     paidAmount: number;
   };
   ```

   The initial state should contain:

   ```ts
   const initialInvoices: Invoice[] = [
     { id: 1, client: 'Acme Corp', amount: 1000, paidAmount: 1000 },
     { id: 2, client: 'Globex Inc', amount: 750, paidAmount: 300 },
     { id: 3, client: 'Stark Industries', amount: 1500, paidAmount: 0 },
   ];
   ```

   Render each invoice with its derived payment information and a button for pending invoices.

   ```html
   <section>
     <h2>Invoice Dashboard</h2>

     <p>Total Outstanding: $1950.00</p>

     <article>
       <h3>Acme Corp</h3>
       <p>Amount: $1000.00</p>
       <p>Paid: $1000.00</p>
       <p>Remaining: $0.00</p>
       <p>Payment: 100%</p>
       <strong>Status: Paid</strong>
     </article>

     <article>
       <h3>Globex Inc</h3>
       <p>Amount: $750.00</p>
       <p>Paid: $300.00</p>
       <p>Remaining: $450.00</p>
       <p>Payment: 40%</p>
       <strong>Status: Pending</strong>
       <button>Mark as Paid</button>
     </article>

     <article>
       <h3>Stark Industries</h3>
       <p>Amount: $1500.00</p>
       <p>Paid: $0.00</p>
       <p>Remaining: $1500.00</p>
       <p>Payment: 0%</p>
       <strong>Status: Pending</strong>
       <button>Mark as Paid</button>
     </article>
   </section>
   ```

   **Requirements:**
   - Store only the invoice payment data as state and use `amount` and `paidAmount` as the source values.
   - Derive remaining balance, payment percentage, status, and total outstanding balance.
   - Do not store any of these derived values as state.
   - Marking an invoice as paid must change only its source payment data.
   - An invoice is `Paid` when `paidAmount >= amount`; otherwise it is `Pending`.
   - Handle an invoice amount of `0` without producing an invalid percentage.

   [View Solution](./04-invoice-payment-dashboard/InvoicePaymentDashboard.tsx)

---

5. **User Profile Completion**

   Build a `UserProfileCompletion` component that manages a user's profile and derives its completion information. As the user fills in the form, the component must determine which fields are complete, which fields are missing, the completion percentage, and whether the profile is ready to be saved.

   The profile data should use the following structure:

   ```ts
   type Profile = {
     firstName: string;
     lastName: string;
     email: string;
     phone: string;
     bio: string;
   };
   ```

   The initial state should contain:

   ```ts
   const initialProfile: Profile = {
     firstName: '',
     lastName: '',
     email: '',
     phone: '',
     bio: '',
   };
   ```

   Render the profile form together with the derived completion information.

   ```html
   <section>
     <h2>Profile Completion</h2>

     <p>Completed fields: 3 / 5</p>
     <p>Profile completion: 60%</p>

     <h3>Missing fields</h3>

     <ul>
       <li>Phone</li>
       <li>Bio</li>
     </ul>

     <form>
       <label>
         First name
         <input type="text" />
       </label>

       <label>
         Last name
         <input type="text" />
       </label>

       <label>
         Email
         <input type="email" />
       </label>

       <label>
         Phone
         <input type="tel" />
       </label>

       <label>
         Bio
         <textarea></textarea>
       </label>

       <button disabled>Save Profile</button>
     </form>
   </section>
   ```

   **Requirements:**
   - Store only the profile object as state.
   - Derive the completed field count, missing fields, completion percentage, and `isComplete` from the profile.
   - Do not create separate state variables for values that can be calculated from the profile.
   - Treat fields containing only whitespace as incomplete.
   - Use `isComplete` to determine whether the Save button is enabled.
   - The derived information must update whenever a profile field changes.

   [View Solution](./05-user-profile-completion/UserProfileCompletion.tsx)
