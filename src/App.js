import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
//import Counter from "./components/Counter";
import friends from "./friends.json";

import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    friends: friends,
    ClickCard: []


  };

  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    this.setState(prevState => ({
      friends: prevState.friends.filter(friend => friend.id !== id)
    
    }))
  };
  handleIncrement = () => {
    this.setState({count: this.state.count +1});
    console.log('hellooooooo');
    this.setState({})
  };
 // handleDecrement decreases this.state.count by 1
 handleDecrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count - 1 });
 };


//suffleArray 
//  shuffleArray = (array) => {
//   let imgArray = Img;
//   for (let i = imgArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
//   }
//   return imgArray
// }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
  console.log(this.state.friends)

    return (
      <Wrapper>
        <Nav
        count= {this.state.count}
        />
        
      
        <Title>Sugar-Spice and everything Nice!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            count={this.state.count}
            handleClick={this.handleIncrement}
           
          />
        ))}
      </Wrapper>
 

    
  );
  
  };
}



export default App;
