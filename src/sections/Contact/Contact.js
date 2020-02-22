import React from 'react';
import './Contact.scss';
import '../Section.scss';
const Contact = ()=>{
    return(
        <section className="contact section">
            <div className="cellphone">
                <div className="cellphone-item">Celular</div>
                <div className="cellphone-item">Email</div>
                <div className="cellphone-item">LinkedIn</div>
                <div className="cellphone-item">Blah</div>
            </div>
        </section>
    ); 
}

export default Contact;