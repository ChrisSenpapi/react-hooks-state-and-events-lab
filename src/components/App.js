import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false);
  // - In the App component, there is a button for toggling between dark mode and light mode. Using the useState hook, create a state variable in the App component. Then, use that variable to determine if our app should be in dark mode or light mode.
function handleDarkModeClick() {
  // console.log("clicked")
  setIsDark(!isDark);
  
}
  // You will also need to add an event handler to the dark mode button, and update state when the button is clicked.

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}> {isDark ? "dark" : "light"}  Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
