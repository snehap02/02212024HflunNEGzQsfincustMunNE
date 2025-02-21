import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const SellBuy = () => {
  const navigate = useNavigate();
  const toggleMode = () => {
    localStorage.setItem('mode','BUYER');
    navigate("/");
    window.location.reload();
    
    console.log("Mode is changes to buyer");
  }

  return (
    <div>
      {/* <Link to="/" > */}
        <button className="navText border rounded-full px-5 hover:text-black hover:bg-buttonHover border-buySellBorder hover:transition-all hover:duration-500 hover:delay-75 ease-in-out hidden lg:flex"
        onClick={toggleMode}>
          Switch to Buy
        </button>
      {/* </Link> */}
    </div>
  )
}

export default SellBuy
