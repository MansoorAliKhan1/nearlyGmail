import React from "react";
import { IconButton } from '@mui/material';

// import '../css/sidebar.css';

import { useDispatch } from "react-redux";
// import { openSendMessage } from "../features/counter/mailSlice";
// import { useNavigate } from "react-router-dom";
import { hidebaroptions } from "../features/counter/selectoptionsSlice";
function RightSideIcons() {
    const dispatch=useDispatch();
    // const navigate=useNavigate();
    const handleclick = () =>{
        dispatch(hidebaroptions());
        console.log('clickedicon');
    }
  return (
    <div className="sidebar"  style={{maxWidth: '70px', marginTop: '20px', backgroundColor:'whitesmoke'}} >
        <IconButton style={{marginBottom:'15px', backgroundColor:'whitesmoke'}}>
            <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" height={20} width={20} alt="loading..." />
        </IconButton>
        <IconButton  style={{marginBottom:'15px', backgroundColor:'whitesmoke'}}>
            <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" height={20} width={20} alt="loading..." />
        </IconButton>
        <IconButton  style={{marginBottom:'15px', backgroundColor:'whitesmoke'}}>
            <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" height={20} width={20} alt="loading..." />
        </IconButton>
        <IconButton  style={{marginBottom:'15px', backgroundColor:'whitesmoke'}}>
            <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" height={20} width={20} alt="loading..." />
        </IconButton>
        <hr/>
        <IconButton onClick={handleclick}>
        <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" height={20} width={20} alt="loading..." />
        </IconButton>
</div>
  )
}

export default RightSideIcons