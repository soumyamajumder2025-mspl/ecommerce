const Navbar = () => {
    return (
        <div style={{ backgroundColor: '#131921', height: '60px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="#" style={{ color: 'white', backgroundColor: '#febd69', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Sign In</a>
                
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#131921', padding: '8px', borderRadius: '4px', border: '1px solid white' }}>
                    <span style={{ color: 'white', marginRight: '8px', backgroundColor: 'red', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</span>
                    <span style={{ color: 'white', marginRight: '8px' }}>🛒</span>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>Cart</span>
                </div>
                
                <div style={{ width: '35px', height: '35px', backgroundColor: '#1365cf', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    U
                </div>
            </div>
        </div>
    )
}

export default Navbar