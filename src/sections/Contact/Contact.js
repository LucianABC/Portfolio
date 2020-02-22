import React from 'react';
import './Contact.scss';
import '../Section.scss';
import '../../components/Animations/Animations.scss';
import CellphoneIco from '../../assets/Icons/phone-call.png';
import GmailIco from '../../assets/Icons/gmail.png';
import LinkedinIco from '../../assets/Icons/linkedin.png';
import Icon from './Icons/Icon';
import useBool from '../../components/useBool';

const Contact = ()=>{
  
    const handleClick = (screen)=>{
        return
    }
    return(
        <section className="contact section">
            <div className="cellphone">

                <div className="cellphone-screen">
                    <div className="cellphone-clock">
                        <p>saturday <br/> 22.02.2020</p>
                        <h1>16:20</h1>
                    </div>
                    <div className="cellphone-content">
                       <p > Welcome! </p>
                    </div>
                    <div className="cellphone-buttons">
                        <Icon onClick={handleClick("cellphone")} img={CellphoneIco}>Cellphone</Icon>
                        <Icon onClick={handleClick("email")} img={GmailIco}>Email</Icon>
                        <Icon onClick={handleClick("linkedin")} img={LinkedinIco}>Linked In</Icon>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default Contact;