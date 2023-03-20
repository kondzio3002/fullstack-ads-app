import { API_URL } from "../../../config";
import { logOut } from "../../../redux/dataRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: 'DELETE',
    };

    fetch(`${API_URL}/auth/logout`, options)
      .then(() => {
        dispatch(logOut());
      });
  }, [dispatch]);

  return <Navigate to='/' />;
};

export default Logout;