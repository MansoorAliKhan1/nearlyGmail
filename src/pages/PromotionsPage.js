import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Emaillist from '../components/Emaillist';
import Compose from '../components/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/counter/mailSlice';
import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';
import SidebarIcons from '../components/SidebarIcons';

function PromotionsPage() {
    const isMessageOpen=useSelector(selectSendMessageIsOpen);
    const show=useSelector(selectShowbarOptions);
    return (
      <div className="App">
       <Header />
       <div className="app__body">
        {show && <Sidebar selectedPage="Promotions" />}
        {!show && <SidebarIcons/>}
        <Emaillist page="Promotions" />
       </div>
       {isMessageOpen && <Compose />}
      </div>
    );
}

export default PromotionsPage