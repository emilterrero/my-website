function Navbar({navi, setNav}) {
    const click = (e) => {
        setNav(e.target.id)
    }


    return (
        <div className='navbar'>
        <ul>
        <li><button
        id='about-me'
        onClick={click}
        >About Me</button></li>

        <li><button
        id='projects'
        onClick={click}
        >Projects</button></li>

        <li><button
        id='resume'
        onClick={click}
        >Resume</button></li>
        
        <li><a
        href='https://www.linkedin.com/in/emil-terrero-dev/'
        target='_blank'
        ><img className='icon in-icon' src='./stackLogos/linkedinLogo.png' />
        </a></li>

        <li><a
        href='https://github.com/emilterrero'
        target='_blank'
        ><img className='icon github-icon' src='./stackLogos/githubLogo.png' />
        </a></li>
        </ul>
        </div>
    )
}

export default Navbar;
