import React from "react";
import CardList from "./CardList.js";
import Form from './Form.js';
class CardApp extends React.Component{
      state = {
        profiles: [],
      };
      addNewProfile = (profileData) => {
        console.log(profileData); 
        // this.setState(prevState => ({
           // profiles: [...prevState.profiles, profileData],
       // }));
      };
        render() {
          return (
            <div>
              <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile} />
            <CardList profiles={this.state.profiles} />
            </div>
        );
    }	
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps+":"+prevState)
      }
    }
export default CardApp;