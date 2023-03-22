import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAdsRequest } from "../../../redux/dataRedux";
import Ads from "../../features/Ads/Ads";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdsRequest());
  }, [dispatch]);

  return (
    <div>
      <Ads />
    </div>
  );
};

export default Home;