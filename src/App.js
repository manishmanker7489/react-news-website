import Nav from "./Component/Nav";
import Newsitem from "./Component/Newsitem";
import {
  BrowserRouter,
  Routes, //Switch,
  Route,
} from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />

          <Routes>
            
            
            <Route exact path="/"  element={<Newsitem key="general" pageSize={9} country={"in"} category="general" />}   /> 
            <Route exact path="/business" element={<Newsitem key="business" pageSize={9} country={"in"} category="business" />}   /> 
            <Route exact path="/entertainment" element={<Newsitem key="entertainment" pageSize={9} country={"in"} category="entertainment" />}   /> 
            <Route exact path="/general" element={<Newsitem key="general" pageSize={9} country={"in"} category="general" />}   /> 
            <Route exact path="/health" element={<Newsitem key="health" pageSize={9} country={"in"} category="health" />}  /> 
            <Route exact path="/science" element={<Newsitem key="science" pageSize={9} country={"in"} category="science" />}   /> 
            <Route exact path="/sports" element={<Newsitem key="sports" pageSize={9} country={"in"} category="sports" />}  /> 
            <Route exact path="/technology" element={<Newsitem key="technology" pageSize={9} country={"in"} category="technology" />}   /> 
          
          </Routes>

         


        </BrowserRouter>
      </div>
    );
  }
}
