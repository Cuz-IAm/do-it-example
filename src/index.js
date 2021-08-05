////JSXSample.jsx를 순수 javascript로 구현하고자 한다면...
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// var img = document.createElement('img');
// img.setAttribute('src', 'http://www.easypub.co.kr/images/logo_footer.png');
// var divEl = document.createElement('div');
// divEl.innerText = '안녕하세요';
// var welcomeEl = document.createElement('div');
// welcomeEl.append(img);
// welcomeEl.append(divEl);
// var root = document.getElementById('root');
// root.append(welcomeEl);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
