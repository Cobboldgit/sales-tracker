import React from "react";
import { connect } from "react-redux";
import Customers from "./Customers";

function CustomersList(props) {
  return (
    <div>
      {props.customers.map((customer, index) => {
        return (
          <div key={index}>
            <Customers customer={customer} key={customer.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customers: state.customersReducer.customers,
  };
};

export default connect(mapStateToProps)(CustomersList);
