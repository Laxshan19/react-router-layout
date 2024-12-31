import React from "react";
import { useParams } from 'react-router-dom';


const User = () => {
  const { id } = useParams(); // Get 'id' from the URL
  return <h1>User ID: {id}</h1>;
};

export default User;

