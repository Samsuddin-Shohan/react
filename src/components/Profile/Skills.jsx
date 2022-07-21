import React from "react";

class Skills extends React.Component{
    a=3;
    
    render(){
        const {skillA,skillB,skillC}=this.props;
        console.log(this.a);

        return(
            <div className="my-3">
                <h4 className="my-3">Skills</h4>
                <ul>
                    <li>{skillA}</li>
                    <li>{skillB}</li>
                    <li>{skillC}</li>
                </ul>
            </div>
        )
    }
}
export default Skills;