// react와 react-dom을 가져다 사용하겠다
import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import App from './components/App';

// jsx
// 여기선 생략 가능 -> Index는 렌더링만 하는 걸로 해도 가능
const Index = (
    <div className={style.app}>
        <App/>
    </div>
)

ReactDOM.render(Index, document.querySelector('#app'));