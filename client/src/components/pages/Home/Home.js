import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadAdsRequest, userData } from "../../../redux/dataRedux";
import Ads from "../../features/Ads/Ads";
import { API_URL } from "../../../config";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    if (user) {
      const options = {
        method: 'GET'
      };

      fetch(`${API_URL}/auth/user/${user}`, options)
        .then(res => {
          if (res.status === 200) {
            dispatch(userData(res.data));
          }
        });
    }
    dispatch(loadAdsRequest());
  }, []);

  return (
    <div>
      <Ads />
    </div>
  );
};

export default Home;