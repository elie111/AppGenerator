import './App.css';
import Button from './Button/Button';
import Section from './Section/Section';
import { useState } from 'react';

const buttonStyles = `
background-color: red;
position: absolute;
top: 50px;
right: 100px`;

const sectionStyles = `
background-color: blue;
position: absolute;
top: 70px;
right: 300px;
width: 200px;
height: 400px;`;

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Define components directly in the array
  const pages = [
    <> <Section background - color: yellow, z-index: 0, width: 50px, height: 50px} onClick=() => setCurrentPage(previousPage => (previousPage + 1) % 2) /> <Button styles={background - color: red, font-size: 30px} onClick=() => setCurrentPage(previousPage => (previousPage + 1) % 2) /> <Button styles={background - color: blue, font-size: 12px} onClick=() => setCurrentPage(previousPage => (previousPage + 1) % 2) /> </>,
    <> <Section styles={background - color: green, border: none, width: 50px, height: 50px} onClick=() => setCurrentPage(previousPage => (previousPage + 1) % 2) /> </>
  ];
  <>
    <Button styles={buttonStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Button>
    <Section styles={sectionStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)} />
  </>,
    <Section styles={sectionStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)} />
  ];

  return (
    <>
      {pages[currentPage]}
    </>
  );
}

export default App;
