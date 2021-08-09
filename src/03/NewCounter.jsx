import React from 'react';

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props; //프로퍼티에서 전달된 count값을 따로 const로 저장한다.
    //왜? getDerivedStateFromProps함수는 다른 컴포넌트가 바뀌어도 호출됨.
    //count가 바뀌었는지 확인하려면 상수로 선언해놓고 사용해놓는 것.
    return {
      count,
      newCount:
        count === state.count //익숙하지 않은 문법이다...
          ? state.NewCount
          : count,
    };
  }
  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트:{this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
