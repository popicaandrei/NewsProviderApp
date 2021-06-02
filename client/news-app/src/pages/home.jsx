import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './home.scss';
import { GetNewsBySubject, GetHeadlines } from '../services/NewsService'
import { NewsCard } from '../components/NewsCard'
import Button from '@material-ui/core/Button';

export function HomePage(props) {
  const [topic, setTopic] = useState("business");
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState([]);


  const checkBySelection = async () => {
    if (topic !== "") {
      var query = {
        category: topic
      };
      var data = await GetHeadlines(query);
      if (data !== undefined) {
        setNews(data.articles);
      }
      else {
        alert("Invalid data!")
      }

    }
    else {
      alert("Topic invalid!");
    }

  }

  const checkBySearch = async () => {
    if (search !== "" && search !== undefined) {
      var query = {
        subject: search
      };
      var data = await GetNewsBySubject(query);
      if (data !== undefined) {
        setNews(data.articles);
      }
      else {
        alert("Invalid data!")
      }
    }
    else {
      alert("Topic invalid!");
    }

  }
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="header-container">
        <div className="title">
        <h2>Welcome to your news provider!</h2>
        <h3>What do you want to see today?</h3>
        </div>
        <div className="logout">
        <Button onClick={logout} variant="contained" size="large" color="secondary">
          Logout
        </Button>
        </div>
      </div>
      
      <div className="selectClass">
        <h5 className="small-text">Select your category:</h5>
        <select className="dropbox" value={topic} onChange={e => setTopic(e.target?.value)}>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <Button onClick={checkBySelection} variant="contained" size="large" color="secondary">
          Show headlines
          </Button>
      
      <div className="search">
        <h5 className="small-text">or search for topics:</h5>
        <div className="text-box-container">
        <TextField id="standard-basic" label="Search for topics" onChange={e => setSearch(e.target?.value)} className="text-box" />
        </div>
        <div className="btn-search">
        <Button  onClick={checkBySearch} variant="contained" size="large" color="secondary">
          Search
          </Button>
          </div>
      
      </div> 
      </div>
      <div className="card-grid-container">
        {news.map(x =>
          <NewsCard className="card-grid" item={x}>

          </NewsCard>
        )}
      </div>

    </div>

  );
}