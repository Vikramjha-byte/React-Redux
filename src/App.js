import "bootstrap/dist/css/bootstrap.min.css";
// import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/Store";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
