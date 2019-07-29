import React from 'react';
import { Card, Icon, Input} from 'antd';

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
      <Card
        size="small"
        bodyStyle={{padding: 0}}
        actions={[
          <Icon type="left" onClick={this.decrease}/>, 
          <span>{this.props.item.amount}</span>, 
          <Icon type="right" onClick={this.increase}/>]}>
        <Input value={this.props.item.title} onChange={this.changeTitle} size="large"
          // style={{border: 'None', borderRadius: 0}}
          addonAfter={<Icon style={{borderRadius:0}} type="close" onClick={this.delete}/>}/>
      </Card>
    );
  }
}
