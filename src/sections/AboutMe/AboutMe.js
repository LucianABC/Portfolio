import React from 'react';
import '../Section.scss';
import './AboutMe.scss';
import Title from '../../components/Title';
import Sticker from './Sticker/Sticker';
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame';
import Photo from '../../assets/foto2.jpg';
import Batman from '../../assets/Stickers/batman.png';
import Ravenclaw from '../../assets/Stickers/ravenclaw.png';
import Mike from '../../assets/Stickers/microphone.png';
import Nirvana from '../../assets/Stickers/nirvana.png';

const AboutMe = () => {
    const Stickers = [
        { img: Mike,
        top: "341px",
        left: "1057px",
        rotation:"27deg" 
        },
        { img: Batman,
            top: " 741px",
            left: "119px",
            rotation:"27deg"
        },
        { img: Ravenclaw,
            top: " 137px",
            left: "-78px",
            rotation:"-27deg"
        },
        
        { img: Nirvana,
            top: " -14px",
            left: "1063px",
            rotation:"45deg"
        }
    ]
    return(
        <section className="about-me section"> 
            {
            Stickers.map(sticker=> {
                return (<Sticker img={sticker.img} 
                                left={sticker.left}
                                 top={sticker.top}
                                rotation={sticker.rotation}>
                                 </Sticker>)  })
            }      
        
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