import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/Index";

function CakeContainer(props) {
  return (
    <div className="container text-center">
      <h2 className="text-center  display-6 fs-2">Number of cakes - {props.numOfCakes}</h2>
      <button className="btn btn-success" onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.numOfCakes)
  return { numOfCakes: state.cake.numOfCakes }; //sometimes selectors is used to extract some data
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
