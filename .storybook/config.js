import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';
function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  //stories 폴더에서 파일명의 끝이 Story.jsx로 끝나는 경우 그 파일을 여기에 포함시킨다.
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}
setAddon(JSXAddon);
configure(loadStories, module);
