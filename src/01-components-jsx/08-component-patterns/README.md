# Exercises – 08 Component Patterns

1. **Reusable Card**

   Create a functional component named `Card` that uses the `children` prop to allow the parent component to control its content.

   Render the following structure when the component is used:

   ```html
   <article>
     <h2>Frontend Development</h2>
     <p>Learn React and TypeScript.</p>
   </article>
   ```

   **Requirements:**
   - Do not create specific props such as `title` or `description`.
   - The `Card` component should only be responsible for the card structure.
   - The parent component should decide what content is rendered.
   - Use TypeScript to type the component props.

   [View Solution](./01-reusable-card/CourseInfo.tsx)

---

2. **Panel with Slots**

   Create a functional component named `Panel` that allows the parent component to provide different pieces of content for its header, main content, and footer.

   Render the following structure when the component is used:

   ```html
   <section>
     <header>
       <h2>Account Settings</h2>
     </header>

     <div>
       <p>Manage your account information.</p>
     </div>

     <footer>
       <button>Save Changes</button>
     </footer>
   </section>
   ```

   **Requirements:**
   - Receive `header`, `content`, and `footer` through props.
   - Each prop should accept React-renderable content.
   - Render each prop in its corresponding section.
   - Do not create props such as `title`, `description`, or `buttonText`.
   - The `Panel` component should not contain the specific content shown above.
   - Use TypeScript to define the props.

   [View Solution](./02-panel-with-slots/PanelExample.tsx)

---

3. **Compound Tabs**

   Create a reusable tabs interface using the Compound Component pattern.

   The components should be used with the following structure:

   ```tsx
   <Tabs>
     <Tabs.List>
       <Tabs.Tab value="profile">Profile</Tabs.Tab>
       <Tabs.Tab value="settings">Settings</Tabs.Tab>
     </Tabs.List>

     <Tabs.Panel value="profile">
       <p>Profile information</p>
     </Tabs.Panel>

     <Tabs.Panel value="settings">
       <p>Account settings</p>
     </Tabs.Panel>
   </Tabs>
   ```

   **Requirements:**
   - Keep track of the currently active tab.
   - Selecting a tab should update the active tab.
   - Only the panel that matches the active tab should display its content.
   - The tab components must work together through the `Tabs` component.
   - The parent component should decide the tab labels and panel content.
   - Do not hardcode specific tab names or panel content inside the reusable components.
   - Use TypeScript to type the component props and tab values.

   [View Solution](#)

---

4. **Controlled Search Input**

   Create a functional component named `SearchInput` whose value and change behavior are controlled by its parent component.

   Render the following structure when the input contains `keyboard`:

   ```html
   <section>
     <label for="search">Search products</label>
     <input id="search" value="keyboard" />
     <p>Searching for: keyboard</p>
   </section>
   ```

   **Requirements:**
   - The parent component must own the input state.
   - Pass the current value to `SearchInput` through props.
   - Pass an `onChange` callback through props.
   - Do not create state inside `SearchInput`.
   - Display the current value below the input.
   - Type the props and input change event correctly with TypeScript.

   [View Solution](#)

---

5. **Flexible List Rendering**

   Create a reusable component named `List` that receives an array of items and a render function that determines how each item should be displayed.

   Use the component to render the following structure:

   ```html
   <ul>
     <li>React</li>
     <li>TypeScript</li>
     <li>Node.js</li>
   </ul>
   ```

   **Requirements:**
   - Receive the items and `renderItem` function through props.
   - Use `map()` to iterate over the items.
   - Use `renderItem` to determine how each item is rendered.
   - Provide a unique `key` for each rendered item.
   - The `List` component should not contain any technology-specific content.
   - The parent component should decide how each item is rendered.
   - The component should be reusable with different kinds of data.
   - Use TypeScript to correctly type the items and `renderItem` function.

   [View Solution](#)
