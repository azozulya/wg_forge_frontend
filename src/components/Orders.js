import React from "react";
import User from './User';
import Utils from "./Utils";
import Statistics from "./Statictics";

class Orders extends React.Component {
  render() {

    return (
      <table id="orders" className="table table-sm table-striped table-bordered table-hover">
        <thead>
        <tr className="text-center">
          <th></th>
          <th className="align-middle">Transaction ID</th>
          <th className="align-middle">User Info</th>
          <th className="align-middle">Order Date</th>
          <th className="align-middle">Order Amount</th>
          <th className="align-middle">Card Number</th>
          <th className="align-middle">Card Type</th>
          <th className="align-middle">Location</th>
        </tr>
        </thead>
        <OrderList orders={this.props.orders}/>
        <tfoot>
          <Statistics orders={this.props.orders}/>
        </tfoot>
      </table>
    )
  }
}

function OrderList(props){
    let list = [];

    props.orders.forEach((order, idx) => {
      list.push(
        <OrderItem key={idx} order={order} i={idx}/>
      );
    });

    return (
      <tbody>
        {list}
      </tbody>
    )
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
      <td className="text-center align-middle">{props.i + 1}</td>
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
