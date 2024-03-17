import React from "react";
import { URL_API } from '../constantes';

class Connexion extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let url = URL_API + 'getConnexion?email=' + this.state.email + '&password=' + this.state.password;
        if (url) {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to connect');
                    }
                    return res.json();
                })
                .then(data => {
                    
                    if (!data) {
                        throw new Error('Invalid credentials');
                    }        
                    this.props.changeUser(data[0]); 
                })
                .catch(error => {
                    
                    
                });
                
        }

    };

    render() {
        const { email, password, isConnected, error, userData } = this.state;

        return (
            <div className="connexion">
                <h2>Connexion</h2>
            
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
                
            </div>
        );
    }
}

export default Connexion;
