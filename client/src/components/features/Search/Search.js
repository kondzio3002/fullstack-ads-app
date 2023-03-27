import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../config";
import AdBox from "../../common/AdBox/AdBox";
import Loader from "../../common/Loader/Loader";
import NotFound from "../../pages/NotFound/NotFound";
import SearchBar from "../../views/SearchBar/SearchBar";

const Search = () => {
  const { searchPhrase } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchAds = async () => {
    setLoading(true);

    await fetch(`${API_URL}/ads/search/${searchPhrase}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchAds();
  }, {searchPhrase});

  return (
    <div>
      <SearchBar />
      { loading && <Loader /> }
      { !loading && data.length === 0 && <NotFound /> }
      { !loading && (
        <Row className='mt-3'>
          {data.map(ad => <AdBox key={ad._id} {...ad} />)}
        </Row>
      )}
    </div>
  );
};

export default Search;