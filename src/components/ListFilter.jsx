import {useState} from "react";

const products = ["Apple", "Banana", "Pear", "Orange", "Pineapple", "Strawberry", "Grapes", "Watermelon", "Mango", "Kiwi", "Peach", "Cherry", "Blueberry", "Lemon", "Coconut"];

export default function ListFilter() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (searchedProduct) => {
    setSearchResults(() => products.filter(product => product.toLowerCase().includes(searchedProduct.toLowerCase())))
  }
  return (
    <>
      <h1>List Filtering</h1>
      <form>
        <div className="v-field">
          <label htmlFor="searchedProduct">Type in product name to find it</label>
          <input name="searchedProduct" type="text" onChange={(e) => {handleSearch(e.target.value)}}/>
        </div>
      </form>
      {searchResults.length > 0 ?
        <div>
          <h2>Found products:</h2>
          <ul>
            {searchResults.map((product, index) => (<li key={index}>{product}</li>))}
          </ul>
        </div>
        : <p>No products found.</p>
      }

      <h1>All products</h1>
      <ul>
        {products.map((product, index) => <li key={index}>{product}</li>)}
      </ul>
    </>
  )
}