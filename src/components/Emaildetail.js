import React from 'react';
import '../css/emaillist.css';
import { Avatar, IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail } from '../features/counter/mailSlice';
import { setpageoptions } from '../features/counter/selectoptionsSlice';

function Emaildetail() {
    const navigate=useNavigate();
    const mail=useSelector(selectedMail);
    const pagefind=useSelector(setpageoptions);
  return (
    <div className='emaildetails'>
        <div className='emaillist__settings'>
            <div className='emaillist__settingsLeft'>
                <IconButton>
                    <ArrowBackOutlinedIcon onClick={()=>{
                        console.log('pagefind',pagefind);
                        navigate(pagefind || '/');}} />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
            <div className='emaillist__settingsRight'>
                <p>1-2 of 100</p>
                <IconButton>
                    <ChevronLeftOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightOutlinedIcon />
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__message'>
        <div className='emaildetails__header'>
            <div className='emaildetails__headerLeft'>
                <h4>{mail.subject}</h4>
                <p style={{fontSize: '12px', backgroundColor: '#ebebeb', padding:'3px', borderRadius: '5px', marginLeft: '10px'}}>Inbox</p>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className='emaildetails__headerRight'>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <LaunchIcon/>
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__middleheader'>
            <div className='emaildetails__middleheaderLeft'>
                <IconButton>
                    <Avatar/>
                </IconButton>
                <h4>{mail.name}</h4>
                <p>{mail.email}</p>
            </div>

            <div className='emaildetails__middleheaderRight'>
                <p>{mail.time}</p>
                <IconButton>
                    <StarIcon />
                </IconButton>
                <IconButton>
                    <ReplyOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            
        </div>
        <div className='emaildetails__body'>
            <p>{mail.message}</p>
        </div>
    </div>
    </div>
  );
}

export default Emaildetail