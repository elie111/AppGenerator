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
import { handleLogout } from '../Firebase/firebaseAuthService'
import './App.css';
import './GeneratedStyles.css';

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { buttonState } = useButton();
  var title = "MyReactApp";
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

  // insert title here
title = "MyScheduler"  // Insert pages array here
const pages = {
"home":  <>
    <Header key="header1" className="header1" params={{'id': 'header1', 'title': {'id': 'headerText', 'source': 'none', 'value': 'MyApp'}, 'profileImage': {'id': 'profileImage', 'targetId': 'dropdown1', 'action': 'toggle', 'actionInfo': '', 'source': 'none', 'value': 'prisonMike.jpg'}, 'buttons': {'sidebar': {'id': 'sidebarButton', 'targetId': 'sidebar1', 'action': 'toggleSideBar', 'actionInfo': '', 'text': {'id': 'sideBarText', 'source': 'none', 'value': 'Menu'}}, 'logout': {'id': 'sidebarButtonlogout', 'targetId': 'app', 'action': 'logout', 'actionInfo': '', 'text': {'id': 'sideBarLogoutText', 'source': 'none', 'value': 'Logout'}}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar1" className="sidebar1" params={{'id': 'sidebar1', 'title': {'id': 'sidebartitle', 'source': 'none', 'value': 'My Planner'}, 'image': {'id': 'imageSidebar', 'source': 'none', 'value': 'providence.jpg'}, 'buttons': {'home': {'id': 'homeButton', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home', 'text': {'id': 'homeText', 'source': 'none', 'value': 'home'}, 'newSectionSpace': 1}, 'profile': {'id': 'profileButton', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home', 'text': {'id': 'profileText', 'source': 'none', 'value': 'profile'}, 'newSectionSpace': 2}, 'settings': {'id': 'settingsButton', 'targetId': 'app', 'action': 'page', 'actionInfo': 'login', 'text': {'id': 'settingsText', 'source': 'none', 'value': 'settings'}, 'newSectionSpace': 0}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</SideBar>
    <HorizentalLayout key="horizentalLayout1" className="horizentalLayout1" params={{'id': 'shortDescription', 'collection': 'users', 'document': '2pXmQQzAjrf83OREczSzDB8lZQA3', 'loop': 'false', 'condition': {'isConditional': 'false', 'showWhen': ['username', 'equals', 'elie']}}}  stateManagers={stateManagers} nested={[<>
    <Card key="card1" className="card1" params={{'id': 'card1', 'image': {'id': 'imagecard', 'source': 'none', 'value': 'spongy.jpg'}, 'cardId': {'id': 'cardId', 'source': 'none', 'value': 'elie'}, 'shortDescription': {'id': 'shortDescription', 'source': 'none', 'value': 'tomorrow'}, 'longDescription': {'id': 'longDescription', 'source': 'none', 'value': 'math class'}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
    <Card key="card2" className="card2" params={{'id': 'card2', 'image': {'id': 'shortDescription', 'source': 'none', 'value': 'spongy.jpg'}, 'cardId': {'id': 'shortDescription', 'source': 'none', 'value': 'Roi'}, 'shortDescription': {'id': 'shortDescription', 'source': 'none', 'value': 'tomorrow'}, 'longDescription': {'id': 'shortDescription', 'source': 'none', 'value': 'graphics class'}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
    <Card key="card3" className="card3" params={{'id': 'card3', 'image': {'id': 'shortDescription', 'source': 'none', 'value': 'spongy.jpg'}, 'cardId': {'id': 'shortDescription', 'source': 'none', 'value': 'David'}, 'shortDescription': {'id': 'shortDescription', 'source': 'none', 'value': 'tomorrow'}, 'longDescription': {'id': 'shortDescription', 'source': 'none', 'value': 'algorithms class'}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
  </>,
]
}>test button</HorizentalLayout>
    <ImageButton key="imagebutton1" className="imagebutton1" params={{'id': 'ib1', 'source': 'none', 'value': 'spongy.jpg', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</ImageButton>
    <DropdownMenu key="dropdown1" className="dropdown1" params={{'id': 'shortDescription', 'buttons': {'settings': {'id': 'ahh', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home', 'text': {'id': 'shortDescription', 'source': 'none', 'value': 'settings'}}, 'account': {'id': 'ah2h', 'targetId': 'app', 'action': 'page', 'actionInfo': 'signup', 'text': {'id': 'shortDescription', 'source': 'none', 'value': 'account'}}, 'logout': {'id': 'ahh3', 'targetId': 'app', 'action': 'logout', 'actionInfo': 'home', 'text': {'id': 'shortDescription', 'source': 'none', 'value': 'logout'}}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</DropdownMenu>
  </>,
"login":  <>
    <Form key="form1" className="form1" params={{'id': 'form1', 'fields': {'username': {'id': 'shortDescription', 'name': 'username', 'type': 'text', 'source': 'none', 'value': ''}, 'password': {'id': 'shortDescription', 'name': 'password', 'type': 'password', 'source': 'none', 'value': ''}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Form>
    <HorizentalLayout key="horizentalLayoutLogin" className="horizentalLayoutLogin" params={{'id': 'shortDescription', 'collection': 'users', 'document': '2pXmQQzAjrf83OREczSzDB8lZQA3', 'loop': 'false', 'condition': {'isConditional': 'false', 'showWhen': ['username', 'equals', 'elie']}}}  stateManagers={stateManagers} nested={[<>
    <Button key="button6" className="button6" params={{'id': 'horizentalLayoutLogin', 'text': {'id': 'shortDescription', 'source': 'firebase', 'value': 'userId'}, 'targetId': 'form1', 'action': 'login', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
    <Button key="button7" className="button7" params={{'id': 'sdgsdg', 'text': {'id': 'shortDescription', 'source': 'none', 'value': 'return'}, 'targetId': 'form1', 'action': 'cancel', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</HorizentalLayout>
  </>,
"signup":  <>
    <Form key="form2" className="form2" params={{'id': 'form2', 'fields': {'username': {'id': 'shortDescription', 'name': 'username', 'type': 'text', 'source': 'none', 'value': ''}, 'password': {'id': 'shortDescription', 'name': 'password', 'type': 'password', 'source': 'none', 'value': ''}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Form>
    <HorizentalLayout key="horizentalLayoutSignup" className="horizentalLayoutSignup" params={{'id': 'shortDescription', 'collection': 'users', 'document': '2pXmQQzAjrf83OREczSzDB8lZQA3', 'loop': 'false', 'condition': {'isConditional': 'false', 'showWhen': ['username', 'equals', 'elie']}}}  stateManagers={stateManagers} nested={[<>
    <Button key="button8" className="button8" params={{'id': 'horizentalLayoutSignup', 'text': {'source': 'none', 'value': 'sign up'}, 'targetId': 'form2', 'action': 'signup', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
    <Button key="button9" className="button9" params={{'id': 'sdgsdsafas', 'text': {'id': 'shortDescription', 'source': 'none', 'value': 'return'}, 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</HorizentalLayout>
  </>,
};

  return (
    <>
      <title>{title}</title>
      {pages[currentPage]}
    </>
  );
}

export default App;
