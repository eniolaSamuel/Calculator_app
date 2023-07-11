import React from 'react'
import "../../../styles/component/airConditioner/AirConditioner.css"


class AirConditioner extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            airConIsOn: false,
            productName: "COCO COOLER",
            temperature:23
        }


    }
    turnOn = () => {
        this.setState({airConIsOn: true});
    }

    turnOff = () => {
        this.setState({airConIsOn: false});
    }
    increaseTemperature = () => {
        if (this.state.airConIsOn) {
            this.setState((prevTemperature) => {
                const newTemperature = prevTemperature.temperature + 1;
                if (newTemperature <= 30) {
                    return {
                        temperature: newTemperature,
                    };
                }
                return null;
            });
        }
    };

    decreaseTemperature = () => {
        if (this.state.airConIsOn) {
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
    };

    render() {
        const {airConIsOn, productName, temperature} = this.state
        return(
            <>
            <div className="airConFrame">
                <h2 className="product_name">{productName}</h2>
                <div className="controls">
                    <p>Switch stat: {airConIsOn ? "On" : "Off"}</p>
                    <p>{temperature}°C</p>
                </div>
            </div>
                <div className="remoteFrame">
                    <div className="grey_border_of_temp">
                        <div className="main_temp_div">
                            <p>{temperature}°C</p>
                        </div>
                    </div>
                    <button className="switch" onClick={this.turnOn}> On </button>
                    <button className="switch" onClick={this.turnOff}> Off </button>

                    <button className="arrowUp" onClick={this.increaseTemperature}>(^)</button>
                    <button className="arrowDown" onClick={this.decreaseTemperature}> (v) </button>
                </div>
            </>
        );
    }

}
export default AirConditioner;