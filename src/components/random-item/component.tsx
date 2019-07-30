import React from 'react';
import { Card, Modal } from 'antd';

export default class RandomItem extends React.Component<any, any> {
  state = {
    seen: false
  };

  see = (e: any) => {
    if (!this.state.seen) {
      this.setState({
        seen: true
      });
      Modal.info({
        title: this.props.data,
        centered: true
      });
    }
  };

  render() {
    return (
      <Card
        style={{ textAlign: 'center' }}
        onClick={this.see}
        className={this.state.seen ? 'random-item seen' : 'random-item'}>
        {this.props.label}
      </Card>
    );
  }
}
