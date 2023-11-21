import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import CreateButton from "@material-ui/icons/Create";
import '../css/sidebar.css';
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
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage, selectexpanded } from "../features/counter/mailSlice";
import { useNavigate } from "react-router-dom";
// import { selectShowbarOptions } from "../features/counter/selectoptionsSlice";


function Sidebar({selectedPage}){
    const dispatch= useDispatch();
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [showToggleOption, setShowToggleOption] = useState('More');
    const [activeOption, setActiveOption] = useState('Inbox'); // Add this state
    const navigate=useNavigate();
    const isExpanded=useSelector(selectexpanded);

    
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
        <div className="sidebar">
            <Button startIcon={<ModeEditOutlineOutlinedIcon  style={{fontSize:"24px", color:'black'}} />} className={"compose_btn"} onClick={()=>{
                dispatch(openSendMessage());
                console.log('sidedispatch',dispatch(openSendMessage()));}}>
            <span className="capitalize-first-letter" style={{fontWeight: 'normal', color:'black'}}>Compose</span>
            </Button>
            <Sidebaroptions Icon={InboxIcon} title="Inbox" number={134} isactive={selectedPage === 'Inbox'} onClick={() => {
                handleOptionClick('Inbox');
                navigate('/')}} />
            <Sidebaroptions Icon={StarBorderIcon} title="Starred" number={40} isactive={selectedPage === 'Starred'} onClick={() => {
                handleOptionClick('Starred');
                if(selectedPage !== 'Starred'){
                    navigate('/starred');
                }}} />
            <Sidebaroptions Icon={AccessTimeIcon} title="Snoozed" number={3} isactive={selectedPage === 'Snoozed'} onClick={() => {
                handleOptionClick('Snoozed');
                if(selectedPage !== 'Snoozed'){
                    navigate('/snoozed');
                }
                }} />
            <Sidebaroptions Icon={InsertDriveFileOutlined} title="Drafts" number={52}  isactive={selectedPage === 'Drafts'} onClick={() => {
                handleOptionClick('Drafts');
                if(selectedPage !== 'Drafts'){
                    navigate('/drafts');
                }}} />
            <span onClick={toggleMoreOptions} ><Sidebaroptions Icon={ExpandMoreIcon} title={showToggleOption} number={254} /></span>
            {showMoreOptions && (
                <div>
            <Sidebaroptions Icon={LabelImportantOutlinedIcon} title="Important" number={12} isactive={selectedPage === 'Important'} onClick={() => {
                handleOptionClick('Important');
                if(selectedPage !== 'Important'){
                    navigate('/important');
                }
                }} />
            <Sidebaroptions Icon={ChatOutlinedIcon} title="Chats" number={13}  isactive={false} onClick={() => handleOptionClick('Chats')} />
            <Sidebaroptions Icon={SendIcon} title="Sent" number={254} isactive={selectedPage === 'Sent'} onClick={() => {
                handleOptionClick('Sent');
                if(selectedPage !== 'Sent'){
                    navigate('/sent');
                }
                }} />
            <Sidebaroptions Icon={ScheduleSendOutlinedIcon} title="Scheduled" number={254}  isactive={false} onClick={() => handleOptionClick('Scheduled')} />
            <Sidebaroptions Icon={MarkAsUnreadOutlinedIcon} title="All Mail" number={254}  isactive={false} onClick={() => handleOptionClick('All Mail')} />
            <Sidebaroptions Icon={ReportGmailerrorredIcon} title="Spam" number={56}  isactive={false} onClick={() => handleOptionClick('Spam')} />
            <Sidebaroptions Icon={DeleteIcon} title="Bin" number={254}  isactive={selectedPage === 'Bin'} onClick={() => {
                handleOptionClick('Bin');
                if(selectedPage!=='Bin'){
                    navigate('/bin');
                }}} />           
            <Sidebaroptions Icon={LabelOutlinedIcon} title="Categories" number={221} isactive={false} onClick={() => handleOptionClick('Categories')} />
            <Sidebaroptions Icon={SettingsOutlinedIcon} title="Manage Labels" number={125} isactive={false} onClick={() => handleOptionClick('Manage Labels')} />
            <Sidebaroptions Icon={AddIcon} title="Create new Label" number={215} isactive={activeOption === false} onClick={() => handleOptionClick('Create new Label')} />
            </div>
            )}
            <hr />
            <div className="sidebarOptions__Label">
            <h3 className="sidebarOptions__heading">Labels</h3>
            <AddIcon color="action" />
            {/* <Sidebaroptions Icon={KeyboardIcon} title="Join a Meeting"  /> */}
            </div>
        </div>
    );
}

export default Sidebar;