import axios from "axios"
import { useState } from "react"

const Register = (props) => {

    const [getName, setName] = useState('')
    const [getBirthday, setBirthday] = useState('')
    const [getPhone, setPhone] = useState('')
    const [getAddress, setAddress] = useState('')
    const [getCity, setCity] = useState('')
    const [getProvince, setProvince] = useState('')
    const [getZipCode, setZipCode] = useState('')
    const [getCountry, setCountry] = useState('')
    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        axios({
            url: process.env.REACT_APP_API_PATH + 'user/register',
            method: 'POST',
            data: {
                name: getName,
                birthday: getBirthday,
                phone: getPhone,
                address: getAddress,
                city: getCity,
                province: getProvince,
                zipCode: getZipCode,
                country: getCountry,
                email: getEmail,
                password: getPassword
            }
        }).then(response => {
            console.log(response)
        })
    }

    return(
        <>
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-12 padding-bottom-0 padding-top-3">
                        <h3>Personal Information</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={getName} onChange={(e) => { setName(e.target.value) }} placeholder="Enter full name" />
                            <p className="error" id="nameError"></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="birthday">Date of Birth</label>
                            <input type="date" id="birthday" name="birthday" value={getBirthday} onChange={(e) => { setBirthday(e.target.value) }} placeholder="Enter birthday" />
                            <p className="error" id="birthdayError"></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 padding-bottom-0">
                        <h3>Contact Information</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" value={getPhone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter phone" />
                            <p className="error" id="phoneError"></p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" value={getAddress} onChange={(e) => { setAddress(e.target.value) }} placeholder="Enter address" />
                            <p className="error" id="addressError"></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" value={getCity} onChange={(e) => { setCity(e.target.value) }} placeholder="Enter city" />
                            <p className="error" id="cityError"></p>
                        </div>
                    </div>
                    <div className="col-6 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="province">Province</label>
                            <input type="text" id="province" name="province" value={getProvince} onChange={(e) => { setProvince(e.target.value) }} placeholder="Enter province" />
                            <p className="error" id="provinceError"></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" id="zip" name="zip" value={getZipCode} onChange={(e) => { setZipCode(e.target.value) }} placeholder="Enter zip" />
                            <p className="error" id="zipError"></p>
                        </div>
                    </div>
                    <div className="col-6 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" name="country" value={getCountry} onChange={(e) => { setCountry(e.target.value) }} placeholder="Enter country" />
                            <p className="error" id="countryError"></p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={getEmail} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                            <p className="error" id="emailError"></p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 padding-y-0">
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={getPassword} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" />
                            <p className="error" id="passwordError"></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group has-checkbox">
                            <input type="checkbox" id="checkbox1" name="checkbox" required defaultChecked />
                            <label htmlFor="checkbox1">I consent to the rules and regulations</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group has-checkbox">
                            <input type="checkbox" id="checkbox2" name="checkbox" required defaultChecked />
                            <label htmlFor="checkbox2">I consent to receiving promotional emails</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <input type="submit" className="btn btn-block" value="Submit" />
                    </div>
                    <div className="col-12 text-center">
                        <p className="font-sm margin-bottom-1">By submitting, you confirm that you are above the age of 16. <strong>BuyMore Dollar Inc.</strong> holds the right to revoke your entry for any reason.</p>
                    </div>
                </div>
            </form>
        </>
    )

}

export default Register