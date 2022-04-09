import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/Index";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div className="container text-center">
      <h2 className="text-center display-6 fs-2">Number of cakes - {props.numOfCakes}</h2>
      <input className="btn border border-5 border-bottom rounded-5" type="text" name="" id="" value={number} onChange={e=>setNumber(e.target.value)}/>
      {/*  Adding Function to button to pass the input value */}
      <button className="btn btn-success" onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.numOfCakes)
  return { numOfCakes: state.cake.numOfCakes }; //sometimes selectors is used to extract some data
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
