import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux/Index";

function ItemContainer(props) {
  return (
    <div className="container text-center">
      <h2 className="text-center  display-6 fs-2">Items: {props.item}</h2>
      <button className="btn btn-success" onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());
  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer); // here we can pass null in the place of mapStateToProps if we have only the dispatch function
