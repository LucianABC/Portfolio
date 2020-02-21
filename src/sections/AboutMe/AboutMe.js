import React from 'react';
import '../Section.scss';
import './AboutMe.scss';
import Title from '../../components/Title';
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame';
import Photo from '../../assets/foto2.jpg';

const AboutMe = () => {
    return(
        <section className="about-me section">           
            <section className="about-me-content">
                <Title titleContent="About me" rotation={"10"}></Title>
                <p>
                    aca va texto bla bal bal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vulputate odio sed mattis.
                    Ut egestas sit amet justo id gravida. In nulla felis, consectetur a turpis quis, sagittis finibus enim. 
                    Donec sagittis ipsum a mauris feugiat consectetur. Curabitur condimentum dictum mattis. 
                    Nullam id quam ut nisl laoreet finibus a vel ante. Ut scelerisque orci ut semper pellentesque.
                    Praesent ac eleifend libero. Integer eget fermentum felis. Sed posuere vel magna id auctor. 
                    Integer lacinia dolor ornare velit rhoncus aliquam. Quisque lobortis iaculis elit eu rutrum. 
                    Ut eget lacus in odio lobortis semper. Sed id sapien congue, dictum neque in, tempor nunc.
                    aca va texto bla bal bal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vulputate odio sed mattis.
                    Ut egestas sit amet justo id gravida. In nulla felis, consectetur a turpis quis, sagittis finibus enim. 
                    Donec sagittis ipsum a mauris feugiat consectetur. Curabitur condimentum dictum mattis. 
                    Nullam id quam ut nisl laoreet finibus a vel ante. Ut scelerisque orci ut semper pellentesque.
                    Praesent ac eleifend libero. Integer eget fermentum felis. Sed posuere vel magna id auctor. 
                    Integer lacinia dolor ornare velit rhoncus aliquam. Quisque lobortis iaculis elit eu rutrum. 
                    Ut eget lacus in odio lobortis semper. Sed id sapien congue, dictum neque in, tempor nunc.
                    aca va texto bla bal bal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vulputate odio sed mattis.
                    Ut egestas sit amet justo id gravida. In nulla felis, consectetur a turpis quis, sagittis finibus enim. 
                    Donec sagittis ipsum a mauris feugiat consectetur. Curabitur condimentum dictum mattis. 
                    Nullam id quam ut nisl laoreet finibus a vel ante. Ut scelerisque orci ut semper pellentesque.
                    Praesent ac eleifend libero. Integer eget fermentum felis. Sed posuere vel magna id auctor. 
                    Integer lacinia dolor ornare velit rhoncus aliquam. Quisque lobortis iaculis elit eu rutrum. 
                    Ut eget lacus in odio lobortis semper. Sed id sapien congue, dictum neque in, tempor nunc.
                    aca va texto bla bal bal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vulputate odio sed mattis.
                    Ut egestas sit amet justo id gravida. In nulla felis, consectetur a turpis quis, sagittis finibus enim. 
                    Donec sagittis ipsum a mauris feugiat consectetur. Curabitur condimentum dictum mattis. 
                    Nullam id quam ut nisl laoreet finibus a vel ante. Ut scelerisque orci ut semper pellentesque.
                    Praesent ac eleifend libero. Integer eget fermentum felis. Sed posuere vel magna id auctor. 
                    Integer lacinia dolor ornare velit rhoncus aliquam. Quisque lobortis iaculis elit eu rutrum. 
                    Ut eget lacus in odio lobortis semper. Sed id sapien congue, dictum neque in, tempor nunc.
                </p>
                <PhotoFrame img={Photo} rotation={"-15"} ></PhotoFrame>
            </section>
        </section>
    )
}

export default AboutMe;