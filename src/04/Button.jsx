import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { children, disabled, onPress } = this.props; //props 객체에 전달된 프로퍼티를 할당한다.
    return (
      <button onClick={onPress}>{children}</button> //button을 누르면 onPress함수가 실행된다.
    );
  }
}

Button.propTypes = {
  //Button component에 전달되는 프로퍼티의 데이터 타입을 따로 propTypes객체에 넣어준다. 왜?
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {}, //기본값으로 빈 함수를 전달함으로써 프로퍼티가 전달되지 않아도 이벤트에서 콜백함수가 실행될 때
  //undefined 오류를 방지한다.
};

export default Button;
