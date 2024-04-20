import './App.css';
import './GeneratedStyles.css';
import Button from './Button/Button';
import Section from './Section/Section';
import ImageButton from './ImageButton/ImageButton';
import Image from './Image/Image';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
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
  // Insert pages array here
const pages = [
  <>
    <Header className="Header-1" params={{'source': '/prisonMike.jpg'}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Header>
    <Section className="Section-1" params={{}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Section>
    <Image className="Image-1" params={{'source': '/providence.jpg'}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Image>
    <Button className="Button-1" params={{}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Button>
    <Button className="Button-2" params={{}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Button>
    <ImageButton className="ImageButton-1" params={{'source': '/spongy.jpg'}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</ImageButton>
  </>,
  <>
    <Header className="Header-2" params={{'source': '/spongy.jpg'}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Header>
    <Section className="Section-2" params={{}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Section>
    <Image className="Image-2" params={{'source': '/providence.jpg'}} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Image>
  </>,
];
  // Define components directly in the array
  // const pages = [
  //   <>
  //     <Button styles={buttonStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)}>test button</Button>
  //     <Section styles={sectionStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)} />
  //   </>,
  //   <Section styles={sectionStyles} onClick={() => setCurrentPage(previousPage => (previousPage + 1) % 2)} />
  // ];

  return (
    <>
      <title>test app name</title>
      {pages[currentPage]}
    </>
  );
}

export default App;
