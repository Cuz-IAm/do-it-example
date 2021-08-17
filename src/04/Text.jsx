import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';
class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary
        )}
      >
        {children}
      </span>
    ); //이 부분에서 ...css(styles.default)가
    //어떻게 동작하는지 잘 모르겠다.
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
}))(Text); //Text컴포넌트에 withStyles함수 적용
//함수가 좀 특이하게 생겼다. 커링 형태라는 개념을 알아야 한다고 한다. 5장에서 알려준단다.
