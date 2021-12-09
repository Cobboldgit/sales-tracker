import { connect } from "react-redux";
import { addCustomer } from "../../actions/customersAction";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function CustomersForms(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      name,
      phoneNumber,
      id: uuid(),
    };

    props.addCustomer(item);

    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone"
        />

        <button>Save</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addCustomer,
};

export default connect(null, mapDispatchToProps)(CustomersForms);
