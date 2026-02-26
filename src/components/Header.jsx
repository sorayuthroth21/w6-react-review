import pnLogo from "../assets/pn-logo.png";

export default Header 

function Header(props){
    return (

        <header id="header">
                <img src={pnLogo} alt="PN Logo" />
                <h1> {props.name}</h1>
        </header>
    );
}