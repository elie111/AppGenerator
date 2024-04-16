import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import Section from './Section/Section';


const styles = "bgColor = red width = 100px height = 100px color = blue border = 2px yellow"

function App() {
  return (
    <>
      <Button styles = {styles}>test button</Button>
      <Section></Section>
    </>
  );
}

export default App;
