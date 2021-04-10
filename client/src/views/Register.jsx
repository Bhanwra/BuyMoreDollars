import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from './../assets/images/logo.png'


const Register = (props) => {

    const [getFields, setFields] = useState({
        name: {
            value: '',
            regEx: /^[a-z A-z-.]+$/,
            error: ''
        }, birthday: {
            value: '',
            regEx: /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
            error: ''
        }, phone: {
            value: '',
            regEx: /^[0-9]{10}$/,
            error: ''
        }, address: {
            value: '',
            regEx: /^[a-zA-Z0-9 ,.]+$/,
            error: ''
        }, city: {
            value: '',
            regEx: /^[a-z A-z-.]+$/,
            error: ''
        }, province: {
            value: '',
            regEx: /^[a-z A-z-.]+$/,
            error: ''
        }, zipCode: {
            value: '',
            regEx: /^[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[ ]?[0-9]{1}[A-Za-z]{1}[0-9]{1}$/,
            error: ''
        }, country: {
            value: '',
            regEx: /^[a-z A-z-.]+$/,
            error: ''
        }, email: {
            value: '',
            regEx: /^[a-z0-9.]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,}$/,
            error: ''
        }, password: {
            value: '',
            regEx: /^.{6,}$/,
            error: ''
        }
    })

    const submitForm = (e) => {
        e.preventDefault()

        setFields({
            name: {
                ...getFields.name,
                error: (getFields.name.regEx.test(getFields.name.value) == false) ? "Invalid" : ""
            }, birthday: {
                ...getFields.birthday,
                error: (getFields.birthday.regEx.test(getFields.birthday.value) == false) ? "Invalid" : ""
            }, phone: {
                ...getFields.phone,
                error: (getFields.phone.regEx.test(getFields.phone.value) == false) ? "Invalid" : ""
            }, address: {
                ...getFields.address,
                error: (getFields.address.regEx.test(getFields.address.value) == false) ? "Invalid" : ""
            }, city: {
                ...getFields.city,
                error: (getFields.city.regEx.test(getFields.city.value) == false) ? "Invalid" : ""
            }, province: {
                ...getFields.province,
                error: (getFields.province.regEx.test(getFields.province.value) == false) ? "Invalid" : ""
            }, zipCode: {
                ...getFields.zipCode,
                error: (getFields.zipCode.regEx.test(getFields.zipCode.value) == false) ? "Invalid" : ""
            }, country: {
                ...getFields.country,
                error: (getFields.country.regEx.test(getFields.country.value) == false) ? "Invalid" : ""
            }, email: {
                ...getFields.email,
                error: (getFields.email.regEx.test(getFields.email.value) == false) ? "Invalid" : ""
            }, password: {
                ...getFields.password,
                error: (getFields.password.regEx.test(getFields.password.value) == false) ? "Invalid" : ""
            }
        })

        // axios({
        //     url: process.env.REACT_APP_API_PATH + 'user/register',
        //     method: 'POST',
        //     data: {
        //         name: getName,
        //         birthday: getBirthday,
        //         phone: getPhone,
        //         address: getAddress,
        //         city: getCity,
        //         province: getProvince,
        //         zipCode: getZipCode,
        //         country: getCountry,
        //         email: getEmail,
        //         password: getPassword
        //     }
        // }).then(response => {
        //     console.log(response)
        // })
    }

    return(
        <>
            <form onSubmit={submitForm} className="p-4 grid grid-cols-2 gap-4">
                <div className="col-span-2 my-6">
                    <Link to="/"><img src={logo} className="logo" /></Link>
                    <p className="text-center">Sign up to earn a chance at winning <strong className="block">10,000 BuyMore Dollars</strong></p>
                </div>
                <div className="col-span-2">
                    <h3>Personal Information</h3>
                </div>
                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={getFields.name.value} onChange={(e) => { setFields({...getFields, name: {...getFields.name, value: e.target.value}}) }} placeholder="Enter full name" />
                        <p className="error" id="nameError">{getFields.name.error}</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="birthday">Date of Birth</label>
                        <input type="date" id="birthday" name="birthday" value={getFields.birthday.value} onChange={(e) => { setFields({...getFields, birthday: {...getFields.birthday, value: e.target.value}}) }} placeholder="Enter birthday" />
                        <p className="error" id="birthdayError">{getFields.birthday.error}</p>
                    </div>
                </div>

                <div className="col-span-2">
                    <h3>Contact Information</h3>
                </div>

                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={getFields.phone.value} onChange={(e) => { setFields({...getFields, phone: {...getFields.phone, value: e.target.value}}) }} placeholder="Enter phone" />
                        <p className="error" id="phoneError">{getFields.phone.error}</p>
                    </div>
                </div>
            
                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={getFields.address.value} onChange={(e) => { setFields({...getFields, address: {...getFields.address, value: e.target.value}}) }} placeholder="Enter address" />
                        <p className="error" id="addressError">{getFields.address.error}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={getFields.city.value} onChange={(e) => { setFields({...getFields, city: {...getFields.city, value: e.target.value}}) }} placeholder="Enter city" />
                        <p className="error" id="cityError">{getFields.city.error}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="input-group">
                        <label htmlFor="province">Province</label>
                        <input type="text" id="province" name="province" value={getFields.province.value} onChange={(e) => { setFields({...getFields, province: {...getFields.province, value: e.target.value}}) }} placeholder="Enter province" />
                        <p className="error" id="provinceError">{getFields.province.error}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="input-group">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="text" id="zip" name="zip" value={getFields.zipCode.value} onChange={(e) => { setFields({...getFields, zipCode: {...getFields.zipCode, value: e.target.value}}) }} placeholder="Enter zip" />
                        <p className="error" id="zipError">{getFields.zipCode.error}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="input-group">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" value={getFields.country.value} onChange={(e) => { setFields({...getFields, country: {...getFields.country, value: e.target.value}}) }} placeholder="Enter country" />
                        <p className="error" id="countryError">{getFields.country.error}</p>
                    </div>
                </div>
            
                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={getFields.email.value} onChange={(e) => { setFields({...getFields, email: {...getFields.email, value: e.target.value}}) }} placeholder="Enter email" />
                        <p className="error" id="emailError">{getFields.email.error}</p>
                    </div>
                </div>
            
                <div className="col-span-2">
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={getFields.password.value} onChange={(e) => { setFields({...getFields, password: {...getFields.password, value: e.target.value}}) }} placeholder="Enter password" />
                        <p className="error" id="passwordError">{getFields.password.error}</p>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="input-group has-checkbox">
                        <input type="checkbox" id="checkbox1" required defaultChecked />
                        <label htmlFor="checkbox1" className="checkbox-display">
                            <FontAwesomeIcon icon={faCheck} />
                        </label>
                        <label htmlFor="checkbox1">I consent to the <Link to="/terms">rules and regulations</Link></label>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="input-group has-checkbox">
                        <input type="checkbox" id="checkbox2" required defaultChecked />
                        <label htmlFor="checkbox2" className="checkbox-display">
                            <FontAwesomeIcon icon={faCheck} />
                        </label>
                        <label htmlFor="checkbox2">I consent to receiving promotional emails</label>
                    </div>
                </div>

                <div className="col-span-2 text-center">
                    <button type="submit" className="w-full block">Submit</button>
                </div>
                <div className="col-span-2 text-center">
                    <p className="text-xs margin-bottom-1">By submitting, you confirm that you are above the age of 16. <strong>BuyMore Dollar Inc.</strong> holds the right to revoke your entry for any reason.</p>
                </div>
            </form>
        </>
    )

}

export default Register