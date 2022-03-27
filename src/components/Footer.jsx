import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer-07 pt-5 pb-5">
        <div className="container3 d-flex flex-row col-12 justify-content-center">
            <div className="col-12 col-md-6 text-center d-flex flex-column align-items-center">
            <img className="footer-img col-4" src="/offroad_adventures_logo.webp"></img>
                {/* <h2 className="col-4">OFFROAD BIH</h2> */}
            </div>
            <div className="d-flex flex-column m-auto">
                <div className="col-12 text-center d-flex flex-column m-auto center align-items-center">
                    <h4>Kontaktirajte nas</h4>
                    <p>Tel: +387 63 886 467</p>
                    <p>E-mail: info@offroad.ba</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
