import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.jsx' ;
import './PhotoViewer/PhotoViewer.css'

function App() {
  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src = {"https://picsum.photos/id/600.jpg"}/>
      </div>
  );
}
export default App
