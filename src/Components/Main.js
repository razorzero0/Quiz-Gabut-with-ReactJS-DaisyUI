
import Home from './Home';
import WrapJs from './Soal/WrapJs'
import WrapPHP from './Soal/WrapPHP'
import React from "react";
import {
  BrowserRouter as Router,
  Switch
  ,
  Route
} from "react-router-dom";


export default function Main(){
    
    return  (<div className="max-w-3xl">
       <Router> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

                <Route path="/js/:id" children={<WrapJs />} />
                <Route path="/php/:id" children={<WrapPHP />} />
        </Switch>
      
    
  

            
</Router>
</div>

);
}

