import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo-svg" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.instagram.com/williams_nasci/">@williams_nasci</a>
                </p>
            </div>
        </header>
    )
}

export default Header