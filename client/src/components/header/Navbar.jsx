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
                        <a href="#">Sign In</a>
                    </div>

                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                            <p>Cart</p>
                        </Badge>
                    </div>

                    <Avatar className='avtar' alt="User" sx={{ bgcolor: "#1365cf" }}>
                        U
                    </Avatar>
                </div>
            </nav>
        </header>
    )
}

export default Navbar