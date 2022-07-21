import React,{Component} from "react";

class SocialLinks extends Component{
    render(){
        const {linkA,linkB,linkC,linkD} = this.props;
        return(
            <div className="d-flex col justify-content-center align-items-center">
                <span className="mx-2 bg-success p-1 rounded">{linkA}</span>
                <span className="mx-2 bg-success rounded p-1">{linkB}</span>
                <span className="mx-2 bg-success p-1 rounded">{linkC}</span>
                <span className="mx-2 bg-success p-1 rounded">{linkD}</span>
            </div>
        )
    }
}
export default SocialLinks;