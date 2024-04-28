import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { useButton } from '../components/Button/ButtonContext';
import Card from '../components/Card/Card';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Image from '../components/Image/Image';
import ImageButton from '../components/ImageButton/ImageButton';
import DynamicLayout from '../components/Layout/DynamicLayout/DynamicLayout';
import VerticalLayout from '../components/Layout/VerticalLayout/VerticalLayout';
import HorizentalLayout from '../components/Layout/HorizentalLayout/HorizentalLayout';
import SideBar from '../components/SideBar/SideBar';
import Text from '../components/Text/Text';
import { handleLogout } from '../Firebase/firebaseAuthService'
import './App.css';
import './GeneratedStyles.css';

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { buttonState } = useButton();

  const stateManagers = {
    "currentPageState": [currentPage, setCurrentPage],
    "emailState": [email, setEmail],
    "passwordState": [password, setPassword],
  }

  useEffect(() => {
    if (buttonState.id === "app") {
      switch (buttonState.action) {
        case "page":
          setCurrentPage(buttonState.info);
          break;
        case "logout":
          handleLogout();
          setCurrentPage(buttonState.info);
          break;
      }
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
