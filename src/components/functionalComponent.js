import React from 'react'
import './footer.scss'
import { Link } from 'gatsby'
import { GetImages } from '../services/getImages'
import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const {images} = GetImages();

  return (
    <p>'Gi'</p>
  );
}

export default Example