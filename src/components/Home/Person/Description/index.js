import React from 'react'
import './style.css';

const Description = ({birth_year, height, gender, mass, skin_color}) => (
  <ul>
    <li>
      Birth Year : {birth_year}
    </li>
    <li>
      Height : {height}
    </li>
    <li>
      Gender : {gender}
    </li>

    <li>
      Mass : {mass}
    </li>
    <li>
      Skin Color : {skin_color}
    </li>
  </ul>
);

export default Description;