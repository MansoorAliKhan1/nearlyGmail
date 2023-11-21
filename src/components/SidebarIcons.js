// import React from "react";
// import { IconButton } from '@mui/material';
// // import AddIcon from "@material-ui/icons/Add";
// // import CreateButton from "@material-ui/icons/Create";
// // import '../css/sidebar.css';
// // import Sidebaroptions from "./Sidebaroptions";
// import InboxIcon from '@mui/icons-material/Inbox';
// // import StarRateIcon from "@material-ui/icons/StarRate";
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// // import WatchLaterIcon from "@material-ui/icons/WatchLater";
// // import LabelImportantIcon from "@material-ui/icons/Label";
// // import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';import SendIcon from "@material-ui/icons/Send";
// // import DraftsIcon from "@material-ui/icons/Drafts";
// // import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';import DeleteIcon from "@material-ui/icons/Delete";
// // import FindInPageIcon from "@material-ui/icons/FindInPage";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import ReportProblemIcon from "@material-ui/icons/ReportProblem";
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
// // import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
// // import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';
// // import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// // import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
// // import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import { useDispatch } from "react-redux";
// // import { openSendMessage } from "../features/counter/mailSlice";
// // import { useNavigate } from "react-router-dom";
// import { hidebaroptions } from "../features/counter/selectoptionsSlice";
// function SidebarIcons() {
//     const dispatch=useDispatch();
//     // const navigate=useNavigate();
//     const handleclick = () =>{
//         dispatch(hidebaroptions());
//         console.log('clickedicon');
//     }
//   return (
//     <div className="sidebar"  style={{maxWidth: '70px', marginTop: '50px'}} >
//         <IconButton onClick={handleclick}>
//             <ModeEditOutlineOutlinedIcon  style={{fontSize:"24px"}} />
//         </IconButton>
//         <IconButton onClick={handleclick}>
//             <InboxIcon/>
//         </IconButton>
//         <IconButton onClick={handleclick}>
//             <StarBorderIcon/>
//         </IconButton>
//         <IconButton onClick={handleclick}>
//             <AccessTimeIcon/>
//         </IconButton>
//         <IconButton onClick={handleclick}>
//             <InsertDriveFileOutlined/>
//         </IconButton>
//         <IconButton onClick={handleclick}>
//             <ExpandMoreIcon/>
//         </IconButton>
// </div>
//   )
// }

// export default SidebarIcons


import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import CreateButton from "@material-ui/icons/Create";
import '../css/sidebaricons.css';
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from '@mui/icons-material/Inbox';
// import StarRateIcon from "@material-ui/icons/StarRate";
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import WatchLaterIcon from "@material-ui/icons/WatchLater";
// import LabelImportantIcon from "@material-ui/icons/Label";
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import SendIcon from '@mui/icons-material/Send';
// import DraftsIcon from "@material-ui/icons/Drafts";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
// import FindInPageIcon from "@material-ui/icons/FindInPage";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/counter/mailSlice";
import { useNavigate } from "react-router-dom";
// import { selectShowbarOptions } from "../features/counter/selectoptionsSlice";


function SidebarIcons({selectedPage}){
    const dispatch= useDispatch();
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [showToggleOption, setShowToggleOption] = useState('More');
    const [activeOption, setActiveOption] = useState('Inbox'); // Add this state
    const navigate=useNavigate();

    
    useEffect(() => {
        if(selectedPage !== 'Inbox' && selectedPage !== 'Starred' && selectedPage !== 'Snoozed' && selectedPage !== 'Drafts'){
            setShowMoreOptions(true);
            console.log('istrue');
        }
      }, [selectedPage]);

    const toggleMoreOptions = () => {
        setShowMoreOptions(!showMoreOptions);
        if(showToggleOption==='More'){
            setShowToggleOption('Less');
        }
        else{
            setShowToggleOption('More');
        }
        
        console.log('toggleMoreOptions', showMoreOptions);
    };

    const handleOptionClick = (title) => {
        setActiveOption(title);
    };

    return (
        <div className="sidebaricons">
            <Button startIcon={<ModeEditOutlineOutlinedIcon  style={{fontSize:"24px", color:'black'}} />} className="compose_btnicons" onClick={()=>{
                dispatch(openSendMessage());
                console.log('sidedispatch',showMoreOptions);}}>
            {/* <span className="capitalize-first-lettericons" style={{fontWeight: 'normal', color:'black'}}>Compose</span> */}
            </Button>
            <Sidebaroptions Icon={InboxIcon} isactive={selectedPage === 'Inbox'} onClick={() => {
                handleOptionClick('Inbox');
                navigate('/')}} />
            <Sidebaroptions Icon={StarBorderIcon} isactive={selectedPage === 'Starred'} onClick={() => {
                handleOptionClick('Starred');
                if(selectedPage !== 'Starred'){
                    navigate('/starred');
                }}} />
            <Sidebaroptions Icon={AccessTimeIcon}  isactive={selectedPage === 'Snoozed'} onClick={() => {
                handleOptionClick('Snoozed');
                if(selectedPage !== 'Snoozed'){
                    navigate('/snoozed');
                }
                }} />
            <Sidebaroptions Icon={InsertDriveFileOutlined}   isactive={selectedPage === 'Drafts'} onClick={() => {
                handleOptionClick('Drafts');
                if(selectedPage !== 'Drafts'){
                    navigate('/drafts');
                }}} />
            <span onClick={toggleMoreOptions} ><Sidebaroptions Icon={ExpandMoreIcon} /></span>
            {!showMoreOptions && (
                <div>
            <Sidebaroptions Icon={LabelImportantOutlinedIcon} isactive={selectedPage === 'Important'} onClick={() => {
                handleOptionClick('Important');
                if(selectedPage !== 'Important'){
                    navigate('/important');
                }
                }} />
            <Sidebaroptions Icon={ChatOutlinedIcon}  isactive={false} onClick={() => handleOptionClick('Chats')} />
            <Sidebaroptions Icon={SendIcon}  isactive={selectedPage === 'Sent'} onClick={() => {
                handleOptionClick('Sent');
                if(selectedPage !== 'Sent'){
                    navigate('/sent');
                }
                }} />
            <Sidebaroptions Icon={ScheduleSendOutlinedIcon}  isactive={false} onClick={() => handleOptionClick('Scheduled')} />
            <Sidebaroptions Icon={MarkAsUnreadOutlinedIcon}  isactive={false} onClick={() => handleOptionClick('All Mail')} />
            <Sidebaroptions Icon={ReportGmailerrorredIcon}  isactive={false} onClick={() => handleOptionClick('Spam')} />
            <Sidebaroptions Icon={DeleteIcon}  isactive={selectedPage === 'Bin'} onClick={() => {
                handleOptionClick('Bin');
                if(selectedPage!=='Bin'){
                    navigate('/bin');
                }}} />           
            <Sidebaroptions Icon={LabelOutlinedIcon} isactive={false} onClick={() => handleOptionClick('Categories')} />
            <Sidebaroptions Icon={SettingsOutlinedIcon} isactive={false} onClick={() => handleOptionClick('Manage Labels')} />
            <Sidebaroptions Icon={AddIcon} isactive={activeOption === false} onClick={() => handleOptionClick('Create new Label')} />
            </div>
            )}
            <hr />
            <div className="sidebarOptions__Labelicons">
            {/* <h3 className="sidebarOptions__headingicons">Labels</h3> */}
            <AddIcon color="action" style={{marginLeft: '22px'}} />
            {/* <Sidebaroptions Icon={KeyboardIcon} title="Join a Meeting"  /> */}
            </div>
        </div>
    );
}

export default SidebarIcons;