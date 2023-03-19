import { Spinner } from "reactstrap";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spinner color='secondary'>Loading...</Spinner>
    </div>
  );
};

export default Loader;