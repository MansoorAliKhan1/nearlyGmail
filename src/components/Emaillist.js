import React, { useEffect, useState } from 'react';
import '../css/emaillist.css'
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { db } from '../firebase.js';
import { selectStarredMails, showDeletedMails } from '../features/counter/starredSlice';
import { useSelector } from 'react-redux';
import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';
import { selectUser } from '../features/counter/useSlice';


function Emaillist({page}) {
    const [emails,setEmails]= useState([]);
    const starredmails=useSelector(selectStarredMails);
    // const [starmails,setstarmails]= useState([]);
    const show=useSelector(selectShowbarOptions);
    const deletedmails=useSelector(showDeletedMails);
    const user=useSelector(selectUser);
    const Snoozedmails=[
        {
         from: "sunayana@riktamtech.com",
         fromName: "Sunayana Eknath Pilankar",
         message: "Hi Mam, I am Happy to lead UTR project",
         subject: "Regarding Project",
         timestamp: "16:55",
         to:"mansoor@riktamtech.com"
        },
        {
            from: "sunayana@riktamtech.com",
            fromName: "Sunayana Eknath Pilankar",
            message: "This is a dummy mail 3",
            subject: "dummy mail 3",
            timestamp: "00:15",
            to:"anshuman@riktamtech.com"
        },
        {
            from: "harshith@riktamtech.com",
            fromName: "Prathi Harshith",
            message: "You are My God Given Brother",
            subject: "Regarding Raksha Bandan",
            timestamp: "01:43",
            to:"usha@riktamtech.com"
        },
        {
            from: "anshuman@riktamtech.com",
            fromName: "Anshuman Bisoyi",
            message: "Happy Birthday",
            subject: "Happy Birthday",
            timestamp: "22:29",
            to:"sunayana@riktamtech.com"
        }
    ];

    const Draftmails=[
        {
         from: "sunayana@riktamtech.com",
         fromName: "Sunayana Eknath Pilankar",
         message: "This is a dummy mail 6",
         subject: "dummy mail 6",
         timestamp: "12:21",
         to:"prathyusha@riktamtech.com"
        },
        {
            from: "sunayana@riktamtech.com",
            fromName: "Sunayana Eknath Pilankar",
            message: "This is a dummy mail 7",
            subject: "dummy mail 7",
            timestamp: "13:31",
            to:"dhamareshwar@riktamtech.com"
        },
        {
            from: "sunayana@riktamtech.com",
            fromName: "sunayana Eknath Pilankar",
            message: "This is a dummy mail 8",
            subject: "dummy mail 8",
            timestamp: "18:10",
            to:"vasu@riktamtech.com"
        },
        {
            from: "harikeerthana@riktamtech.com",
            fromName: "Hari Keerthana",
            message: "This is a dummy mail 9",
            subject: "dummy mail 9",
            timestamp: "09:23",
            to:"sunayana@riktamtech.com"
        },
        {
            from: "Chaitanya@riktamtech.com",
            fromName: "Chaitanya Budhagavi",
            message: "This is a dummy mail 10",
            subject: "dummy mail 10",
            timestamp: "20:39",
            to:"sunayana@riktamtech.com"
        }
    ];

    const Importantmails=[
        {
            from: "mansoor@riktamtech.com",
            fromName: "Mansoor Ali Khan",
            message: "You are making a mistake",
            subject: "Life Tip",
            timestamp: "18:30",
            to:"akirah@riktamtech.com"
        },
        {
            from: "gouse@riktamtech.com",
            fromName: "Gouse Mohinuddin Khan",
            message: "This is a dummy mail 2",
            subject: "dummy mail 2",
            timestamp: "20:39",
            to:"mansoor@riktamtech.com"
        }
    ];


    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setEmails(snapshot.docs.map(doc=>({
                id:doc.id,
                data: doc.data()
            })))
        })
    },[]);
  return (
    <div className={`emaillist${!show ? 'hide' : ''}`}>
        <EmailListSetting />
        {page==="Inbox" && <Emailtype page={page} />}
        {page==="Social" && <Emailtype page={page} />}
        {page==="Promotions" && <Emailtype page={page} />}
        {   (page==="Inbox") &&
            emails?.map(({ id, data })=>{
                if (data.from === user.email){
                    return (
                        <Emailbody 
                        name={data.fromName}
                        email={data.from}
                        key={id}
                        subject={data.subject} 
                        message={data.message} 
                        time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                        page= {page}
                        to={data.to} />);
                }
                return <div></div>;
                
            })
        }
        {
            page==='Starred' &&
            starredmails?.map((data)=>{
                return (
                    <Emailbody
                    name={data.name}
                    email={data.email}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.time}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Bin' &&
            deletedmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.name}
                    email={data.email}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.time}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Snoozed' &&
            Snoozedmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Social' &&
            Draftmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Important' &&
            Importantmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Promotions' &&
            Snoozedmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        
    </div>
  )
}

export default Emaillist;