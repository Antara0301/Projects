import React from 'react';
import {Switch, Route} from "react-router-dom"
import {Header} from "./Component/header"
import './App.css';

import {Photos} from "./pages/Photos"
import {Cart} from "./pages/Cart"



function App () {
  

    return (


   <div>
  <Header/>
  
     <Switch>
     <Route exact path="/">
       <Photos />
       </Route>
     </Switch>
    
  <Switch >
    <Route path="/cart">
<Cart/>
</Route>
     </Switch>
     </div>
    );
  }


export default App;
