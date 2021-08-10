import React from 'react';
import { storiesOf } from '@storybook/react'; //스토리를 스토리북에 추가하는 storiesOf()함수를 import함
import { action } from '@storybook/addon-actions';
import Input from '../03/Input'; //아까만든 input컴포넌트 임포트했음
storiesOf('Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />) //스토리의 이름과 메뉴 이름을 입력함.
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => (
    <Input name="name" onChange={action('onChange 이벤트 발생')} />
  ));
