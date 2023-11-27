import React, { useEffect, useState } from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import '../css/emaillist.css';
import { useNavigate } from 'react-router-dom';
function Emailtype({page}) {
  const [activeOption, setActiveOption] = useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    if (page==='Inbox'){
      setActiveOption('Primary');
    }
    else{
      setActiveOption(page);
    }
  },[activeOption,page]);

  const handleOptionClick = (option) => {
    // setActiveOption(option);
    console.log('option',option);
    if (page!=='Social' && option==='Social'){
      navigate('/social');
    }
    else if (page!=='Inbox' && option==='Primary'){
      navigate('/');
    }
    else if (page!=='Promotions' && option==='Promotions'){
      navigate('/promotions');
    }
    console.log('active',activeOption);
  };
  return (
    <div className='emailtype'>
        <div className={`emailtype__options ${activeOption === 'Primary' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Primary')}>
            <InboxIcon />
            <p>Primary</p>
        </div>
        <div className={`emailtype__options ${activeOption === 'Social' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Social')}>
            <PeopleIcon />
            <p>Social</p>
        </div>
        <div className={`emailtype__options ${activeOption === 'Promotions' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Promotions')}>
            <LocalOfferIcon />
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default Emailtype