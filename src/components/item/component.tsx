import React from 'react';

export default class Item extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      id: props.item.id,
      title: props.item.title,
      amount: props.item.amount,
    };
  };

  increase(e: any){
    this.setState((state:any, props:any) => ({
      amount: state.amount+1
    }));
    this.props.handleTotal(1);
  }

  decrease(e: any){
    if(this.state.amount > 1){
      this.setState((state:any, props:any)=>({
        amount: state.amount-1
      }));
      this.props.handleTotal(-1);
    }
  }

  changeTitle(e: any){
    const newTitle = e.target.value;
    this.setState((state:any, props:any)=>({
      title: newTitle
    }));
  }

  delete(e: any){
    this.props.handleTotal(-this.state.amount);
    this.props.handleRemove(this.state.id);
  }

  render() {
    return (
      <div className="item">
        <button onClick={this.delete}>X</button>
        <input value={this.state.title} onChange={this.changeTitle}/>
        <button onClick={this.decrease}>-</button>
        <span>{this.state.amount}</span>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}
