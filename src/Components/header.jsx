import homeIcon from "../assets/lar.png"
import'./header.css'
const Header = ({titulo, subtitulo}) => {
    return (
        <header className='header-container'>
            <a href="" className='homeA'><img className="homeLogo" src={homeIcon} alt="" /></a>
            <div>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            </div>
            <a href="" className='loginA'>Login</a>

        </header>
    )
}

export default Header;
