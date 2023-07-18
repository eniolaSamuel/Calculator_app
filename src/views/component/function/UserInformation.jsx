import {useState} from "react";
import "../../../styles/component/function/UserInformation.css"

function UserInformation() {
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();
    const [email, setEmail] = useState();

    const handleFirstName = (e) => {
        const fNValue = e.target.value
        setFirstName(fNValue);
    }

    const handleSecondName = (e) => {
        const sNValue = e.target.value
        setSecondName(sNValue);
    }

    const handleEmail = (e) => {
        const eValue = e.target.value
        setEmail(eValue)
    }

    const handleSubmit = () => {
        alert(
            firstName + "\n" +
            secondName + "\n" +
            email
        )
    }


    return(
        <div className="main-form-div">
            <form about="" onSubmit={handleSubmit} >
                <input className="input" onChange={handleFirstName} placeholder="First Name" name="First Name" type="text" value={firstName}/>
                <input className="input" onChange={handleSecondName} placeholder="Second Name" name="Second Name" type="text" value={secondName}/>
                <input className="input" onChange={handleEmail} placeholder="Email" name="Email" type="text" value={email}/>
                <button id="button" type="submit">SUBMIT</button>
            </form>
        </div>
    )


}
export default UserInformation