
import { useState } from 'react';
import './App.css'
import Main from './components/Main';
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

// App.js
function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="bg-[#ffff]">
      <TopBar />
      <div className='flex'>
        <SideBar setSelectedComponent={setSelectedComponent} />
        <Main>{selectedComponent}</Main>
      </div>
    </div>
  );
}

export default App;
