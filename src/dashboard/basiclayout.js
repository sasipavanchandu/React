import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './basic.module.css'
import BasicLayoutData from './Basiclayoutdata';
function BasicLayout(){
  const history = useHistory()
  return(
    <div className={classes.Sidebar}> 
      <ul className ={classes.SidebarList}>
      {BasicLayoutData.map((val, key)=>{
        return (
          <li
          key={key} 
          className={classes.Row}
          id={window.location.pathname === val.link ? "active":""}
          onClick={() =>{
            history.push(`/dashboard${val.link}`)
          }}>
          {" "}
          <div id="icon">
            {val.icon}
          </div>{"\t"}
          <div id="title">
            {val.title}
          </div>
           </li>
        );
         
      })}
      </ul>
    </div>
  );
}

export default BasicLayout;
