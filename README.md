<p align="center">
  <img src="https://github.com/edwindharris/spline.design-react-trigger/blob/main/public/react-spline-icons.svg" style="width: 50%"/>
</p>
<div align="center">
  
#  react <> spline trigger 
  
  This project is an example of basic integration between <b>[react](https://reactjs.org/)</b> and <b>[spline](https://spline.design/)</b> - A toggle in <b>spline</b> changes theme in <b>react</b> / Two buttons in <b>react</b> control a <b>spline</b> animation. This project requires opening the provided .spline file in [Spline App](https://app.spline.design/), which is free to use. 

<div align="left">

## Getting set up

### 1 - Install dependencies

`npm install @splinetool/react-spline @splinetool/runtime`
 
`npm install styled-components`

### 2 - In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>

## Explore / Edit Spline Scene

### 1 - Open the .spline file 

  Open the .spline file from the <b>Spline_scene</b> folder in [Spline App](https://app.spline.design/).
  
  #### ** TRIGGER LABELLING IN REACT AND SPLINE MUST CORRELATE **

### 2 - Export the scene in your Spline App as <b>Code > React</b>
 
Copy the scene link from the Spline export window to the “scene” property in the <b>Spline</b> component on line 52 of App.tsx

<p align="center">
  <img src="https://github.com/edwindharris/spline.design-react-trigger/blob/main/public/spline-export-screenshot.png" style="width: 25%"/>
</p>  
