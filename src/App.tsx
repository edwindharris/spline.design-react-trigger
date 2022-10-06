import React, { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

function App() {

  const [splineApp, setSplineApp] = useState<Application>();

  function onLoadSplineApp(appToSet: Application) {
    setSplineApp(appToSet);
  }

  // Triggers events in Spline
  function triggerOne() {
    // @ts-ignore
    splineApp.emitEvent('mouseDown', 'triggerOne')
  }

  function triggerTwo() {
    // @ts-ignore
    splineApp.emitEvent('mouseDown', 'triggerTwo')
  }

  // Theme change triggered by Spline
  const [theme, setTheme] = useState('dark');

  function onMouseDown(e: { target: { name: string; }; }) {
    if (e.target.name === 'chooseLight') {
      setTheme('light');
   } else if (e.target.name === 'chooseDark') {
      setTheme('dark');
   }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <div className="reactControlContainer">
          <h3>These buttons control the SPLINE scene from REACT</h3>
          <div className='reactButtonContainer'>
            <button onClick={triggerOne}>⇡</button>
            <button onClick={triggerTwo}>⇣</button>
          </div>
        </div>
        <Spline className="splineScene" scene="https://prod.spline.design/u1wLA6W4ziVde-DY/scene.splinecode"
          onLoad={onLoadSplineApp}
          onMouseDown={onMouseDown} />
          <a href='https://edwindharris.dev' target="_blank"><h4 className='edDev'>edwin<em>d</em>harris</h4></a>
      </div>
    </>
  );
}

export default App;