import React from "react";
import Utils from "./Utils";

class Statistics extends React.Component {
  getAverageCheck(gender = 'All') {
    let orders = this.props.orders;
    if (gender !== 'All') {
      const usersId = Utils.getUsersIdsByGender(gender);
      orders = orders.filter(order => usersId.includes(order.user_id));
    }
    const total = orders.reduce((total, order) => total + parseFloat(order.total), 0);
    return (total/orders.length).toFixed(2);
  }

  render() {
    const total = this.props.orders.reduce( (prev, curr) => prev + parseFloat(curr.total), 0).toFixed(2);
    const sortOrders = this.props.orders.slice().sort( (el1, el2) => parseFloat(el1.total) > parseFloat(el2.total) ? 1 : -1);

    const median = (arr) => {
      const n = arr.length;
      const div = n/2;
      if(n % 2 === 0){
        const a = parseFloat(arr[div-1].total);
        const b = parseFloat(arr[div].total);
        return ((a+b)/2).toFixed(2);
      } else {
        return parseFloat(arr[Math.trunc(div)].total);
      }
    };

    return(
      <>
        <tr>
          <td colSpan="2">Orders Count</td>
          <td colSpan="6">{this.props.orders.length}</td>
        </tr>
        <tr>
          <td colSpan="2">Orders Total</td>
          <td colSpan="6">$ {total}</td>
        </tr>
        <tr>
          <td colSpan="2">Median Value</td>
          <td colSpan="6">$ {median(sortOrders)}</td>
        </tr>
        <tr>
          <td colSpan="2">Average Check</td>
          <td colSpan="6">$ {this.getAverageCheck()}</td>
        </tr>
        <tr>
          <td colSpan="2">Average Check (Female)</td>
          <td colSpan="6">$ {this.getAverageCheck('Female')}</td>
        </tr>
        <tr>
          <td colSpan="2">Average Check (Male)</td>
          <td colSpan="6">$ {this.getAverageCheck('Male')}</td>
        </tr>
      </>
    )
  }
}


export default Statistics;
