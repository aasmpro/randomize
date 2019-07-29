import React from 'react';
import './App.css';
import Item from './item/component'

export default class App extends React.Component<any, any, any>{
  count = 0;
  constructor(props: {}){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.total = this.total.bind(this);
    this.state = {
      items: []
    }
  };

  total(){
    return this.state.items.reduce((preItem: any, curItem: any) => {
      return preItem + curItem.amount;
    }, 0);
  }

  handleTitle(id: number, title: string){
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) => (item.id === id ? {...item, title} : item))
    }));
  }

  handleAmount(id: number, amount: number){
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) => (item.id === id ? {...item, amount} : item))
    }));
  }

  addItem(){
    this.setState((state: any, props: any)=>({
      items: [...state.items, {
        id: this.count,
        title: `item ${this.count}`,
        amount: 1
      }],
    }));
    this.count += 1;
  }

  deleteItem(id: number){
    this.setState((state: any, props: any)=>({
      items: state.items.filter((item: any) => item.id !== id)
    }));
  }

  render() {
    return (
      <div>
        <div id="total">{this.total()}</div>
        <div>
          {this.state.items.map((item: any)=>
            <Item item={item}
                  key={item.id}
                  deleteItem={this.deleteItem}
                  handleTitle={this.handleTitle}
                  handleAmount={this.handleAmount}
                  />
          )}
        </div>
        <button onClick={this.addItem}>+</button>
      </div>
    );
  }
}
