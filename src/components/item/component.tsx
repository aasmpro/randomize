import React from 'react';
import { Card, Input } from 'antd';
import { CloseOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';

export default class Item extends React.Component<any, any> {
  increase = (e: any) => {
    this.props.handleAmount(this.props.item.id, this.props.item.amount + 1);
  };

  decrease = (e: any) => {
    if (this.props.item.amount > 1) {
      this.props.handleAmount(this.props.item.id, this.props.item.amount - 1);
    }
  };

  changeTitle = (e: any) => {
    const newTitle = e.target.value;
    this.props.handleTitle(this.props.item.id, newTitle);
  };

  delete = (e: any) => {
    this.props.deleteItem(this.props.item.id);
  };

  render() {
    return (
      <Card
        size="small"
        bodyStyle={{ padding: 0 }}
        actions={[
          <LeftOutlined onClick={this.decrease} />,
          <span>{this.props.item.amount}</span>,
          <RightOutlined onClick={this.increase} />
        ]}>
        <Input
          value={this.props.item.title}
          onChange={this.changeTitle}
          size="large"
          addonAfter={
            <CloseOutlined
              style={{ borderRadius: 0, fontSize: '1.4rem' }}
              onClick={this.delete}
            />
          }
        />
      </Card>
    );
  }
}
