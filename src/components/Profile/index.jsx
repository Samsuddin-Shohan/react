import React from "react";
import Links from "./Links";
import Skills from "./Skills";
import Title from "./Title";
import './Profile.css'

class Profile extends React.Component{
    render(){
        return(
           <div className="container">
             <div className="w-75 mx-auto bg-light mt-5 p-4">
                <div className="">
                     <Title></Title>
                </div>
                <div>
                    <Skills skillA='Python' skillB='Javascript' skillC = 'Webpack'></Skills>
                </div>
                <div>
                     <Links linkA = 'Facebook' linkB = 'Linkeddin' linkC = 'Twitter'></Links>
                </div>
                
            </div>
           </div>
        )
    }
}
export default Profile;