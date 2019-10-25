import React from "react";
import Users from "../../../data/users";
import Company from "./Company";
import Utils from "../Utils";
import './style.css';

class User extends React.Component{
  constructor(props){
    super(props);
    this.id = props.id;

    //this.showHideUserDetails = this.showHideUserDetails.bind(this);
  }

  showHideUserDetails(e){
    e.preventDefault();
    const div = e.target.nextElementSibling;
    const divClassList = div.classList;
    if(divClassList.contains('hidden')){
      divClassList.remove('hidden');
    }else{
      divClassList.add('hidden');
    }

  }

  render() {
    const user = Users.find( user => {
      if(user.id === this.id)
        return user;
    });

    return (
      <>
        <a href="#" onClick={this.showHideUserDetails}>{user.gender === 'Male' ? 'Mr.' : 'Ms.'} {user.first_name} {user.last_name}</a>
        <div className="user-details hidden align-top text-left" style={{fontSize:'.9em'}}>
          <img src={user.avatar} width="100px" className="img-thumbnail float-left" style={{marginRight: '10px'}}/>
          <p>Birthday: {Utils.BirthdayFormat(user.birthday)} </p>
          <Company id={user.company_id}/>
        </div>
      </>
    );
  }
}

 export default User;
