import React from 'react';
import './Contact.scss';
import '../Section.scss';
import CellphoneIco from '../../assets/Icons/phone-call.png';
import GmailIco from '../../assets/Icons/gmail.png';
import LinkedinIco from '../../assets/Icons/linkedin.png';
import Icon from './Icons/Icon';

const Contact = ()=>{
    return(
        <section className="contact section">
            <div className="cellphone">
                <div className="cellphone-screen">
                    <Icon img={CellphoneIco}>
                        Cellphone
                    </Icon>
                     <Icon img={GmailIco}>
                        Email
                    </Icon>
                    <Icon img={LinkedinIco}>
                        Linked In
                    </Icon>
                </div>
            </div>
        </section>
    ); 
}

export default Contact;