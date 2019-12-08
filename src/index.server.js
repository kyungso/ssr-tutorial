
// 서버 사이드 렌더링을 할 때, 서버를 위한 엔트리 파일
// ReactDOMServer의 renderToString 함수에 JSX를 넣어서 호출하면,
// 렌더링 결과를 문자열로 반환합니다.

import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering!</div>
);

console.log(html);
