import { useState } from "react";
import { connect } from "react-redux";
import { addSales } from "../../actions/salesAction";
import { v4 as uuid } from "uuid";

function SalesForms(props) {
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [source, setSource] = useState([]);
  const [addItem, setAddItem] = useState("");
  const [totalSale, setTotalSales] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    let newSales = {
      date,
      customer,
      source,
      addItem,
      totalSale,
      id: uuid(),
    };

    props.addSales(newSales);

    setDate("");
    setCustomer("");
    setSource("");
    setAddItem("");
    setTotalSales("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
          <option value="customer">customer</option>
          <option value="customer">customer</option>
          <option value="customer">customer</option>
        </select>

        <input
          type="text"
          name="sourceOfSales"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Source"
        />

        <select value={addItem} onChange={(e) => setAddItem(e.target.value)}>
          <option value="item">item</option>
          <option value="item">item</option>
          <option value="item">item</option>
        </select>

        <button>Save</button>
      </form>
    </div>
  );
}


const mapDispatchToProps = {
  addSales,
};

export default connect(null, mapDispatchToProps)(SalesForms);
