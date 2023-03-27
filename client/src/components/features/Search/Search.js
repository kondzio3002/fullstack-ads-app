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

    const options = {
      method: 'GET',
    };

    await fetch(`${API_URL}/ads/search/${searchPhrase}`, options)
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
      { data.length === 0 && <NotFound /> }
      { loading && <Loader /> }
      { !loading && (
        <Row className='mt-3'>
          {data.map(ad => <AdBox key={ad._id} {...ad} />)}
        </Row>
      )}
    </div>
  );
};

export default Search;