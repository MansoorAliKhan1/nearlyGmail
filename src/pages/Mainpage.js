import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Emaillist from '../components/Emaillist';
import Compose from '../components/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/counter/mailSlice';
// import Emaildetail from '../components/Emaildetail';
import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';
import SidebarIcons from '../components/SidebarIcons';
import RightSideIcons from '../components/RightSideIcons';



function Main() {
  const isMessageOpen=useSelector(selectSendMessageIsOpen);
  const show=useSelector(selectShowbarOptions);
  // const isExpanded=useSelector(selectexpanded);
  // const [displaySidebar, setDisplaySidebar] = useState(false);
  // const dispatch=useDispatch();

  // const toggleDisplay = () => {
  //   setDisplaySidebar(!displaySidebar);
  //   dispatch(hidebaroptions());
  // };

  return (
    <div className="App">
     <Header />
     <div className="app__body">
      {(show)?(<Sidebar selectedPage="Inbox" />):(<SidebarIcons/>)}
        {/* {!show && <SidebarIcons />} */}
      <Emaillist page="Inbox" />
     {/* <RightSideIcons/> */}
     </div>
     {isMessageOpen && <Compose />}
    </div>
  );
}

export default Main;
