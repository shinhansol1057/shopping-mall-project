import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  
  const [isFocused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleFocus = () => {
    setFocused(true);
  };
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (e) => {
    if(e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          {authenticate=== true? <div onClick={()=>setAuthenticate(false)}>로그아웃</div> : <div>로그인</div>}
        </div>
      </div>
      <div className="logo-area">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDW-t6H1Rsb7KilMykiG2QXDp77C_mlRbCiNG-XLO7Rg&s"
          alt="H&M-logo"
          width={100}
          onClick={()=>navigate("/")}
        />
        <div className="search-area">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            onKeyDown={(e)=>search(e)}
            className="search-input"
            type="text"
            placeholder={isFocused ? "" : "search"}
            onFocus={handleFocus}
            onBlur={() => setFocused(false)} // Optional: 포커스가 해제될 때 상태 업데이트
          />
        </div>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
