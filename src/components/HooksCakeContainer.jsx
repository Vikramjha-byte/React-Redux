import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Index";
function HooksCakeContainer() {
  //this is working same as mapStateToProps
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  //This is working same as mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      <h2 className="text-center  display-6 fs-2">Num Of Cakes- {numOfCakes} </h2>
      <button className="btn btn-success" onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

//useSelector is library provided by react-redux working as same as mapStateToProps

export default HooksCakeContainer;

//There are some of the usageWarning . please go through the react documentation