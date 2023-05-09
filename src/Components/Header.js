
const Title = () => (
    <a href="/">
      <img className="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/m3xrw50bg6adle6om3iy" alt="Food Fire Logo" />
    </a>
  );


  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };


export default Header;
