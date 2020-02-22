import React from 'react';
import {BrowserRouter,
        Link,
        Switch,
        Route} from 'react-router-dom';
import './Menu.scss';
import Contact from '../../sections/Contact/Contact';
import AboutMe from '../../sections/AboutMe/AboutMe';
import Projects from '../../sections/Projects/Projects';


const Menu = () => {
    const Sections=[
        {
            section: AboutMe,
            name: "About me",
            route: "/about-me"
        },
        {
            section: Contact,
            name: "Contact",
            route: "/contact"
        },
        {   section: Projects,
            name:"My projects",
            route: "/my-projects"
        }
    ];
    
    return (
        <div className="browser">
            <BrowserRouter>
                <div className="browser-menu">
                    {            
                    Sections.map(section=>{
                        return (<Link className="menu-item" to= {section.route}>{section.name}</Link>)
                    })}    
                </div>
                <Switch>
                    {
                        Sections.map(section=>{
                            return (<Route path= {section.route} 
                                    component={section.section}></Route>)
                        })
                    }
                </Switch>       
            </BrowserRouter>
        </div>
    )
}

export default Menu