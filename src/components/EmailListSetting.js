import React, { useState } from 'react';
import '../css/emaillist.css';
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleOption, ticked, unticked } from '../features/counter/selectoptionsSlice';
import { selectOption } from '../features/counter/selectoptionsSlice';

function EmailListSetting() {
    const dispatch= useDispatch();
    const isticked=useSelector(selectOption);
    const issingleticked=useSelector(selectSingleOption);
    const [setotheropts,setopts]=useState(false);

    function handletick() {
        console.log('before',setotheropts);
        if(isticked && !issingleticked) {
            dispatch(unticked());
            console.log('isunticked',isticked);
            console.log('issingleunticked',issingleticked);
        }
        else if(!isticked && issingleticked) {
            dispatch(ticked());
            console.log('isticked',isticked);
            console.log('issingleticked',issingleticked);
        }
        else if(!isticked && !issingleticked){
            dispatch(ticked());
            console.log('istickedornot',isticked);
            console.log('issingletickedornot',issingleticked);
        }
        else {
            dispatch(unticked());
        }

        setopts(!setotheropts);
        console.log('after',setotheropts);
    };
  return (
    <div className='emaillist__settings'>
        <div className='emaillist__settingsLeft'>
            <IconButton>
                    {/* {isticked ? (
                <CheckBoxIcon onClick={handletick} />
                ) : (
                <CheckBoxOutlineBlankIcon onClick={handletick} />
                )} */}
                {/* <CheckBoxOutlineBlankIcon /> */}
                { !isticked && issingleticked && (<IndeterminateCheckBoxIcon onClick={handletick}  />)}
                { isticked && (<CheckBoxIcon onClick={handletick} />)}
                { !isticked && !issingleticked && (<CheckBoxOutlineBlankIcon onClick={handletick}  />)}
            </IconButton>
            { issingleticked  && (
                <><IconButton>
                    <ArchiveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ReportGmailerrorredOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                    <p style={{color:'#f9dedc', margin:'0px', marginLeft:'20px', fontSize: '18px'}}>|</p>
                </IconButton>
                <IconButton>
                    <DraftsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AccessTimeIcon />
                </IconButton>
                <IconButton>
                    <AddTaskOutlinedIcon />
                    <p style={{color:'#f9dedc', margin:'0px', marginLeft:'20px', fontSize: '18px'}}>|</p>
                </IconButton>
                <IconButton>
                    <DriveFileMoveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>
                </>
                
            )}
            {isticked  && (
                <><IconButton>
                    <ArchiveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ReportGmailerrorredOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                    <p style={{color:'#f9dedc', margin:'0px', marginLeft:'20px', fontSize: '18px'}}>|</p>
                </IconButton>
                <IconButton>
                    <DraftsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AccessTimeIcon />
                </IconButton>
                <IconButton>
                    <AddTaskOutlinedIcon />
                    <p style={{color:'#f9dedc', margin:'0px', marginLeft:'20px', fontSize: '18px'}}>|</p>
                </IconButton>
                <IconButton>
                    <DriveFileMoveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>
                </>
                
            )}
            {
            !isticked && !issingleticked && (
            <><IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton></>)}

        </div>
        <div className='emaillist__settingsRight'>
            <p>1-2 of 100</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default EmailListSetting