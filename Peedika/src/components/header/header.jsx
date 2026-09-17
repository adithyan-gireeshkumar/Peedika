import './header.css'

function Header() {
    return (
    <header>
         <div className="container">
            <a href="#Home">Peedika</a>
            <nav>
                <a href="#Home">Home</a>
                <a href="#products">Products</a>
                <a href="#About">About</a>
            </nav>
            </div>
       </header>
    )
}

export default Header;