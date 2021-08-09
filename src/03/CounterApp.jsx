import React from 'react';
import Counter from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />; //bind을 안해주면
    //Counter2에 this.increaseCount를 넘겨줄 때, this를 App이 아니라 Counter2로 인식한다.
  }
}
export default App;
