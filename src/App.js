import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    friends: friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  handleIncrement = () => {
    this.setState({count: this.state.count +1});
  };
 // handleDecrement decreases this.state.count by 1
 handleDecrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count - 1 });
 };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav/>
        <Counter/>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  
  };
}



export default App;
