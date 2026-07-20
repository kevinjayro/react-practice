# Exercises – 04 Children Composition

1. **Card Container**

   Create a functional component named `Card` that uses the `children` prop.

   Render the following structure:

   ```html
   <article>
     <div>Content</div>
   </article>
   ```

   **Requirements:**
   - Receive content through the `children` prop.
   - Render `children` using JSX.
   - Do not hardcode any dynamic content inside the component.
   - The component should support different types of children.

   [View Solution](#)

---

2. **Modal Wrapper**

   Create a functional component named `Modal` that receives the following prop:
   - `title` (string)

   The component should use the `children` prop.

   Render the following structure:

   ```html
   <div>
     <h2>Delete Account</h2>
     <section>Content</section>
     <button>Close</button>
   </div>
   ```

   **Requirements:**
   - Receive the modal content through `children`.
   - Display the title using JSX expressions.
   - Render `children` inside the content section.
   - Do not hardcode the modal content inside the component.

   [View Solution](#)

---

3. **Page Layout**

   Create a functional component named `PageLayout` that uses the `children` prop.

   Render the following structure:

   ```html
   <main>
     <header>My Application</header>
     <section>Page Content</section>
     <footer>© 2026 Acme Corporation</footer>
   </main>
   ```

   **Requirements:**
   - Receive page content through `children`.
   - Render `children` inside the main section.
   - Keep the header and footer inside the component.
   - Do not hardcode page-specific content inside the component.

   [View Solution](#)

---

4. **Dashboard Composition**

   Create the following functional components:
   - `Dashboard`
   - `DashboardHeader`
   - `DashboardStats`
   - `DashboardActions`

   Use these components together to compose a dashboard section.

   Render the following structure:

   ```html
   <section>
     <header>Sales Dashboard</header>

     <div>Total Sales: $12000</div>

     <button>Export Report</button>
   </section>
   ```

   **Requirements:**
   - Use `children` to compose the dashboard sections.
   - The `Dashboard` component should not know what content is inside each section.
   - Avoid passing all information through props.
   - Create reusable components that can be combined together.

   [View Solution](#)

---

5. **Profile Composition**

   Create the following functional components:
   - `Profile`
   - `ProfileHeader`
   - `ProfileDetails`
   - `ProfileFooter`

   Use component composition to build a profile card.

   Render the following structure:

   ```html
   <article>
     <header>Sarah Williams</header>

     <div>Software Engineer</div>

     <footer>Contact Information</footer>
   </article>
   ```

   **Requirements:**
   - Use `children` to compose the different profile sections.
   - The `Profile` component should receive its content through `children`.
   - Each section should be a reusable component.
   - Do not pass all information through props.

   [View Solution](#)
