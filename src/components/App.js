import  React from "react";
import Header from "./header"
import Aboutpage from "./aboutpage"
import Footer from "./footer"
import Faq from "./Faq"
import {Route, BrowserRouter, Switch} from "react-router-dom"

function App () {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/" component={Aboutpage} exact/>
    <Route path="/faq" component={Faq}/>
    </Switch>
    <Footer/>
    </BrowserRouter>  
  ) 
          
    
}

export default App;