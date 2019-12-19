import React from "react";
import Orders from "./components/Orders";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./components/Search";
import ordersArray from "../data/orders";
import Users from "../data/users";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      originOrders: ordersArray,
      orders: ordersArray.slice(0, 21),
      searchString: "",
    };
    this.handlerSearchInp = this.handlerSearchInp.bind(this);
  }

  handlerSearchInp(str){
    let ordersFilter;
    if(str === "") {
      ordersFilter = this.state.originOrders;
    } else {
      const usersFind = Users.filter( user => user.first_name.indexOf(str) >= 0 || user.last_name.indexOf(str) >= 0 ).map( user => user.id);

      ordersFilter = this.state.orders.filter(order => {
        for (const i in order) {
          if(((i !== 'created_at' && i !== 'card_number') && order[i].toString().indexOf(str) >= 0) || (i === 'user_id' && usersFind.includes(order[i])))
            return order;
        }
      });
    }

    this.setState({
      searchString: str,
      orders: ordersFilter,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h1>Orders list</h1>
        </div>
        <Search searchString={this.state.searchString} searchInp={this.handlerSearchInp} />
        {this.state.orders.length > 0 ?
          <Orders orders={this.state.orders}/> :
          <div>Nothing found</div>
        }

      </div>
    )
  }
}

export default App;
