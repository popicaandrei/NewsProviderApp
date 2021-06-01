import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './home.scss';
//Responsible for background 




export function HomePage(props) {
  const [topic, setTopic] = useState("");
  
  const checkBySelection= async () => {
    if (topic !== null){
    }
    else{
      alert("Topic invalid!");
    }
    
  }

  return (
  <div className="container">
        <div className="header-container">
             <h2 className="title">Hello to the news provider</h2>
             <h2 className="title">What do you want to see today?</h2>
             <span className="options">Search for subjects</span>
             <span className="options">See category headlines</span>
        </div>
        <div className="selectClass">
        <h5 className="small-text">Please select topics</h5>  
        <select value={topic} onChange={e => setTopic(e.target?.value)}>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
        </select>
        <button onClick={checkBySelection}></button>
        <div className="search">
        <TextField id="standard-basic" label="Standard" />
        </div>
        
        </div>
       
  </div> 
    
   );
}