import {Link} from "react-router-dom";
import {useEffect} from "react";


export default function Home() {

  useEffect(() => {
    const el = document.getElementById("lastExercise");
    el && el.scrollIntoView({behavior: "smooth"});
  }, []);

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
          <h3><Link to={"/form"}>User Form</Link></h3>
          <ul>
            <li>Create a form with fields: <strong>name</strong>, <strong>email</strong>.</li>
            <li>After clicking <code>Save</code>, display the entered user data below the form.</li>
            <li className="practice">You will practice: <code>useState</code> for objects, form
              handling, <code>onChange</code>.
            </li>
          </ul>
        </li>

        <li>
          <h3><Link to={"/list-filter"}>List Filtering</Link></h3>
          <ul>
            <li>You have an array of products (e.g., <code>["apple", "banana", "pear"]</code>).</li>
            <li>Add an input field where the user can type text.</li>
            <li>Display only the products that match the entered text.</li>
            <li className="practice">You will practice: <code>useState</code>, <code>filter()</code>, dynamic rendering.
            </li>
          </ul>
        </li>

        <li>
          <h3> <Link to={"/quotes"}>Random Quote</Link></h3>
          <ul>
            <li>Create an array of several quotes.</li>
            <li>Add a button <code>Show random quote</code>, which picks and displays one element from the array.</li>
            <li className="practice">You will practice: array operations, <code>Math.random()</code>.</li>
          </ul>
        </li>

        <li>
          <h3><Link to={"/api-users"}>API – User List</Link></h3>
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
          <h3 id="lastExercise" ><Link to="/image-gallery">Simple Image Gallery</Link></h3>
          <ul>
            <li>Create an array of image URLs.</li>
            <li>Display them as thumbnails.</li>
            <li>Clicking a thumbnail shows the image in a larger view.</li>
            <li className="practice">You will practice: list mapping, passing props.</li>
          </ul>
        </li>
      </ol>

      <h2>My or others ideas</h2>
      <ol>
        <li>
          <h3 id="next-exercise">Improve navbar</h3>
          <ul>
            <li>Highlight the current open link</li>
            <li>Style home page link in other way</li>
          </ul>
        </li>

        <li>
          <h3>To the top button</h3>
          <ul>
            <li>Add button to move view to the top of the website</li>
            <li>Make sure it works on all views</li>
          </ul>
        </li>

        <li>
          <h3>Make collapsable list</h3>
          <ul>
            <li>Make exercises explanations collapsable</li>
            <li>Leave only titles of exercises</li>
          </ul>
        </li>

        <li>
          <h3>Display more user details</h3>
          <ul>
            <li>On click display details</li>
            <li>Include other data from API such as id, ip & mac address, website</li>
            <li>Insert that data into other (child) component</li>
          </ul>
        </li>

        <li>
          <h3>Charades game</h3>
          <ul>
            <li>Display random word</li>
            <li>Allow to pick category</li>
            <li>Buttons to mark if guessed</li>
            <li>Count points</li>
            <li>Maybe option to choose number of words (length of round)</li>
          </ul>
        </li>

      </ol>
    </>
  )
}