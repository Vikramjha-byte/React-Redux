import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/UserAction";

function UserContainer({ userData, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className="container text-center">
      <h2 className="text-center display-4">User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p className="btn btn-outline-primary m-3">{user.name}</p>)}
      </div>
    </div>
  );
}

const mapsStatetoProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapsStatetoProps, mapDispatchToProps)(UserContainer);
