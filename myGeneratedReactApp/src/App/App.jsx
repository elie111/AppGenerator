import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { useButton } from '../components/Button/ButtonContext';
import Card from '../components/Card/Card';
import DropdownMenu from '../components/DropdownMenu/DropdownMenu';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Image from '../components/Image/Image';
import ImageButton from '../components/ImageButton/ImageButton';
import Section from '../components/Section/Section';
import SideBar from '../components/SideBar/SideBar';
import Text from '../components/Text/Text';
import './App.css';
import './GeneratedStyles.css';
function App() {
  const [currentPage, setCurrentPage] = useState("signup");
  const { buttonState } = useButton();

  useEffect(() => {
    if (buttonState.id === "app" && buttonState.action === "page") {
      setCurrentPage(buttonState.info);
    }
  }, [buttonState]);

  // Insert pages array here
const pages = {
"home":  <>
    <Header key="header1" className="header1" params={{'id': 'header1', 'title': 'MyApp', 'source': 'spongy.jpg', 'buttons': {'sidebar': {'targetId': 'sidebar1', 'action': 'toggleSideBar', 'actionInfo': ''}, 'logout': {'targetId': 'app', 'action': 'page', 'actionInfo': 'login'}}, 'targetId': 'dropdown1', 'action': 'toggle', 'actionInfo': ''}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar1" className="sidebar1" params={{'id': 'sidebar1', 'title': 'MySideBar', 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'login'}}]}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</SideBar>
    <Section key="section1" className="section1" params={{}}  switchPage={setCurrentPage} nested={[<>
    <Card key="card1" className="card1" params={{'source': 'spongy.jpg', 'info': {'name': 'elie', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Card>
    <Card key="card2" className="card2" params={{'source': 'spongy.jpg', 'info': {'name': 'roi', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Card>
    <Card key="card3" className="card3" params={{'source': 'spongy.jpg', 'info': {'name': 'david', 'time': '1/5/2024', 'location': 'zoom', 'zoomLink': 'zoom.com', 'description': 'math class'}, 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'profile'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Card>
  </>,
]
}>test button</Section>
    <ImageButton key="imagebutton1" className="imagebutton1" params={{'source': 'spongy.jpg', 'alink': 'https://example.com', 'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</ImageButton>
    <DropdownMenu key="dropdown1" className="dropdown1" params={{'buttons': {'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}, 'account': {'targetId': 'app', 'action': 'page', 'actionInfo': 'signup'}, 'logout': {'targetId': 'app', 'action': 'page', 'actionInfo': 'login'}}}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</DropdownMenu>
  </>,
"profile":  <>
    <Header key="header2" className="header2" params={{}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar2" className="sidebar2" params={{'title': 'MySideBar', 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 'test'}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 'test'}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 'profile'}}]}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</SideBar>
    <Section key="section2" className="section2" params={{}}  switchPage={setCurrentPage} nested={[<>
    <Text key="text1" className="text1" params={{'content': 'this is my demo text in a navy color with transparent background'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Text>
  </>,
]
}>test button</Section>
    <Button key="button2" className="button2" params={{'text': 'Home', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
    <ImageButton key="imagebutton2" className="imagebutton2" params={{'source': 'prisonMike.jpg', 'alink': 'https://example.com', 'targetId': 'app-test', 'action': 'page', 'actionInfo': 'home'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</ImageButton>
    <Button key="button4" className="button4" params={{'text': 'Home', 'targetId': 'app', 'action': 'page', 'actionInfo': 'home'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
  </>,
"login":  <>
    <Form key="form1" className="form1" params={{'id': 'form1', 'role': 'login', 'fields': {'username': {'placeholder': 'username', 'type': 'text'}, 'password': {'placeholder': 'password', 'type': 'password'}}}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Form>
    <Section key="sectionLogin" className="sectionLogin" params={{}}  switchPage={setCurrentPage} nested={[<>
    <Button key="button6" className="button6" params={{'text': 'login', 'targetId': 'form1', 'action': 'login', 'actionInfo': 'profile'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
    <Button key="button7" className="button7" params={{'text': 'return', 'targetId': 'form1', 'action': 'cancel', 'actionInfo': 'home'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</Section>
  </>,
"signup":  <>
    <Form key="form2" className="form2" params={{'id': 'form2', 'role': 'signup', 'fields': {'username': {'placeholder': 'username', 'type': 'text'}, 'password': {'placeholder': 'password', 'type': 'password'}, 'confirm password': {'placeholder': 'confirm password', 'type': 'password'}, 'phone number': {'placeholder': 'phone', 'type': 'tel'}}}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Form>
    <Section key="sectionSignup" className="sectionSignup" params={{}}  switchPage={setCurrentPage} nested={[<>
    <Button key="button8" className="button8" params={{'text': 'sign up', 'targetId': 'form2', 'action': 'signup', 'actionInfo': 'login'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
    <Button key="button9" className="button9" params={{'text': 'return', 'targetId': 'form2', 'action': 'cancel', 'actionInfo': 'home'}}  switchPage={setCurrentPage} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</Section>
  </>,
};

  return (
    <>
      {pages[currentPage]}
    </>
  );
}

export default App;
