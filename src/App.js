import React, { useEffect } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Emaillist from './components/Emaillist';
// import Compose from './components/Compose';
import { useDispatch, useSelector } from 'react-redux';
// import { selectSendMessageIsOpen } from './features/counter/mailSlice';
// import Emaildetail from './components/Emaildetail';
import Main from './pages/Mainpage';
import MessagePage from './pages/MessagePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { selectUser, signin, signout } from './features/counter/useSlice';
import { auth } from './firebase';
import StarredPage from './pages/StarredPage';
import SnoozedPage from './pages/SnoozedPage';
import DraftsPage from './pages/DraftsPage';
import ImportantPage from './pages/ImportantPage';
import SentPage from './pages/SentPage';
import BinPage from './pages/BinPage';
import SocialPage from './pages/SocialPage';
import PromotionsPage from './pages/PromotionsPage';



function App() {
  // const isMessageOpen=useSelector(selectSendMessageIsOpen);
  
  const dispatch=useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user?.photoURL,
          email: user.email,
        }))
      }
      else{
        dispatch(signout());
      }
    })
  },[]);

  return (
    // <div className="App">
    //  <Header />
    //  <div className="app__body">
    //   <Sidebar />
    //   <Emaillist />
    //   <Emaildetail />
    //  </div>
    //  {isMessageOpen && <Compose />}
    // </div>
    <Router>
      <Routes>
        {
          user && <Route path="/" element={<Main/>}/>
        } : <Route path="/" element={<Login/>}/>
        
        <Route path="/mail" element={<MessagePage/>}/>
        <Route path="/starred" element={<StarredPage/>}/>
        <Route path="/snoozed" element={<SnoozedPage/>}/>
        <Route path="/drafts" element={<DraftsPage/>}/>
        <Route path="/important" element={<ImportantPage/>}/>
        <Route path="/sent" element={<SentPage/>}/>
        <Route path="/bin" element={<BinPage/>}/>
        <Route path="/social" element={<SocialPage/>}/>
        <Route path="/promotions" element={<PromotionsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
