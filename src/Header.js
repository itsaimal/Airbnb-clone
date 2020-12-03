import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://www.logolynx.com/images/logolynx/dd/ddf4c48e1f45130fdb3050fe32d75557.jpeg"
                    alt=""
                />
            </Link>
           <div className="header__center">
          <input type="text" />
          <SearchIcon />
           </div>

           <div className="header__right">
               <p>become a host</p>
               <LanguageIcon/>
               <ExpandMoreIcon/>
               <Avatar/>
           </div>

           </div>
        
    )
}

export default Header
