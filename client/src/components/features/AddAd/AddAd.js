import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";
import { addAd, loadAds, loadAdsRequest } from "../../../redux/dataRedux";
import AdForm from "../../common/AdForm/AdForm";

const AddAd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actionText = 'Add';

  const handleSubmit = e => {

    const fd = new FormData();
    fd.append('title', e.title);
    fd.append('content', e.content);
    fd.append('price', e.price);
    fd.append('location', e.location);
    fd.append('photo', e.photo);

    const options = {
      method: 'POST',
      body: fd,
      credentials: 'include',
    };
    fetch(`${API_URL}/ads`, options)
      .then(res => {
        dispatch(loadAdsRequest());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AdForm action={handleSubmit} actionText={actionText} />
  )
};

export default AddAd;