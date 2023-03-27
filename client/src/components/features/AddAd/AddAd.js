import React from 'react';
import { useDispatch } from "react-redux";
import { API_URL } from "../../../config";
import { addAd, loadAdsRequest } from "../../../redux/dataRedux";
import AdForm from "../../common/AdForm/AdForm";

const AddAd = () => {
  const dispatch = useDispatch();

  const actionText = 'Add';

  const handleSubmit = ad => {

    const fd = new FormData();
    fd.append('title', ad.title);
    fd.append('content', ad.content);
    fd.append('price', ad.price);
    fd.append('location', ad.location);
    fd.append('photo', ad.photo);
    fd.append('date', ad.date)

    const options = {
      method: 'POST',
      body: fd,
      credentials: 'include',
    };
    fetch(`${API_URL}/ads`, options)
      .then(res => {
        dispatch(addAd(ad));
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