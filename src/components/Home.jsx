import {Link} from "react-router-dom";


export default function Home() {
  return (
    <>
      <h1>React exercises collection</h1>
      <p>This page contains different exercises / mini-projects. They allow me to learn and exercise React concepts.</p>

      <h2>Initial exercises suggested by ChatGPT:</h2>
      <ol>
        <li>
          <h3><Link to={"/counter"}>Click Counter (Counter App)</Link></h3>
          <ul>
            <li>Use <code>useState</code> to store the counter value.</li>
            <li>Add 2 buttons: <code>+1</code> and <code>-1</code>.</li>
            <li>Add a <code>Reset</code> button.</li>
            <li className="practice">You will practice: <code>useState</code>, event handling.</li>
          </ul>
        </li>

        <li>
          <h3>User Form</h3>
          <ul>
            <li>Create a form with fields: <strong>name</strong>, <strong>email</strong>.</li>
            <li>After clicking <code>Save</code>, display the entered user data below the form.</li>
            <li className="practice">You will practice: <code>useState</code> for objects, form
              handling, <code>onChange</code>.
            </li>
          </ul>
        </li>

        <li>
          <h3>List Filtering</h3>
          <ul>
            <li>You have an array of products (e.g., <code>["apple", "banana", "pear"]</code>).</li>
            <li>Add an input field where the user can type text.</li>
            <li>Display only the products that match the entered text.</li>
            <li className="practice">You will practice: <code>useState</code>, <code>filter()</code>, dynamic rendering.
            </li>
          </ul>
        </li>

        <li>
          <h3>Random Quote</h3>
          <ul>
            <li>Create an array of several quotes.</li>
            <li>Add a button <code>Show random quote</code>, which picks and displays one element from the array.</li>
            <li className="practice">You will practice: array operations, <code>Math.random()</code>.</li>
          </ul>
        </li>

        <li>
          <h3>API – User List</h3>
          <ul>
            <li>Fetch data from an API, e.g. <code>https://jsonplaceholder.typicode.com/users</code>.</li>
            <li>Display a list of names and emails.</li>
            <li>Add a <code>Refresh</code> button that fetches the data again.</li>
            <li className="practice">You will practice: <code>useEffect</code>, <code>fetch</code>, state management.
            </li>
          </ul>
        </li>

        <li>
          <h3>Light/Dark Mode Toggle</h3>
          <ul>
            <li>Add a button <code>Toggle theme</code>.</li>
            <li>On click, switch the app background between light and dark.</li>
            <li className="practice">You will practice: <code>useState</code>, conditional CSS classes.</li>
          </ul>
        </li>

        <li>
          <h3>Simple Image Gallery</h3>
          <ul>
            <li>Create an array of image URLs.</li>
            <li>Display them as thumbnails.</li>
            <li>Clicking a thumbnail shows the image in a larger view.</li>
            <li className="practice">You will practice: list mapping, passing props.</li>
          </ul>
        </li>
      </ol>
    </>
  )
}