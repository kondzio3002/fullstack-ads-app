import { useState } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [search, setSearch] = useState();

  return (
    <div className={`mt-4 ${styles.searchBar}`}>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='mx-2 rounded'
      />
      <Button
        as={Link}
        variant='secondary'
        onClick={() => {}}
        to={`/search/${search}`}
      >
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </Button>
    </div>
  );
};

export default SearchBar;