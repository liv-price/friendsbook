import "./topbar.css";
import {  Person, } from "@material-ui/icons";
import { Link , useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {

  const history=useHistory();

  function logOut(){
    localStorage.clear();
    history.push('/login');
  }
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Friendsbook</span>
        </Link>
      </div>
      <div className="topbarCenter">
    
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
          <Link to="/" style={{ textDecoration: "none"}}>
            <button className="topbarLink">Homepage</button>
          </Link>
         
            <span className="topbarLinklog" ><a href="/login" style={{textDecoration:'none',  color:"white",}} onClick={logOut}>LogOut</a></span>
         {/* <Link href="/login" style={{ textDecoration: "none"}}>
            <button className="topbarLinklog"  onClick={logOut}>Log Out</button>
          </Link> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Link to={`/user/${user.username}`} style={{ textDecoration: "none" ,color:"white"}}>
            <Person /> Users 
           </Link>
         
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
