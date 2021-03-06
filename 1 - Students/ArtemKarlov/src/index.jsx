import React from 'react';
import ReactDom from 'react-dom';


const app = document.querySelector('#app');

import Messages from './components/Messages/Messages.jsx';

ReactDom.render(
    <div className="wrapper">
        <Messages />
    </div>,
    app
);
