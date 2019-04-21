//@flow
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import BattleContainer from './battler/containers/BattleContainer'

type Props = any; // TODO: Change this any to something that makes sense
class App extends Component<Props>{
  render(){
    return(
      <div className="App">
        <BattleContainer />
      </div>
    );
  }
}

export default hot(module)(App);