import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <img src={process.env.PUBLIC_URL + '/amazon_PNG25.png'} alt="Amazon Logo" />
                    </div>

                    <div className="nav_searchbar">
                        <input type="text" name="" id="" />

                        <div className="search_icon">
                            <i className="fas fa-search" id="search"></i>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="nav_btn">
                        <a href="#" style={{ color: 'white', textDecoration: 'none', backgroundColor: 'gray', padding: '8px', borderRadius: '4px', zIndex: 1000, position: 'relative' }}>Sign In</a>
                    </div>

                    <div className="cart_btn" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#131921', padding: '8px', borderRadius: '4px', zIndex: 1000, position: 'relative' }}>
                        <span style={{ color: 'white', marginRight: '10px' }}>4</span>
                        <i className="fas fa-shopping-cart" style={{ color: 'white', marginRight: '10px' }}></i>
                        <p style={{ color: 'white', margin: 0 }}>Cart</p>
                    </div>

                    <div style={{ width: '35px', height: '35px', backgroundColor: '#1365cf', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginLeft: '15px', zIndex: 1000, position: 'relative' }}>
                        U
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar