import React, { useState } from "react";
import ProductList from "./ProductList";
import { generateProducts } from "./data";
import "./index.css";

// NOTE: Create 10,000 dummy data
const dummyProducts = generateProducts();

const filterProducts = (filterWord) => {
  // NOTE: If there is no extracted keyword, 10,000 data are returned.
  if (!filterWord) {
    return dummyProducts;
  }
  // NOTE: Filter by extracted keywords.
  return dummyProducts.filter((product) => product.includes(filterWord));
};

const WithoutUseTransition = () => {
  // const [isPending, startTransition] = useTransition();
  const [filterWord, setFilterWord] = useState("");
  const startTime = Date.now();
  // NOTE: Target data is extracted from 10,000 dummy data using a specific word as a key
  const filteredProducts = filterProducts(filterWord);
  const endTime = Date.now();
  console.log(endTime - startTime);

  const updateFilterHandler = (event) => {
    // NOTE: Prioritize input and output of user input by delaying state updates.
    //(lower priority for setFilterWord())
    setFilterWord(event.target.value);
  };

  return (
    <div id="app">
      <h1>React18 - without useTransition</h1>
      <input
        type="text"
        placeholder=" 🔍 search"
        onChange={updateFilterHandler}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default WithoutUseTransition;
