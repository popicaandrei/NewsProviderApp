import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './home.scss';
import {GetNewsBySubject,GetHeadlines} from '../services/NewsService'
import {NewsCard} from '../components/NewsCard'


export function HomePage(props) {
  const [topic, setTopic] = useState("business");
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState([]);
 

  const checkBySelection = async () => {
    if (topic !== ""){
      var query = {
        category:topic
      };
      var data = await GetHeadlines(query);
      if(data !== undefined){
        setNews(data.articles);
      }
      else{
        alert("Invalid data!")
      }
     
    }
    else{
      alert("Topic invalid!");
    }
    
  }

  const checkBySearch = async () => {
    if (search !== "" && search !== undefined){
      var query = {
        subject:search
      };
      var data = await GetNewsBySubject(query);
      if(data !== undefined){
        setNews(data.articles);
      }
      else{
        alert("Invalid data!")
      }
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
        <TextField id="standard-basic" label="Standard" onChange={e => setSearch(e.target?.value)}/>
        <button onClick={checkBySearch}></button>
        </div>
        
        </div>

        <div className="recipient">
          {news.map(x => 
           <NewsCard className="card-grid" item={x}>

           </NewsCard>
            )}
        </div>
       
  </div> 
    
   );
}