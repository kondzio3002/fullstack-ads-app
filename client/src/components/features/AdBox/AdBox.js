import styles from "./AdBox.module.scss";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { IMG_URL } from "../../../config";
import { getAdById } from "../../../redux/adsRedux";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const AdBox = () => {
  const { id } = useParams();
  const ad = useSelector(state => getAdById(state, id));

  if(!ad) return <Navigate to='/' />
  else return (
    <div className={styles.adBox}>
      <Row>
        <Col>
          <img src={IMG_URL + ad.photo} />
        </Col>
        <Col>
          <h2>{ad.title}</h2>
          <Row>
            <Col>
              <p>Price: {ad.price}$</p>
              <p>Location: {ad.location}</p>
              <p>Date added: {ad.date}</p>
            </Col>
            <Col>
              <p>Seller:</p>
              <p>{ad.user.login}</p>
              <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {ad.user.phone}</p>
            </Col>
          </Row>
        </Col>
        <p className='mt-3'>{ad.content}</p>
      </Row>
    </div>
  );
};

export default AdBox;