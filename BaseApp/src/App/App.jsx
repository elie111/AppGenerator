import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { useButton } from '../AppContexts/ButtonContext';
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
import { handleLogout } from '../Firebase/firebaseAuthService';
import './App.css';
import './GeneratedStyles.css';
import { auth } from '../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { buttonState } = useButton();
  var title = "MyScheduler"; // updated to correct initialization
  const stateManagers = {
    currentPageState: [currentPage, setCurrentPage],
    emailState: [email, setEmail],
    passwordState: [password, setPassword],
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentPage("home");
      } else {
        setCurrentPage("login");
      }
    });

    return () => unsubscribe();  // Clean up the subscription
  }, []);

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
        default:
          break; // It's generally a good practice to have a default case in switch statements
      }
    }
  }, [buttonState]);

  // insert title here
  // Insert pages array here

  return (
    <>
      <title>{title}</title>
      {pages[currentPage]}
    </>
  );
}

export default App;
