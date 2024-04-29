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
const pages = {
"home":  <>
    <Header key="header1" className="header1" params={{'id': 'header1', 'title': 'MyApp', 'source': 'spongy.jpg', 'buttons': {'sidebar': {'targetId': 'sidebar1', 'action': 'toggleSideBar', 'actionInfo': ''}, 'logout': {'targetId': 'app', 'action': 'page', 'actionInfo': 'login'}}, 'targetId': 'dropdown1', 'action': 'toggle', 'actionInfo': ''}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar1" className="sidebar1" params={{'id': 'sidebar1', 'title': 'MySideBar', 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'login'}}]}}  stateManagers={stateManagers} nested={{'': ''}}>test button</SideBar>
    <VerticalLayout key="verticalLayout1" className="verticalLayout1" params={{}}  stateManagers={stateManagers} nested={[<>
    <Card key="card1" className="card1" params={{'source': 'spongy.jpg', 'info': {'name': 'elie', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
    <Card key="card2" className="card2" params={{'source': 'spongy.jpg', 'info': {'name': 'roi', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
    <Card key="card3" className="card3" params={{'source': 'spongy.jpg', 'info': {'name': 'david', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Card>
  </>,
]
}>test button</VerticalLayout>
    <ImageButton key="imagebutton1" className="imagebutton1" params={{'source': 'spongy.jpg', 'alink': 'https://example.com', 'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</ImageButton>
    <DropdownMenu key="dropdown1" className="dropdown1" params={{'buttons': {'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}, 'account': {'targetId': 'app', 'action': 'page', 'actionInfo': 'signup'}, 'logout': {'targetId': 'app', 'action': 'logout', 'actionInfo': 'login'}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</DropdownMenu>
  </>,
"profile":  <>
    <Header key="header2" className="header2" params={{}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar2" className="sidebar2" params={{'title': {'source': 'hardCoded', 'value': 'My Planner'}, 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 'test'}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 'test'}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}}]}}  stateManagers={stateManagers} nested={{'': ''}}>test button</SideBar>
    <VerticalLayout key="verticalLayout2" className="verticalLayout2" params={{}}  stateManagers={stateManagers} nested={[<>
    <Text key="text1" className="text1" params={{'content': 'this is my demo text in a navy color with transparent background'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Text>
  </>,
]
}>test button</VerticalLayout>
    <Button key="button2" className="button2" params={{'text': 'Home', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
    <ImageButton key="imagebutton2" className="imagebutton2" params={{'source': 'prisonMike.jpg', 'alink': 'https://example.com', 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</ImageButton>
    <Button key="button4" className="button4" params={{'text': 'Home', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
  </>,
"login":  <>
    <Form key="form1" className="form1" params={{'id': 'form1', 'role': 'login', 'fields': {'username': {'placeholder': 'username', 'type': 'text'}, 'password': {'placeholder': 'password', 'type': 'password'}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Form>
    <VerticalLayout key="verticalLayoutLogin" className="verticalLayoutLogin" params={{}}  stateManagers={stateManagers} nested={[<>
    <Button key="button6" className="button6" params={{'text': 'login', 'targetId': 'form1', 'action': 'login', 'actionInfo': 'profile'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
    <Button key="button7" className="button7" params={{'text': 'return', 'targetId': 'form1', 'action': 'cancel', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</VerticalLayout>
  </>,
"signup":  <>
    <Form key="form2" className="form2" params={{'id': 'form2', 'role': 'signup', 'fields': {'username': {'placeholder': 'username', 'type': 'text'}, 'password': {'placeholder': 'password', 'type': 'password'}, 'confirm password': {'placeholder': 'confirm password', 'type': 'password'}, 'phone number': {'placeholder': 'phone', 'type': 'tel'}}}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Form>
    <VerticalLayout key="verticalLayoutSignup" className="verticalLayoutSignup" params={{}}  stateManagers={stateManagers} nested={[<>
    <Button key="button8" className="button8" params={{'text': 'sign up', 'targetId': 'form2', 'action': 'signup', 'actionInfo': 'home'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
    <Button key="button9" className="button9" params={{'text': 'return', 'targetId': 'form2', 'action': 'cancel', 'actionInfo': 'login'}}  stateManagers={stateManagers} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</VerticalLayout>
  </>,
};

  return (
    <>
      {pages[currentPage]}
    </>
  );
}

export default App;
