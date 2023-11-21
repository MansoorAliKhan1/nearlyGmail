import React from 'react';
import "../css/sidebaroptions.css";
// import { useSelector } from 'react-redux';
// import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';

function Sidebaroptions({Icon, title, number,isactive, onClick}) {
  return (
    <div className={`sidebarOptions ${isactive && 'sidebarOptions--active'}`} onClick={onClick}>
        <Icon />
        <h4>{title}</h4>
        <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions