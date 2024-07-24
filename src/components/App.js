import React,{useState} from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <div id="Home-tab" className="tab" onClick={() => handleTabClick('Home')}>
          Home
        </div>
        <div id="About-tab" className="tab" onClick={() => handleTabClick('About')}>
          About
        </div>
        <div id="Features-tab" className="tab" onClick={() => handleTabClick('Features')}>
          Features
        </div>
      </div>
      <div className="viewport">
        {activeTab} Page Goes Here
      </div>
    </div>
  );
};

export default App;
