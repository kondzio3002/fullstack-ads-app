import styles from "./Ad.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { IMG_URL, API_URL } from "../../../config";
import { getAdById, getUserId, loadAds } from "../../../redux/dataRedux";
import { Button, Col, Row, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";


const Ad = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const ad = useSelector(state => getAdById(state, id));
  const user = useSelector(getUserId);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleRemoveAd = e => {
    e.preventDefault();

    const options = {
      method: 'DELETE',
      credentials: 'include',
    };
    fetch(`${API_URL}/ads/${ad._id}`, options)
      .then(res => {
        loadAds();
      });


    toggle();
    navigate('/');
  };


  if(!ad) return <Navigate to='/' />
  else return (
    <div className={styles.adBox}>
      <Row>

        { user.id === ad.user._id &&
          <div className={`mt-4 ${styles.adButtons}`}>
            <Link to={`/ads/edit/${id}`}><Button variant='secondary' className='mx-3'>Edit</Button></Link>
            <Button variant='danger' onClick={toggle}>Delete</Button>
          </div>
        }

        <Modal show={modal} onHide={toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove this post from the app.<br></br>
            Are you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemoveAd}>Remove</Button>
          </Modal.Footer>
        </Modal>

        <h2 className='mt-3'>{ad.title}</h2>

        <Col>
          <img src={IMG_URL + ad.photo} className={styles.adPhoto} alt='product' />
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
              <img src={IMG_URL + ad.user.avatar} className={styles.userAvatar} alt='avatar' />
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

export default Ad;