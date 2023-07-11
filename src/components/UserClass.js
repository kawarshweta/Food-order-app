import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
    }

  
    render(){
        const {name, description} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default UserClass;