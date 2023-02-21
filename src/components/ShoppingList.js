import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleAddItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;
    if (search !== "") {
      for (let i = 0; i < search.length; i++) {
        if (item.name[i] !== search[i] && item.name[i] !== search[i].toUpperCase()) {
          return false;
        }  
      }
      return true;
    }
    return item.category === selectedCategory;
  });

  function onItemFormSubmit(newItem) {
    handleAddItems(newItem);
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter searchText={search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
