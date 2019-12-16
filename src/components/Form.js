import React from "react";
import axios from "axios";

class Form extends React.Component {
	 constructor(props){
        super(props);
        this.state = {userName: 'alok'};
    }
	handleSubmit = async (event) => {
        console.log('calling');
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    //this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}
export default Form;
