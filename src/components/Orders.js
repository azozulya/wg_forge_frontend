import React from "react";
import ordersArray from '../../data/orders.json';
import User from './User';
import Utils from "./Utils";

class Orders extends React.Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered table-hover">
        <thead>
        <tr className="text-center">
          <th>Transaction ID</th>
          <th>User Info</th>
          <th>Order Date</th>
          <th>Order Amount</th>
          <th>Card Number</th>
          <th>Card Type</th>
          <th>Location</th>
        </tr>
        </thead>
        <OrderList />
      </table>
    )
  }
}

class OrderList extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.orders = props.ordersN;
  // }

  render() {
    //const ordersArray = require('../../data/orders.json');
    const orders = ordersArray.slice(0, 20);
    let list = [];

    orders.forEach((order, idx) => {
      list.push(
        <OrderItem key={idx} order={order}/>
      );
    });

    return (
      <tbody>
        {list}
      </tbody>
    )
  }
}

function OrderItem(props){
  const order = props.order;
  const cardHide = n => {
    if(n < 7)
      return n;
    else{
      const reg = n.substr(2, n.length - 6);
      return n.replace(reg, '*'.repeat(reg.length));
    }
  };

  return (
    <tr id={`order_${order.id}`}>
      <td className="align-middle"><small>{order.transaction_id}</small></td>
      <td className="text-center align-middle"><User id={order.user_id} /></td>
      <td className="text-center align-middle">{Utils.DateFormat(order.created_at)}</td>
      <td className="text-center align-middle">${order.total}</td>
      <td className="align-middle">{cardHide(order.card_number)}</td>
      <td className="align-middle">{order.card_type}</td>
      <td className="text-center align-middle"><div>{order.order_country}</div><small>({order.order_ip})</small></td>
    </tr>
  )
}



export default Orders;
