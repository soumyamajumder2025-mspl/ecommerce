import "./navbar.css"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    return (
        <header>
            <nav>
                <div className="left">

                    <div className="navlogo">
                        <img src="./amazon_PNG25.png" alt="logo" />
                    </div>
                    <div className="nav_searchbar">
                        <input type="text" name=""
                            placeholder="Search Your Products" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <button 
                            onClick={() => {}} 
                            
                        >
                            signin
                        </button>
                    </div>

                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>

                    <Avatar className="avtar" />

                </div>
            </nav>
        </header>
    )
}

export default Navbar;