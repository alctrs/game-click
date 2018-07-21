import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img 
        alt={props.name} 
        src={props.image} 
        onClick={() => props.handleClick()}  
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>

      </ul>
    </div>
    <span onClick={() => props.clickFriend(props.id)} className="remove">
      x
    </span>
  </div>
);

export default FriendCard;
