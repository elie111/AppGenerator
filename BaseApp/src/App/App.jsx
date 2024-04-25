import { useEffect, useState } from 'react';
import './App.css';
import Button from '../components/Button/Button';
import { useButton } from '../components/Button/ButtonContext';
import './GeneratedStyles.css';
import Header from '../components/Header/Header';
import Image from '../components/Image/Image'
import ImageButton from '../components/ImageButton/ImageButton';
import Section from '../components/Section/Section';
import SideBar from '../components/SideBar/SideBar';
import Text from '../components/Text/Text';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const { buttonState } = useButton();

  useEffect(() => {
    if (buttonState.id === "app" && buttonState.action === "page") {
      setCurrentPage(buttonState.info);
    }
  }, [buttonState]);

  // Insert pages array here

  return (
    <>
      {pages[currentPage]}
    </>
  );
}

export default App;
