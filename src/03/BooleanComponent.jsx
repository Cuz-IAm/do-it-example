import React from 'react';

class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? '장 보러 가자' : '아니다 계속 공부 하자';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
