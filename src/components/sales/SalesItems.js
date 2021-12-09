import { connect } from "react-redux";
import Sales from "./Sales";

function SalesItems(props) {
  return (
    <div>
      {props.salesMade.map((sales, index) => {
        return (
          <div key={index}>
            <Sales sales={sales} key={sales.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    salesMade: state.salesReducer.salesMade,
  };
};

export default connect(mapStateToProps)(SalesItems);
