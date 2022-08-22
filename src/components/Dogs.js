import React from "react";
import { NavLink } from "react-router-dom";
import WhiskeyImg from '../images/whiskey.jpg';
import HazelImg from '../images/hazel.jpg';
import Tubby from '../images/tubby.jpg';

export default function Dogs() {
  return (
    <div id="dogs">
      <li className='dog-select'>
        <NavLink to="/dogs/whiskey" className={(navData) => (navData.isActive ? 'active' : '')}>
          <img src={WhiskeyImg} alt="" />
          <span>Whiskey</span>
        </NavLink>
      </li>

      <li className='dog-select'>
        <NavLink to="/dogs/hazel" className={(navData) => (navData.isActive ? 'active' : '')}>
          <img src={HazelImg} alt="" />
          <span>Hazel</span>
        </NavLink>
      </li>

      <li className='dog-select'>
        <NavLink to="/dogs/tubby" className={(navData) => (navData.isActive ? 'active' : '')}>
          <img src={Tubby} alt="" />
          <span>Tubby</span>
        </NavLink>
      </li>
    </div>
  );
}
