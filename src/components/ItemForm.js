import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [selected, setSelected] = useState("Produce");
  const [input, setInput] = useState("");

  function handleTextOnChange(e) {
    setInput(e.target.value);
  }

  function handleCategoryOnChange(e) {
    setSelected(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: input,
      category: selected
    }
    onItemFormSubmit(newItem);
    setInput("");
    setSelected("Produce")
  }

  return (
    <form onSubmit={handleSubmit}className="NewItem">
      <label>
        Name:
        <input onChange={handleTextOnChange} type="text" name="name" value={input}/>
      </label>

      <label>
        Category:
        <select onChange={handleCategoryOnChange} name="category" value={selected}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
