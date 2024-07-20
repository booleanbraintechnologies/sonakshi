// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Work1 from './Components/Works/Work1.jsx';
import Work2 from './Components/Works/Work2.jsx';
import Work3 from './Components/Works/Work3.jsx';
import Work4 from './Components/Works/Work4.jsx';
import Work5 from './Components/Works/Work5.jsx';
import Work6 from './Components/Works/Work6.jsx';
// import Freelance from './Components/Freelance.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
        <Route path="/work3" element={<Work3 />} />
        <Route path="/work4" element={<Work4 />} />
        <Route path="/work5" element={<Work5 />} />
        <Route path="/work6" element={<Work6 />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
