import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Project.js';
import Resume from './components/Resume.js';

function App() {
    let [navi, setNav] = useState('');

    let render;

    switch(navi) {
        case 'about-me':
            render = <About />;
            break; 
        case 'projects':
            render = <Projects />;
            break;
        case 'resume':
            render = <Resume />
                break;
    }

    return (
        <div className="App">

        <Header />
        <Navbar navi={navi} setNav={setNav} />
        {render}
        </div>
    );
}

export default App;
