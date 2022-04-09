import { connect } from "react-redux";
import { buyIcecream } from "../redux/Index";

function IceCreamContainer(props) {
    return (
      <div className="container text-center">
        <h2 className="text-center  display-6 fs-2">Number of Icecream - {props.numOfIcecream}</h2>
        <button className="btn btn-success" onClick={props.buyIcecream}>Buy Icecream</button>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
    // console.log(state.numOfCakes)
    return { numOfIcecream: state.icecream.numOfIcecream }; //sometimes selectors is used to extract some data
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      buyIcecream: () => dispatch(buyIcecream()),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);