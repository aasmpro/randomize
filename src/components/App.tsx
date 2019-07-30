import React from 'react';
import Item from './item/component';
import RandomItem from './random-item/component';
import { Layout, Icon, Button, List } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

function shuffle(a: any) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class App extends React.Component<any, any, any> {
  count = 0;
  state = {
    items: [],
    randomView: false,
    randomItems: []
  };

  total = () => {
    return this.state.items.reduce((preItem: any, curItem: any) => {
      return preItem + curItem.amount;
    }, 0);
  };

  handleTitle = (id: number, title: string) => {
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) =>
        item.id === id ? { ...item, title } : item
      )
    }));
  };

  handleAmount = (id: number, amount: number) => {
    this.setState((state: any, props: any) => ({
      items: state.items.map((item: any) =>
        item.id === id ? { ...item, amount } : item
      )
    }));
  };

  addItem = () => {
    this.setState((state: any, props: any) => ({
      items: [
        ...state.items,
        {
          id: this.count,
          title: `item ${this.count}`,
          amount: 1
        }
      ]
    }));
    this.count += 1;
  };

  deleteItem = (id: number) => {
    this.setState((state: any, props: any) => ({
      items: state.items.filter((item: any) => item.id !== id)
    }));
  };

  randomize = () => {
    let list: any[] = [];
    this.state.items.forEach((item: any) => {
      for (let i = 0; i < item.amount; i++) {
        list.push(item.title);
      }
    });
    this.setState((state: any, props: any) => ({
      randomItems: shuffle(list),
      randomView: true
    }));
  };

  render() {
    if (this.state.randomView) {
      return (
        <Layout>
          <Content>
            <List
              grid={{ gutter: 10, xs: 3, sm: 4, md: 6, lg: 6, xl: 8 }}
              dataSource={this.state.randomItems}
              renderItem={(item: any, index: number) => (
                <List.Item>
                  <RandomItem data={item} label={index + 1} key={index} />
                </List.Item>
              )}
            />
            <div style={{ marginBottom: '45px' }} />
          </Content>
          <Button
            onClick={() => {
              this.setState({ randomView: false });
            }}
            className="bottom-fixed"
            block>
            <Icon type="close" />
          </Button>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <Content>
            {/* <p style={{margin:0, padding:0}}>total</p> */}
            <p id="total">{this.total()}</p>
            <div>
              {this.state.items.map((item: any) => (
                <Item
                  item={item}
                  key={item.id}
                  deleteItem={this.deleteItem}
                  handleTitle={this.handleTitle}
                  handleAmount={this.handleAmount}
                />
              ))}
            </div>
            <Icon
              className="add-item"
              onClick={this.addItem}
              type="plus-circle"
            />
            <Button onClick={this.randomize} className="bottom-fixed" block>
              Randomize
            </Button>
          </Content>
        </Layout>
      );
    }
  }
}
