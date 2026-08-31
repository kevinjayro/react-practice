# Exercises – 04 Controlled Input

1. **User Registration Form**

   Build a `RegistrationForm` component that manages a user's registration fields as controlled inputs. The form should allow the user to enter their name, email, password, and password confirmation, display validation feedback, and prevent submission when the data is invalid.

   The form state should contain:

   ```ts
   type RegistrationFormData = {
     name: string;
     email: string;
     password: string;
     confirmPassword: string;
   };
   ```

   Render the form with controlled inputs and validation messages for each invalid field.

   ```html
   <form>
     <label>
       Full Name
       <input type="text" value="John Doe" />
     </label>

     <label>
       Email
       <input type="email" value="john@example.com" />
     </label>

     <label>
       Password
       <input type="password" value="••••••••" />
     </label>

     <label>
       Confirm Password
       <input type="password" value="••••••••" />
     </label>

     <button type="submit">Create Account</button>
   </form>
   ```

   **Requirements:**
   - Use controlled inputs for every form field.
   - Store all form values in React state.
   - Use a single change handler where appropriate instead of duplicating handlers unnecessarily.
   - Validate that all fields are required.
   - Validate that the email contains a valid basic email format.
   - Validate that the password and confirmation match.
   - Prevent form submission when validation fails.
   - Display accessible validation messages associated with the relevant inputs.
   - Use immutable state updates.

   [View Solution](./01-registration-form/RegistrationForm.tsx)

---

2. **Product Search and Filter Panel**

   Build a `ProductSearch` component with controlled inputs that allows users to search products by name, select a category, and optionally filter by availability. The displayed product list should update immediately whenever an input changes.

   The product data should use this structure:

   ```ts
   type Product = {
     id: number;
     name: string;
     category: 'Electronics' | 'Office' | 'Accessories';
     price: number;
     inStock: boolean;
   };

   const products: Product[] = [
     {
       id: 1,
       name: 'Mechanical Keyboard',
       category: 'Electronics',
       price: 120,
       inStock: true,
     },
     { id: 2, name: 'Desk Lamp', category: 'Office', price: 45, inStock: true },
     {
       id: 3,
       name: 'Wireless Mouse',
       category: 'Accessories',
       price: 60,
       inStock: false,
     },
     {
       id: 4,
       name: 'Monitor',
       category: 'Electronics',
       price: 300,
       inStock: true,
     },
   ];
   ```

   Render the search controls above the filtered product results.

   ```html
   <section>
     <input type="search" value="mouse" placeholder="Search products..." />

     <select>
       <option>All Categories</option>
       <option>Electronics</option>
       <option>Office</option>
       <option>Accessories</option>
     </select>

     <label>
       <input type="checkbox" checked />
       In stock only
     </label>

     <ul>
       <li>Wireless Mouse — $60 — Out of stock</li>
     </ul>
   </section>
   ```

   **Requirements:**
   - Use controlled state for the search input, category select, and checkbox.
   - Filter products based on all active controls.
   - Make the search case-insensitive.
   - Show all products when no search or category filter is active.
   - Show a clear empty state when no products match.
   - Do not mutate the original product array.
   - Keep filtered products as derived data rather than duplicating them in state.
   - Use appropriate TypeScript types for the category values and product objects.
   - Ensure the checkbox and select are keyboard accessible through native form controls.

   [View Solution](#)

---

3. **Shipping Address Form**

   Build a `ShippingAddressForm` component that manages a shipping address using controlled inputs. The user should be able to enter their address information and toggle whether their billing address is the same as their shipping address.

   The address data should use this structure:

   ```ts
   type Address = {
     firstName: string;
     lastName: string;
     street: string;
     city: string;
     postalCode: string;
     country: string;
   };
   ```

   The initial shipping form should contain empty values and the billing-address checkbox should be unchecked.

   ```ts
   const initialAddress: Address = {
     firstName: '',
     lastName: '',
     street: '',
     city: '',
     postalCode: '',
     country: '',
   };
   ```

   Render the shipping fields and conditionally display the billing address fields when the checkbox is not selected.

   ```html
   <form>
     <h2>Shipping Address</h2>

     <input type="text" placeholder="First name" />
     <input type="text" placeholder="Last name" />
     <input type="text" placeholder="Street address" />
     <input type="text" placeholder="City" />
     <input type="text" placeholder="Postal code" />
     <select>
       <option>Select country</option>
       <option>United States</option>
       <option>Canada</option>
       <option>Bolivia</option>
     </select>

     <label>
       <input type="checkbox" />
       Billing address is the same as shipping address
     </label>

     <button type="submit">Continue</button>
   </form>
   ```

   **Requirements:**
   - Use controlled inputs for every address field.
   - Store the shipping address as a typed object.
   - Update nested address properties immutably.
   - Use a controlled checkbox for the billing-address option.
   - Display billing fields only when the checkbox is unchecked.
   - Validate required fields before allowing submission.
   - Treat postal codes as strings so leading zeros are preserved.
   - Reset or clear billing form state appropriately when the billing section is disabled.
   - Use semantic labels for every form control.

   [View Solution](#)

---

4. **Feedback Form with Character Limit**

   Build a `FeedbackForm` component that lets a user select a feedback category, choose a satisfaction rating, and write a message. The message should be a controlled textarea with a maximum length and a live character counter.

   The available feedback categories should be:

   ```ts
   type FeedbackCategory =
     | 'Bug Report'
     | 'Feature Request'
     | 'General Feedback';

   const categories: FeedbackCategory[] = [
     'Bug Report',
     'Feature Request',
     'General Feedback',
   ];
   ```

   Render the feedback controls and update the character counter as the user types.

   ```html
   <form>
     <label>
       Category
       <select>
         <option>Bug Report</option>
         <option>Feature Request</option>
         <option>General Feedback</option>
       </select>
     </label>

     <fieldset>
       <legend>How satisfied are you?</legend>
       <label><input type="radio" name="rating" value="1" /> 1</label>
       <label><input type="radio" name="rating" value="2" /> 2</label>
       <label><input type="radio" name="rating" value="3" /> 3</label>
       <label><input type="radio" name="rating" value="4" /> 4</label>
       <label><input type="radio" name="rating" value="5" /> 5</label>
     </fieldset>

     <label>
       Message
       <textarea maxlength="200"></textarea>
     </label>

     <p>37 / 200 characters</p>

     <button type="submit">Send Feedback</button>
   </form>
   ```

   **Requirements:**
   - Use controlled state for the select, radio group, and textarea.
   - Store the selected rating as a number rather than relying on an untyped string.
   - Enforce a maximum message length of 200 characters.
   - Display the current character count and maximum allowed characters.
   - Prevent submission when the category, rating, or message is missing.
   - Provide a useful empty-state validation message for the message field.
   - Use a semantic `fieldset` and `legend` for the rating group.
   - Ensure each radio button has the same `name` so only one rating can be selected.

   [View Solution](#)

---

5. **Multi-Step Checkout Preferences**

   Build a `CheckoutPreferences` component that manages checkout options using controlled form inputs. The user should select a delivery method, choose a payment method, and optionally request gift wrapping. The available payment methods should change depending on the selected delivery method.

   Use the following structured data:

   ```ts
   type DeliveryMethod = 'standard' | 'express' | 'pickup';
   type PaymentMethod = 'card' | 'paypal' | 'cash';

   type CheckoutState = {
     delivery: DeliveryMethod;
     payment: PaymentMethod;
     giftWrap: boolean;
   };
   ```

   The initial checkout state should be:

   ```ts
   const initialCheckout: CheckoutState = {
     delivery: 'standard',
     payment: 'card',
     giftWrap: false,
   };
   ```

   Render the checkout options and dynamically update the available payment choices based on the selected delivery method.

   ```html
   <section>
     <h2>Checkout Preferences</h2>

     <fieldset>
       <legend>Delivery Method</legend>

       <label
         ><input type="radio" name="delivery" checked /> Standard
         Delivery</label
       >
       <label><input type="radio" name="delivery" /> Express Delivery</label>
       <label><input type="radio" name="delivery" /> Store Pickup</label>
     </fieldset>

     <fieldset>
       <legend>Payment Method</legend>

       <label><input type="radio" name="payment" checked /> Credit Card</label>
       <label><input type="radio" name="payment" /> PayPal</label>
     </fieldset>

     <label>
       <input type="checkbox" />
       Add gift wrapping
     </label>

     <button type="button">Continue to Payment</button>
   </section>
   ```

   **Requirements:**
   - Use controlled radio inputs and checkbox state.
   - Store the checkout configuration in a typed state object.
   - Update the state immutably.
   - Standard and express delivery should allow card and PayPal.
   - Store pickup should allow card and cash.
   - Automatically correct the selected payment method if it becomes invalid after changing delivery.
   - Do not store the available payment methods as duplicated state; derive them from the selected delivery method.
   - Ensure each radio group uses a unique and consistent `name`.
   - Disable the continue button when the current checkout configuration is invalid.
   - Use semantic fieldsets and legends for related controls.

   [View Solution](#)
