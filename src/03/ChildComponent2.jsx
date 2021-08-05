//필수 프로퍼티를 사용하기 위해선?
import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}
ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringValue: PropTypes.string.isRequired, //isRequired는 필수 프로퍼티를 지정하는 특수변수이다.
  //컴포넌트를 사용하는데 이 프로퍼티에 값이 들어오지 않는다면 오류를 뱉는다.
};
export default ChildComponent2;
