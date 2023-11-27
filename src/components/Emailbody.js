import React, { useEffect, useState } from 'react';
import '../css/emaillist.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
// import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openMessage } from '../features/counter/mailSlice';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
// import SnoozeIcon from '@material-ui/icons/Snooze';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { db } from '../firebase.js';
import { selectOption, setpagename, tickedmail, untickedmail } from '../features/counter/selectoptionsSlice';
import { addDeletedMail, addStarredMail, removeStarredMail, selectStarredMails } from '../features/counter/starredSlice';

function Emailbody({name,email,subject,message,time, page, to}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [selected, setSelected] = useState(false);
    const [starred, setStarred] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const isticked=useSelector(selectOption);
    const starredmails=useSelector(selectStarredMails);

    // useEffect(() => {
    //     if(selectedPage !== 'Inbox' && selectedPage !== 'Starred' && selectedPage !== 'Snoozed' && selectedPage !== 'Drafts'){
    //         setShowMoreOptions(true);
    //         console.log('istrue');
    //     }
    //   }, [selectedPage]);
    useEffect(() => {
        if(page==='Starred'){
            setStarred(true);
        }
        console.log('starredmails',starredmails);
        const foundStarredMail = starredmails.find((starredMail) => {
            return (
                starredMail.name === name &&
                starredMail.subject === subject &&
                starredMail.message === message &&
                starredMail.email === email &&
                starredMail.time === time
            );
        });
        console.log('isfoundstarred', foundStarredMail);

        if (foundStarredMail) {
            setStarred(true);
        } else {
            setStarred(false);
        }

        // console.log('maildetails',name,email,subject,message,time, page);
        // dispatch(findStarredMail({
        //     name,
        //     subject,
        //     message,
        //     email,
        //     time
        // }));
        // console.log('starrrrredmails', starredmails);
        // const found= starredmails.filter(
        //     (mail) =>
        //       mail.name.includes(name) &&
        //       mail.subject.includes(subject) &&
        //       mail.message.includes(message) &&
        //       mail.email.includes(email) &&
        //       mail.time.includes(time)
        //   )
        // if(found){
        //     setisFound(true);
        //     console.log('isfound',isFound);
        //     console.log('foundit',found);
        //   }
        //   else{ 
        //     setisFound(false);
        //   }
    },[starred]);

    // const star=useSelector(selectIsFound);

    const setMail=()=>{
        dispatch(openMessage({
            name,
            subject,
            message,
            email,
            time
        }));
        if(page!=="Inbox"){
          dispatch(setpagename("/"+page.toLowerCase()));
        }
        navigate('/mail');
    };
    const toggleSelected = () => {
        // console.log('initselect',selected);
        setSelected(!selected);
        if(selected) {
            dispatch(untickedmail());
        }
        else {
            dispatch(tickedmail());
        }
        // setShowActions(selected);

        // console.log('aftselect',selected);
        // console.log('tickmail',isticked);
    };
    
    const toggleStarred = () => {
        setStarred(!starred);
        if(!starred) {
            dispatch(addStarredMail({
                name,
                subject,
                message,
                email,
                time
            }));
        }
        else {
            dispatch(removeStarredMail({
                name,
                subject,
                message,
                email,
                time
            }));
            console.log('maildetails',name,email,subject,message,time, page);

        }
        console.log('starredmails',starredmails);
    };

    const toggleActions = () => {
        setShowActions(!showActions);
    };

    const toggleDeleted =() => {
        const deleteEmailByParameters = ({ name, email, subject, message, to }) => {
            // Query to find the document based on the given parameters
            db.collection('emails')?.where('fromName', '==', name || '')
              .where('from', '==', email || '')
              .where('subject', '==', subject || '')
              .where('message', '==', message || '')
              .where('to', '==', to || '')
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  doc.ref
                    .delete()
                    .then(() => {
                      console.log('Email deleted successfully');
                    })
                    .catch((error) => {
                      console.error('Error deleting email: ', error);
                    });
                });
              })
              .catch((error) => {
                console.error('Error finding email to delete: ', error);
              });
          };
        if (page!=="Bin" && window.confirm('Are you sure you want to delete this email?')) {
            dispatch(addDeletedMail({
                name,
                email,
                subject,
                message,
                time,
                page,
                to
            }));
            dispatch(removeStarredMail({
                name,
                subject,
                email,
                message,
                time,
            }))
            deleteEmailByParameters({
                name: name,
                email: email,
                subject: subject,
                message:message,
                to: to,
            });
        }
    };
    
  return (
    <div className={`emailbody${isticked || selected ? 'selected' : ''}`} onMouseEnter={toggleActions} onMouseLeave={toggleActions}>
        <div className='emailbody__left'>
        {isticked || selected ? (
          <CheckBoxIcon onClick={toggleSelected} />
        ) : (
          <CheckBoxOutlineBlankIcon onClick={toggleSelected} />
        )}
        {(starred) ? (
          <StarIcon onClick={toggleStarred} style={{ color: 'gold' }} />
        ) : (
          <StarBorderIcon onClick={toggleStarred} />
        )}
            {/* <LabelOutlinedIcon /> */}
            {page==="Starred" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Snoozed" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Inbox" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Important" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Bin" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Social" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Promotions" && <h4 onClick={setMail}>{name}</h4>}
            {page==="Sent" && (<><p style={{fontSize: '14px'}} onClick={setMail}>To: {to}</p></>)}
            {page==="Drafts" && (<p style={{fontSize:'15px', color: '#b3261e'}}>Draft</p>)}
        </div>
        <div className='emailbody__middle' onClick={setMail}>
            <div className='emailbody__middle__msg'>
                <p>{(page==="Sent" || page==="Starred") && (<span style={{fontSize: '12px', backgroundColor: '#ebebeb', padding:'3px', borderRadius: '5px', marginLeft: '10px'}}>Inbox</span>)}<b style={{marginLeft: '5px'}}>{subject} </b> {message}</p>
            </div>
        </div>
        <div className='emailbody__right'>
            {/* <p  className={`emailbody__time ${!showActions ? 'hide-time' : ''}`}>
            {time} */}
            {selected || showActions && (
            <span className='actions'>
              <ArchiveIcon />
              <DeleteIcon onClick={toggleDeleted} />
              <DraftsIcon />
              <AccessTimeIcon />
            </span>
          ) || (page==="Snoozed" ? (<b style={{fontSize:'14px', color:'#b3261e'}}>{time}</b>): <p>{time}</p>)}
          {
            selected && (
                <span className='actions'>
                  <ArchiveIcon />
                  <DeleteIcon onClick={toggleDeleted} />
                  <DraftsIcon />
                  <AccessTimeIcon />
                </span>
              )
          }
            {/* </p> */}
            {/* <p className='emailbody__time1'>
          
            </p> */}
        </div>
    </div>
  )
}

export default Emailbody