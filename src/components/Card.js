/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
//import ".././style.css";
class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div style={{margin :'1rem'}}>
    	   <img style={{width: '75px'}} src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
      }
    }
    export default Card;