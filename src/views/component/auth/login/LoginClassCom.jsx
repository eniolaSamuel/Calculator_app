import React from "react";

class LoginClassCom extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleEliteGuysOne(){
        return(
            <div>
                <p style={{color: 'black'}}> Cocoalate</p>
            </div>
        )
    }
    handleEliteGuysTwo(){
        return(
            <div>
                <p style={{color: 'black'}}> Eniola</p>
            </div>
        )
    }
    handleEliteGuysThree(){
        return(
            <div>
                <p style={{color: 'black'}}> Ariella</p>
            </div>
        )
    }
    handleEliteGuysFour(){
        return(
            <div>
                <p style={{color: 'black'}}> Mielle</p>
            </div>
        )
    }
    handleChange(e){
        this.setState({name:e.target.value})
    }

    render() {
        return(
            <div>
                {this.nameRendering()}
                <label> Name </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <div style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    fontSize: "larger",
                    height: '40%',
                }}>
                    {this.state.name}

                </div>
            </div>
        )
    }

    nameRendering(){
        const {name} = this.state
        if (
            name === "Cocoalate" ||
            name === "Eniola" ||
            name === "Mielle" ||
            name === "Ariella"
        )
            return <p> Hi {name}</p>
    }
}

export default LoginClassCom;