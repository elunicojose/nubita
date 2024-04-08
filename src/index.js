import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import Test from './Test';
import ErrorBoundary from './components/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
);


