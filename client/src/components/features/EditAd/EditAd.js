import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdById, loadAdsRequest } from "../../../redux/dataRedux";
import { API_URL } from "../../../config";
import { useParams } from "react-router-dom";
import AdForm from "../../common/AdForm/AdForm";

const EditAd = () => {

  const actionText = 'Edit';
  const dispatch = useDispatch();
  const { id } = useParams();

  const ad = useSelector(state => getAdById(state, id));

  const handleSubmit = (ad) => {
    const fd = new FormData();
    fd.append('title', ad.title);
    fd.append('content', ad.content);
    fd.append('price', ad.price);
    fd.append('location', ad.location);
    fd.append('photo', ad.photo);
    fd.append('date', ad.date)

    const options = {
      method: 'PUT',
      body: fd,
      credentials: 'include',
    };

    fetch(`${API_URL}/ads/${id}`, options)
    .then(res => {
      dispatch(loadAdsRequest());
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <AdForm
      action={handleSubmit}
      actionText={actionText}
      price={ad.price}
      title={ad.title}
      location={ad.location}
      content={ad.content}
      date={ad.date}
      photo={ad.photo}
      id={id}
    />
  )
};

export default EditAd;