import React from "react";

function Field({name, value, onChange, children}){
    return <tr>
        <th>
            <label htmlFor={name}>{children}</label>
        </th>
        <th>
            <input type="texte" value={value} onChange={onChange} id={name} name={name}></input>
        </th>
    </tr>
}
function DateField({name, value, onChange, children}){
    return <tr>
        <th>
            <label htmlFor={name}>{children}</label>
        </th>
        <th>       
            <input type="date" value={value} onChange={onChange} id={name} name={name}></input>
        </th>
        </tr> 
}


class Contact extends React.Component{
    //Prop
    constructor(props){
        super(props)
        this.state = {
            dateContact: '',
            name: '',
            surname: '',
            email: '',
            genre: '',
            birthday: '',
            role: ['enseignant','etudiant','autre'],
            subject: '',
            content: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //Function
    handleChange(e){
        const name = e.target.name//nom du chp modifie
        const type = e.target.type//type du champ
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        console.log(data)
    }
    //Render
    render(){
        return <form className="container" onSubmit={this.handleSubmit}>
            <table>
                <DateField name="dateContact" value={this.state.dateContact} onChange={this.handleChange}>Date de contact :</DateField>
                <Field name="name" value={this.state.name} onChange={this.handleChange}>Nom :</Field>
                <Field name="surname" value={this.state.surname} onChange={this.handleChange}>Prenom :</Field>
        
            
                <tr>
                    <th>
                        <label htmlFor="email">Email :</label>
                    </th>
                    <th>
                        <input type="email" value={this.state.email} onChange={this.handleChange} id="email" name="email"></input>
                    </th>
                </tr>
            
                <tr>
                    <th>
                        <label htmlFor="genre">Genre :</label>
                    </th>
                    <th>
                        <div className="form-check form-check-inline">
                            <input type="radio" id="man" name="genre" value="homme" onChange={this.handleChange} className="form-check-input" />
                            <label htmlFor="man" className="form-check-label">Homme</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" id="women" name="genre" value="femme" onChange={this.handleChange} className="form-check-input" />
                            <label htmlFor="women" className="form-check-label">Femme</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" id="other" name="genre" value="autre" onChange={this.handleChange} className="form-check-input" />
                            <label htmlFor="other" className="form-check-label">Autre</label>
                        </div>
                    </th>
                </tr>

            
                <DateField name="birthday" value={this.state.birthday} onChange={this.handleChange}>Date d'anniversaire :</DateField>
    
            
                <tr>
                    <th>
                        <label htmlFor="role">Fonction :</label>
                    </th>
                    <th>
                        <select id="role" name="role" value={this.state.role} onChange={this.handleChange}>
                            <option value="enseignant">Enseignant</option>
                            <option value="etudiant">Etudiant</option>
                            <option value="autre">Autre</option>
                        </select>
                    </th>  
                </tr>
            
                <Field name="subject" value={this.state.subject} onChange={this.handleChange}>Sujet :</Field>

                <tr>
                    <th>
                        <label htmlFor="content">Content :</label>
                    </th>
                    <th>
                        <textarea rows="5" cols="33" value={this.state.content} onChange={this.handleChange} id="content" name="content">
                            Tapez ici votre mail
                        </textarea>
                    </th>
                </tr>
                
                <div className="form-group">
                <button className="btn btn-primary">Submit</button>
                </div>
            </table>
            {JSON.stringify(this.state)}
        </form>
        
    }
}

export default Contact;