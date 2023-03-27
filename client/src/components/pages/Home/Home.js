import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadAdsRequest, userData } from "../../../redux/dataRedux";
import Ads from "../../features/Ads/Ads";
import { API_URL } from "../../../config";
import SearchBar from "../../views/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(loadAdsRequest());
    if (user) {
      const options = {
        method: 'GET'
      };

      fetch(`${API_URL}/auth/user/${user.login}`, options)
        .then(res => {
          if (res.status === 200) {
            return res.json().then((data) => {
              dispatch(userData({ id: data._id }));
            });
          }
        });
    }
  }, []);

  return (
    <div>
      <SearchBar />
      <Ads />
    </div>
  );
};

export default Home;