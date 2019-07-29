import React from 'react';
import './style.css'

export default class RandomItem extends React.Component<any, any>{
  state = {
    seen: false
  }

  see = (e: any) => {
    this.setState({
      seen: true
    })
    alert(this.props.data)
  }

  render() {
    return (
      <button
        className={this.state.seen ? 'random-item' : 'random-item'}
        disabled={this.state.seen}
        onClick={this.see}>{this.props.label}</button>
    );
  }
}
