import React, {Component} from "react";

// eslint-disable-next-line no-undef
class EliteClass extends Component{
    /*airConIsOn = false;*/
    constructor(props){
        super(props);
        this.state = {
            isOn : false,
            temperature : 16,
            name : "Cocoa Cooler"
        }
        this.power = this.power.bind(this)
        this.increaseTemperature = this.increaseTemperature.bind(this)
        this.decreaseTemperature = this.decreaseTemperature.bind(this)

    }


    power(){
        this.setState((prevState) => ({
            isOn: prevState.isOn === false ? prevState.isOn === true : prevState.isOn === false
        }))
    }
    /*(displayTemperature(){
        if (this.isOn)
            return this.temperature
        else
            return "Off"
    }*/

    increaseTemperature(){
        if (this.state.isOn) {
            // this.setState((prevTemperature) => {
            //     const newTemperature = prevTemperature.temperature + 1;
            //     if (newTemperature <= 30) {
            //         return {
            //             temperature: newTemperature,
            //         };
            //     }
            //     return null;
            // });
            if (this.state.temperature <= 30){
                this.setState((prevState)=>({
                    temperature: prevState.temperature + 1
                }))
                console.log('nnnn --> ', this.state.isOn)
            }
        }
    }
    decreaseTemperature(){
        if (this.state.isOn) {
            this.setState((prevTemperature) => {
                const newTemperature = prevTemperature.temperature - 1;
                if (newTemperature >= 16) {
                    return {
                        temperature: newTemperature,
                    };
                }
                return null;
            });
        }
    }


    render() {
        const {isOn, name, temperature} = this.state
        return(
            <div>
                <p>{name}</p>
                <button onClick={() => this.setState((prevState) => ({
                    isOn: prevState.isOn === false ? prevState.isOn === true : prevState.isOn === false
                }))}> Power </button>
                <p>Switch stat: {isOn ? "On" : "Off"}</p>
                <p></p>
                <button onClick={this.increaseTemperature}> Temp+ </button>
                <p> stat:{temperature}°C</p>
                <button onClick={this.decreaseTemperature}> Temp- </button>
            </div>
        )
    }

}

export default EliteClass
/*module.exports = EliteClass*/
