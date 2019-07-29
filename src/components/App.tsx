import React from 'react';
import './App.css';
import Item from './item/component'

function shuffle(a: any) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class App extends React.Component<any, any, any>{
  count = 0;
  state = {
    items: []
  }

  total = () => {
    return this.state.items.reduce((preItem: any, curItem: any) => {
      return preItem + curItem.amount;
    }, 0);
  }

  handleTitle = (id: number, title: string) => {
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) => (item.id === id ? {...item, title} : item))
    }));
  }

  handleAmount = (id: number, amount: number) => {
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) => (item.id === id ? {...item, amount} : item))
    }));
  }

  addItem = () => {
    this.setState((state: any, props: any)=>({
      items: [...state.items, {
        id: this.count,
        title: `item ${this.count}`,
        amount: 1
      }],
    }));
    this.count += 1;
  }

  deleteItem = (id: number) => {
    this.setState((state: any, props: any)=>({
      items: state.items.filter((item: any) => item.id !== id)
    }));
  }

  randomize = () => {
    let list: any[] = [];
    this.state.items.forEach((item: any)=> {
      for(let i=0; i<item.amount; i++){
        list.push(item.title)
      }
    })
    list = shuffle(list);
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
        <button onClick={this.randomize}>randomize</button>
      </div>
    );
  }
}
