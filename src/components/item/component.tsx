import React from 'react';

export default class Item extends React.Component<any, any>{
  increase = (e: any) => {
    this.props.handleAmount(this.props.item.id, this.props.item.amount+1);
  }

  decrease = (e: any) => {
    if(this.props.item.amount > 1){
      this.props.handleAmount(this.props.item.id, this.props.item.amount-1);
    }
  }

  changeTitle = (e: any) => {
    const newTitle = e.target.value;
    this.props.handleTitle(this.props.item.id, newTitle);
  }

  delete = (e: any) => {
    this.props.deleteItem(this.props.item.id);
  }

  render() {
    return (
      <div className="item">
        <button onClick={this.delete}>X</button>
        <input value={this.props.item.title} onChange={this.changeTitle}/>
        <button onClick={this.decrease}>-</button>
        <span>{this.props.item.amount}</span>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}
