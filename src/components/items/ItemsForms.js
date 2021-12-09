import { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemsActions";
import { v4 as uuid } from "uuid";

function ItemsForms(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [addPhoto, setAddPhoto] = useState([]);
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      name,
      category,
      addPhoto,
      quantity,
      id: uuid(),
    };

    props.addItem(item);

    setName("");
    setCategory("");
    setAddPhoto("");
    setQuantity("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Fullname"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="clothes">Clothes</option>
          <option value="sneakers">Sneakers</option>
          <option value="shoes">Shoes</option>
          <option value="bag">Bags</option>
          <option value="underWear">Underwear & Sleepwear</option>
          <option value="watches">Watches</option>
          <option value="T-shirt">T-Shirt</option>
        </select>

        <input
          // style={{ display: "none" }}
          type="file"
          value={addPhoto}
          onChange={(e) => setAddPhoto(e.target.value)}
        />
        {/* <button onClick={() => fileInput.click()}>Add Image</button> */}

        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />

        <button>Save</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(ItemsForms);
