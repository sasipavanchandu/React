// import SignInForm from "./components/SignInForm/SignInFormDet";
import React from 'react'
import './App.css'
import BasicForm from './components/login';
import BasicLayout from './dashboard/basiclayout';
import BasicLayoutData from './dashboard/Basiclayoutdata'
import AddPost from './post/Addpost'
import {Route, Switch} from 'react-router-dom'


function App() {
  return(
    <div className = "App">
      <BasicLayout />
      <Switch>
        <Route path="/" exact>
          < BasicForm />
        </Route>
        <Route path="/dashboard/addpost" >
          <AddPost/>
        </Route>
        {BasicLayoutData.map(item=>(
          <Route path={`/dashboard${item.link}`}>
            {item.title}
            
          </Route>
        ))}
      </Switch>
       </div>
  );
}

export default  App


