import { useState } from 'react';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function App() {
  const [mode, SetMode] = useState('light')
  const handleModeChange = () => {
      if(mode === 'light') {
          SetMode('dark');
          document.body.style.backgroundColor = '#0d0d0d'
      } else {
          SetMode('light');
          document.body.style.backgroundColor = '#ffffff'
      }
    }
  return (
  <>
  <Nav mode={mode} changer={handleModeChange}/>
  <Card  mode={mode}/>
  <Contact  mode={mode}/>
  <Footer  mode={mode}/>
  </>
  );
}

export default App;
