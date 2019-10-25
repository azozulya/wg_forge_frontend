import React from "react";
import Users from "../../data/users";


class User extends React.Component{
  constructor(props){
    super(props);
    this.id = props.id;
  }

  render() {
    const user = Users.find( user => {
      if(user.id === this.id)
        return user;
    });
    return (
      <a href="#">{user.gender === 'Male' ? 'Mr.' : 'Ms.'} {user.first_name} {user.last_name}</a>
    )
  }

}

 export default User;
