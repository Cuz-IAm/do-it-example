import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.formData = 'no data';
    this.handleData = this.handleData.bind(this); //3-9 callback 설명할 때 설명하신다는구먼
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new Data';
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate(); //컴포넌트 내장함수 forceUpdata()함수를 이용하여 렌더링
  }
  render() {
    return (
      <div>
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
