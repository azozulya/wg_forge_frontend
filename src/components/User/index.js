import React from "react";
import Users from "../../../data/users";
import Company from "./Company";
import Utils from "../Utils";
import './style.css';

class User extends React.Component{

  showUserDetails(e){
    e.preventDefault();

    const items = document.getElementsByClassName('user-details');
    const openEls = Array.prototype.filter.call(items, el => {
      if(!el.className.includes('hidden'))
        return el;
    });

    if(openEls.length > 0){
      openEls.forEach(el => el.className = 'user-details hidden');
    }

    const div = e.target.nextElementSibling;
    div.classList.remove('hidden');
  }

  hideUserDetails(e){
    const item = e.target;
    const div = item.parentNode;

    div.classList.add('hidden');
  }

  render() {
    const user = Users.find( user => {
      if(user.id === this.props.id)
        return user;
    });

    return (
      <>
        <a href="#" onClick={this.showUserDetails}>{user.gender === 'Male' ? 'Mr.' : 'Mrs.'} {user.first_name} {user.last_name}</a>
        <div className="user-details hidden" onMouseLeave={this.hideUserDetails}>
          <div className="align-top text-left popover bs-popover-right" style={{fontSize:'.9em'}}>
            <img src={user.avatar} width="100px" className="img-thumbnail float-left" style={{marginRight: '10px'}}/>
            <p>Birthday: {Utils.BirthdayFormat(user.birthday)} </p>
            <Company id={user.company_id}/>
          </div>
        </div>
      </>
    );
  }
}

export default User;
