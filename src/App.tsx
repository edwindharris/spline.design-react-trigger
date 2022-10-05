import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

function App() {

  const spline = useRef("");

  function onLoad(splineApp: any) {
    spline.current = splineApp;
  }

  // Triggers events in Spline
  function triggerOne() {
    // @ts-ignore
    spline.current.emitEvent('mouseDown', 'triggerOne')
  }

  function triggerTwo() {
    // @ts-ignore
    spline.current.emitEvent('mouseDown', 'triggerTwo')
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
        <div className="reactButtons">
          <h3 className='reactText'>These buttons control the SPLINE scene from REACT</h3>
          <div className='buttonPanel'>
            <button onClick={triggerOne}>⇡</button>
            <button onClick={triggerTwo}>⇣</button>
          </div>
        </div>
        <Spline className="splineScene" scene="https://prod.spline.design/Z6bvS3pMb7mj3czg/scene.splinecode"
          onLoad={onLoad}
          onMouseDown={onMouseDown} />
          <a href='https://edwindharris.dev' target="_blank"><h4 className='edDev'>edwin<em>d</em>harris</h4></a>
      </div>
    </>
  );
}

export default App;