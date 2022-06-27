import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from 'pages';

import 'styles/index.scss';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
