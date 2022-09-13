import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from 'views/Root';
import { worker } from 'mocks/browsers';

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
});
