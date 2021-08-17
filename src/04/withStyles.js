import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'; //import theme manager of react-with-styles
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles'; //react-with-styles에서 사용하는 함수를 임포트
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme); //아까 만든 Theme.js를 테마 파일로 등록한다.
ThemedStyleSheet.registerInterface(aphroditeInterface); //아프로디테를 테마 관리자에 등록한다.

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
