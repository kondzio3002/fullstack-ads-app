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
        <h2 className='mt-4'>{ad.title}</h2>
        <Col>
          <img src={IMG_URL + ad.photo} className={styles.adPhoto} />
        </Col>
        <Col>
          <Row>
            <Col className='mt-5'>
              <p>Price: {ad.price}$</p>
              <p>Location: {ad.location}</p>
              <p>Date added: {ad.date}</p>
            </Col>
            <Col>
              <p>Seller:</p>
              <img src={IMG_URL + ad.user.avatar} className={styles.userAvatar}/>
              <p className='mt-2'>{ad.user.login}</p>
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