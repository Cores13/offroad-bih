import React from 'react'

export const Navbar = () => {
  return (
    <header>
        <div className="topnav" id="myTopnav">
            <div className="d-flex flex-row ms-5 align-items-center">
                <img className="footer-img col-4" src="/offroad-logo-borderless.webp"></img>
                <h1>OFF ROAD BIH</h1>
            </div>
            <a href="#" className="active">Početna</a>
        </div>
    </header>
  )
}
