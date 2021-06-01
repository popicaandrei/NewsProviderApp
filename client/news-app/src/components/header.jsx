import './header.scss';
import React,{useState} from 'react'
import Switch from '@material-ui/core/Switch';
export function Header(props) {
    const [option, setOption] = useState(false);
    return (
        <div>
        <div className="header-container">
             <h2 className="title">Hello to the news provider</h2>
             <h2 className="title">What do you want to see today?</h2>
             <span className="options">See category headlines</span>
             <Switch value={option} onChange={e => setOption(e.target?.value)}></Switch>
             <span className="options">See category headlines</span>
        </div>
       
        </div>
      );
  }