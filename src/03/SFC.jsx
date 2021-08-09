//Stateless Functional Component(SFC)
//Class component와 대비되는 개념이다.
//프로퍼티와 컨텍스트를 input, jsx를 output으로 하는 컴포넌트이다.
//state와 생명주기 함수를 사용할 수 없기 때문에 간단한 UI 컴포넌트를 만들 때 사용한다.
import React from 'react';
import PropTypes from 'prop-types';
import { ContextExclusionPlugin } from 'webpack-dev-middleware/node_modules/webpack';
function SFC(props, context) {
  const { somePropValue } = props;
  const { someContextValue } = Context;
  return <h1>Hello, {somePropValue}</h1>;
}
SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
