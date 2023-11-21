import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import '../css/compose.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage, closeexpand, openexpand } from '../features/counter/mailSlice';
import { db } from '../firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectUser } from '../features/counter/useSlice';
import { IconButton } from '@mui/material';
// import { Dialog} from "@mui/material"

function Compose() {
    const [to,setTo]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const [isExpanded,setIsExpanded]=useState(false);
    const [isFormatBarActive, setIsFormatBarActive] = useState(false);
    const dispatch=useDispatch();
    const user=useSelector(selectUser);

    function formSubmit(e){
        e.preventDefault();
        if(to===""){
            return alert("Enter the To email address");
        }
        if(subject===""){
            return alert("Your Subject is empty");
        }
        if(message===""){
            return alert("Empty message can't be sent");
        }

        db.collection("emails").add({
            to,
            subject,
            message,
            from:user.email,
            fromName:user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // if(window.Email) {
        //     window.Email.send({
        //         Host : "smtp.elasticemail.com",
        //         Username : "jk1999@yopmail.com",
        //         Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
        //         Port: 2525,
        //         To : 'pangajk3@gmail.com',
        //         From : 'harshithyker43@gmail.com',
        //         Subject : 'subject',
        //         Body : 'message'
        //     }).then(
        //       message => alert(message)
        //     );
        // }
        // window.Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "spiderman89570@gmail.com",
        //     Password : "B5B03849BFB38EE46D87E69F48E3339E7A7A",
        //     PORT: 2525,
        //     To : to,
        //     From : "harshith@riktamtech.com",
        //     Subject : subject,
        //     Body : message,
        // }).then(
        //   message => console.log('message',message)
        // );
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "riktamtraining@yopmail.com",
            Password : "A35DFCF4162964DAA3D362D35913453AC467",
            PORT: 2525,
            To : to,
            From : "harshithyker43@gmail.com",
            Subject : subject,
            Body : message,
        }).then(
          message => console.log('message',message)
        );
        // window.Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "jk1999@yopmail.com",
        //     Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
        //     Port: 2525,
        //     To : 'harshithyker43@gmail.com',
        //     From : 'jk1999@yopmail.com',
        //     Subject : 'subject',
        //     Body : 'message'
        // }).then(
        //     message => console.log('message',message)
        // );
        
        setTo('');
        setSubject('');
        setMessage('');
        dispatch(closeSendMessage());
        alert("Email sent successfully");
    }

    const toggleMinimize = () => {
        setIsExpanded(false);
        setIsMinimized(!isMinimized);
    };

    const toggleMaximize = () => {
        setIsMinimized(false);
        if(isExpanded){
            dispatch(closeexpand());
        }
        else {
            dispatch(openexpand());
        }
        setIsExpanded(!isExpanded);
    };

    const handleFormatBarClick = () => {
        setIsFormatBarActive(!isFormatBarActive);
    };

    if(isExpanded){
    
        const toggleMaximize = () => {
            setIsMinimized(false);
            setIsExpanded(!isExpanded);
        };
    
        const handleClose = () => {
            setIsExpanded(false);
            dispatch(closeSendMessage());
        };
        
        return (
            // <div className='composeexpandedd'>
            <Dialog
                open={true}
                onClose={handleClose}
                maxWidth="lg" // Adjust the size as needed
                fullWidth
                sx={{
                    '& .MuiDialogTitle-root': {
                        padding: 0,
                    },
                    '& .MuiDialogContent-root': {
                        padding: 0,
                    },
                }}
            >
                <DialogTitle>
                    <div className='compose__header'>
                        <div className='compose__header__left'>
                            <span>New Message</span>
                        </div>
                        <div className='compose__header__right__expanded'>
                            <RemoveIcon  onClick={toggleMinimize} />
                            <CloseFullscreenIcon style={{transform:'rotate(45deg)', transformOrigin:'center'}} onClick={toggleMaximize} />
                            <CloseIcon onClick={()=>dispatch(closeSendMessage())} />
                        </div>
    
                    </div>
                </DialogTitle>
    
                <DialogContent>
                    <form onSubmit={formSubmit}>
                        <div className='compose__body__expanded'>
                            <div className='compose__bodyForm__expanded'>
                                <input type='email' placeholder='Recipents' value={to} onChange={(e)=>setTo(e.target.value)} />
                        <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                        <textarea rows={isExpanded?"28":"20"} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
    
                            </div>
                        </div>
                        {isFormatBarActive && (
                            <div className='format-bar-icons'>
                                <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/undo_black_20dp.png" height={20} width={20} style={{opacity: '0.7', marginLeft:'5px', marginRight: '5px'}} alt="loading..." />
                                <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/redo_black_20dp.png" height={20} width={20} style={{opacity: '0.7', marginLeft:'5px'}} alt="loading..." />
                                <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px'}}>|</p>
                                <div style={{display:'flex', margin: '0'}}><p style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '13px', color:'#444'}}>Sans Serif</p> <ArrowDropDownIcon style={{marginTop: '12px', fontSize: '18px', marginLeft:'10px'}} /></div>
                                <p style={{color:'#f0f0f0', margin:'10px', marginLeft:'0px', fontSize: '18px'}}>|</p>
                                <TextFieldsIcon style={{fontSize:'20px', color:'#595959'}} />
                                <ArrowDropDownIcon fontSize='15px' />
                                <p style={{color:'#f0f0f0', margin:'10px',  marginLeft:'0px', fontSize: '18px'}}>|</p>
                                <FormatBoldIcon style={{fontSize:'22px', color:'#595959'}} />
                                <FormatItalicIcon style={{fontSize:'22px', color:'#595959'}} />
                                <FormatUnderlinedIcon style={{fontSize:'20px',marginLeft:'5px', color:'#595959'}}/>
                                <FormatColorTextIcon style={{fontSize:'18px',marginLeft:'5px', color:'#595959'}}/>
                                <ArrowDropDownIcon fontSize='15px' />
                                <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px', marginLeft:'0px'}}>|</p>
                                <FormatAlignLeftIcon style={{fontSize:'20px', color:'#595959'}} />
                                <ArrowDropDownIcon fontSize='15px' />
                                <FormatListBulletedIcon style={{fontSize:'20px', color:'#595959'}} />
                                <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px', marginRight:'0px'}}>|</p>
                                <ArrowDropDownIcon fontSize='15px' style={{marginRight: '5px'}} />

                            </div>
                        )}
                        <div className='compose__footer'>
                            <div className='compose__footerLeft'>
                        <button type='submit'>
                            Send <ArrowDropDownIcon/>
                        </button>
                        <div className='compose__footerRight'>
                        <FormatColorTextIcon onClick={handleFormatBarClick} />
                        <AttachFileIcon/>
                        <LinkIcon/>
                        <EmojiEmotionsOutlinedIcon/>
                        <NoteAddIcon/>
                        <InsertPhotoIcon/>
                        <PhonelinkLockIcon/>
                        <CreateIcon/>
                        <MoreVertIcon/>
                        </div>
                    </div>
                    <div className='compose__footerRight'>
                        <DeleteIcon/>
                    </div>
    
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            // </div>
        );
    }
    else {
  return (
    <div className={`compose${isMinimized ? ' minimized' : ''}${isExpanded ? 'expanded' : ''}`}>
        <div className='compose__header'>
            <div className='compose__header__left'>
                <span>New Message</span>
            </div>
            <div className='compose__header__right'>
                <RemoveIcon  onClick={toggleMinimize} />
                <HeightIcon onClick={toggleMaximize} />
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} />
            </div>
        </div>
        {!isMinimized && (
            <form onSubmit={formSubmit}>
            <div className='compose__body'>
                <div className='compose__bodyForm'>
                    <input type='email' placeholder='Recipents' value={to} onChange={(e)=>setTo(e.target.value)} />
                    <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    <textarea rows={isExpanded?"28":"20"} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
                </div>
            </div>
            {isFormatBarActive && (
                <div className='format-bar-icons'>
                    <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/undo_black_20dp.png" height={20} width={20} style={{opacity: '0.7', marginLeft:'5px', marginRight: '5px'}} alt="loading..." />
                    <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/redo_black_20dp.png" height={20} width={20} style={{opacity: '0.7', marginLeft:'5px'}} alt="loading..." />
                    <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px'}}>|</p>
                    <div style={{display:'flex', margin: '0'}}><p style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '13px', color:'#444'}}>Sans Serif</p> <ArrowDropDownIcon style={{marginTop: '12px', fontSize: '18px', marginLeft:'10px'}} /></div>
                    <p style={{color:'#f0f0f0', margin:'10px', marginLeft:'0px', fontSize: '18px'}}>|</p>
                    <TextFieldsIcon style={{fontSize:'20px', color:'#595959'}} />
                    <ArrowDropDownIcon fontSize='15px' />
                    <p style={{color:'#f0f0f0', margin:'10px',  marginLeft:'0px', fontSize: '18px'}}>|</p>
                    <FormatBoldIcon style={{fontSize:'22px', color:'#595959'}} />
                    <FormatItalicIcon style={{fontSize:'22px', color:'#595959'}} />
                    <FormatUnderlinedIcon style={{fontSize:'20px',marginLeft:'5px', color:'#595959'}}/>
                    <FormatColorTextIcon style={{fontSize:'18px',marginLeft:'5px', color:'#595959'}}/>
                    <ArrowDropDownIcon fontSize='15px' />
                    <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px', marginLeft:'0px'}}>|</p>
                    <FormatAlignLeftIcon style={{fontSize:'20px', color:'#595959'}} />
                    <ArrowDropDownIcon fontSize='15px' />
                    <FormatListBulletedIcon style={{fontSize:'20px', color:'#595959'}} />
                    <p style={{color:'#f0f0f0', margin:'10px', fontSize: '18px', marginRight:'0px'}}>|</p>
                    <ArrowDropDownIcon fontSize='15px' style={{marginRight: '5px'}} />

                </div>
            )}
            <div className='compose__footer'>
                <div className='compose__footerLeft'>
                    <button type='submit'>
                        Send <ArrowDropDownIcon/>
                    </button>
                    <div className='compose__footerRight'>
                    <FormatColorTextIcon onClick={handleFormatBarClick} />
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <EmojiEmotionsOutlinedIcon/>
                    <NoteAddIcon/>
                    <InsertPhotoIcon/>
                    <PhonelinkLockIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    </div>
                </div>
                <div className='compose__footerRight'>
                    <DeleteIcon/>
                </div>
            </div>
            </form>
       

        )}
        </div>
  )}
}

export default Compose





// import React, { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import RemoveIcon from '@mui/icons-material/Remove';
// import HeightIcon from '@mui/icons-material/Height';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import LinkIcon from '@mui/icons-material/Link';
// import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
// import CreateIcon from '@mui/icons-material/Create';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DeleteIcon from '@mui/icons-material/Delete';
// import '../css/compose.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeSendMessage } from '../features/counter/mailSlice';
// import { db } from '../firebase.js';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { selectUser } from '../features/counter/useSlice';

// function Compose() {
//     const [to, setTo] = useState('');
//     const [subject, setSubject] = useState('');
//     const [message, setMessage] = useState('');
//     const [isMinimized, setIsMinimized] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const dispatch = useDispatch();
//     const user = useSelector(selectUser);

//     function formSubmit(e){
//         e.preventDefault();
//         if(to===""){
//             return alert("Enter the To email address");
//         }
//         if(subject===""){
//             return alert("Your Subject is empty");
//         }
//         if(message===""){
//             return alert("Empty message can't be sent");
//         }

//         db.collection("emails").add({
//             to,
//             subject,
//             message,
//             from:user.email,
//             fromName:user.displayName,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp()
//         });
//         // if(window.Email) {
//         //     window.Email.send({
//         //         Host : "smtp.elasticemail.com",
//         //         Username : "jk1999@yopmail.com",
//         //         Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
//         //         Port: 2525,
//         //         To : 'pangajk3@gmail.com',
//         //         From : 'harshithyker43@gmail.com',
//         //         Subject : 'subject',
//         //         Body : 'message'
//         //     }).then(
//         //       message => alert(message)
//         //     );
//         // }
//         // window.Email.send({
//         //     Host : "smtp.elasticemail.com",
//         //     Username : "spiderman89570@gmail.com",
//         //     Password : "B5B03849BFB38EE46D87E69F48E3339E7A7A",
//         //     PORT: 2525,
//         //     To : to,
//         //     From : "harshith@riktamtech.com",
//         //     Subject : subject,
//         //     Body : message,
//         // }).then(
//         //   message => console.log('message',message)
//         // );
//         window.Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "riktamtraining@yopmail.com",
//             Password : "A35DFCF4162964DAA3D362D35913453AC467",
//             PORT: 2525,
//             To : to,
//             From : "harshithyker43@gmail.com",
//             Subject : subject,
//             Body : message,
//         }).then(
//           message => console.log('message',message)
//         );
//         // window.Email.send({
//         //     Host : "smtp.elasticemail.com",
//         //     Username : "jk1999@yopmail.com",
//         //     Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
//         //     Port: 2525,
//         //     To : 'harshithyker43@gmail.com',
//         //     From : 'jk1999@yopmail.com',
//         //     Subject : 'subject',
//         //     Body : 'message'
//         // }).then(
//         //     message => console.log('message',message)
//         // );
        
//         setTo('');
//         setSubject('');
//         setMessage('');
//         dispatch(closeSendMessage());
//         alert("Email sent successfully");
//     }

//     const toggleMinimize = () => {
//         setIsMinimized(!isMinimized);
//     };

//     const toggleMaximize = () => {
//         setIsMinimized(false);
//         setIsExpanded(!isExpanded);
//     };

//     const handleClose = () => {
//         setIsExpanded(false);
//         dispatch(closeSendMessage());
//     };

//     return (
//         <Dialog
//             open={true}
//             onClose={handleClose}
//             maxWidth="900px" // Adjust the size as needed
//             fullWidth
//         >
//             <DialogTitle>
//                 <div className='compose__header'>
//                     <div className='compose__header__left'>
//                 <span>New Message</span>
//             </div>
//             <div className='compose__header__right'>
//                 <RemoveIcon  onClick={toggleMinimize} />
//                 <HeightIcon onClick={toggleMaximize} />
//                 <CloseIcon onClick={()=>dispatch(closeSendMessage())} />
//             </div>

//                 </div>
//             </DialogTitle>

//             <DialogContent>
//                 <form onSubmit={formSubmit}>
//                     <div className='compose__body'>
//                         <div className='compose__bodyForm'>
//                             <input type='email' placeholder='Recipents' value={to} onChange={(e)=>setTo(e.target.value)} />
//                     <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
//                     <textarea rows={isExpanded?"28":"20"} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>

//                         </div>
//                     </div>

//                     <div className='compose__footer'>
//                         <div className='compose__footerLeft'>
//                     <button type='submit'>
//                         Send <ArrowDropDownIcon/>
//                     </button>
//                     <div className='compose__footerRight'>
//                     <FormatColorTextIcon/>
//                     <AttachFileIcon/>
//                     <LinkIcon/>
//                     <EmojiEmotionsOutlinedIcon/>
//                     <NoteAddIcon/>
//                     <InsertPhotoIcon/>
//                     <PhonelinkLockIcon/>
//                     <CreateIcon/>
//                     <MoreVertIcon/>
//                     </div>
//                 </div>
//                 <div className='compose__footerRight'>
//                     <DeleteIcon/>
//                 </div>

//                     </div>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     );
// }

// export default Compose;
