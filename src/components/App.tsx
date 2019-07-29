import React from 'react';
import './App.css';
import Item from './item/component'

export default class App extends React.Component<any, any>{
  constructor(props: {}){
    super(props);
    this.handleTotal = this.handleTotal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      total: 0,
      count: 1,
      items: []
    }
  };

  handleTotal(value: number){
    this.setState((state: any, props: any)=>({
      total: this.state.total+value
    }));
  }

  addItem(){
    this.setState((state: any, props: any)=>({
      items: [...state.items, {
        id: state.count,
        title: `item ${state.count}`,
        amount: 1
      }],
      count: state.count + 1,
      total: state.total + 1
    }));
  }

  deleteItem(id: number){
    this.setState((state: any, props: any)=>({
      items: state.items.filter((item: any) => item.id !== id)
    }));
  }

  render() {
    return (
      <div>
        <div id="total">{this.state.total}</div>
        <div>
          {this.state.items.map((item: any)=>
            <Item handleTotal={this.handleTotal}
                  item={item}
                  key={item.id}
                  handleRemove={this.deleteItem}
                  />
          )}
        </div>
        <button onClick={this.addItem}>+</button>
      </div>
    );
  }
}
