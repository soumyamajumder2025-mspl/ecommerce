import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';

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
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="nav_btn">
                        <a href="#" style={{ color: 'white', textDecoration: 'none', backgroundColor: 'gray', padding: '8px', borderRadius: '4px' }}>Sign In</a>
                    </div>

                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" style={{ color: 'white' }} />
                            <p style={{ color: 'white' }}>Cart</p>
                        </Badge>
                    </div>

                    <Avatar className='avtar' alt="User" sx={{ bgcolor: "#1365cf", width: 35, height: 35, marginLeft: 2 }}>
                        U
                    </Avatar>
                </div>
            </nav>
        </header>
    )
}

export default Navbar