import React from "react";

class Footer extends React.Component{

    render(){
        return (
            <div className="footer">
                <img src="src/img/logo.jpeg" alt="logo" className="footerLogo" />
                <p className="footerAbout">
                    <strong>A Propos</strong>
                    {/* Ajouter un gestionnaire d'événements pour le clic sur le lien Contact */}
                    <a href="#" className="nav-link" onClick={this.handleContactClick}>Contact</a>
                </p>
            </div>
        );
    }
}

export default Footer;