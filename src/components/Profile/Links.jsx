import React from "react";

class Links extends React.Component{
    render(){
        const {linkA,linkB,linkC}= this.props;
        return(
            <div className="my-3">
                <h4 className="my-3">Links</h4>
                <ul>
                    <li>{linkA}</li>
                    <li>{linkB}</li>
                    <li>{linkC}</li>
                </ul>
            </div>            
        )
    }
}
export default Links;