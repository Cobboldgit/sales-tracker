import { connect } from "react-redux";
import Items from "./Items";

function ItemsList(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div key={index}>
            <Items item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsReducer.items,
  };
};

export default connect(mapStateToProps)(ItemsList);
