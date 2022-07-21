import React,{Component} from "react";
import Logo from "./Logo";
import Search from "./Search";
import SocialLinks from "./SocialLinks";

class Navigation extends Component{
    render(){
        return(
            <div className="bg-light row pt-3">
                
                <Logo></Logo>
                <Search placeholder = 'Serach'></Search>
                <SocialLinks linkA = 'Facebook' linkB = 'Instagram' linkC = 'Whatsapp' linkD = 'Twitter'></SocialLinks>
            </div>
        )
    }
}
export default Navigation;