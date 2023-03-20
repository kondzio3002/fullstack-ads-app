import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";
import { addAd, loadAds } from "../../../redux/dataRedux";
import AdForm from "../../common/AdForm/AdForm";

const AddAd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ad) => {
    const data = new FormData();
    data.append('title', ad.title);
    data.append('content', ad.content);
    data.append('price', ad.price);
    data.append('location', ad.location);
    data.append('data', ad.data);
    data.append('image', ad.image);

    const options = {
      method: 'POST',
      body: data,
      credentials: 'include',
    };
    fetch(API_URL + '/ads', options).then(res => {
      if (res.status === 200) {
        dispatch(addAd(ad));
        dispatch(loadAds());
        navigate('/');
      }
    });
  };

  return (
    <AdForm action={handleSubmit} actionText='Add' />
  )
};

export default AddAd;