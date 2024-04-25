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
const pages = [
  <>
    <Header key="header1" className="header1" params={{'title': 'MyApp', 'source': 'spongy.jpg', 'buttons': {'sidebar': {'targetId': 'sidebar', 'action': 'toggleSideBar', 'actionInfo': ''}, 'logout': {'targetId': 'app', 'action': 'page', 'actionInfo': 2}}}} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar1" className="sidebar1" params={{'title': 'MySideBar', 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 2}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 2}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 0}}]}} nested={{'': ''}}>test button</SideBar>
    <Section key="section1" className="section1" params={{}} nested={[
  <>
    <Button key="button3" className="button3" params={{}} nested={{'': ''}}>test button</Button>
  </>,
]
}>test button</Section>
    <Button key="button1" className="button1" params={{'targetId': 'app-test', 'action': 'page', 'actionInfo': 1}} nested={{'': ''}}>test button</Button>
    <ImageButton key="imagebutton1" className="imagebutton1" params={{'source': 'spongy.jpg', 'alink': 'https://example.com', 'targetId': 'app', 'action': 'page', 'actionInfo': 1}} nested={{'': ''}}>test button</ImageButton>
  </>,
  <>
    <Header key="header2" className="header2" params={{}} nested={{'': ''}}>test button</Header>
    <SideBar key="sidebar2" className="sidebar2" params={{'title': 'MySideBar', 'source': 'providence.jpg', 'buttons': [{'home': {'targetId': 'app', 'action': 'page', 'actionInfo': 2}}, {}, {}, {'profile': {'targetId': 'app', 'action': 'page', 'actionInfo': 2}, 'settings': {'targetId': 'app', 'action': 'page', 'actionInfo': 1}}]}} nested={{'': ''}}>test button</SideBar>
    <Section key="section2" className="section2" params={{}} nested={[
  <>
    <Text key="text1" className="text1" params={{'content': 'this is my demo text in a navy color with transparent background'}} nested={{'': ''}}>test button</Text>
  </>,
]
}>test button</Section>
    <Button key="button2" className="button2" params={{'targetId': 'app', 'action': 'page', 'actionInfo': 0}} nested={{'': ''}}>test button</Button>
    <ImageButton key="imagebutton2" className="imagebutton2" params={{'source': 'prisonMike.jpg', 'alink': 'https://example.com', 'targetId': 'app-test', 'action': 'page', 'actionInfo': 0}} nested={{'': ''}}>test button</ImageButton>
  </>,
  <>
    <Button key="button4" className="button4" params={{'targetId': 'app', 'action': 'page', 'actionInfo': 0}} nested={{'': ''}}>test button</Button>
  </>,
];

  return (
    <>
      {pages[currentPage]}
    </>
  );
}

export default App;
