import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'

const Profile = (props) => {
    console.log(props.user)
    return (
        <>
            <main className="p-5">
                <h3 className="mb-0">Personal Information</h3>
                <div className="flex">
                    <div className="p-headings">Name</div>
                    <div className="user-info">{ props.user.name }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Date of Birth</div>
                    <div className="user-info">{ props.user.birthday }</div>
                </div>

                <h3 className="mt-6 mb-0">Contact Information</h3>
                <div className="flex">
                    <div className="p-headings">Email</div>
                    <div className="user-info">{ props.user.email }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Phone Number</div>
                    <div className="user-info">{ props.user.phone }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Address</div>
                    <div className="user-info">{ props.user.address }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">City</div>
                    <div className="user-info">{ props.user.city }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Province</div>
                    <div className="user-info">{ props.user.province }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Zip Code</div>
                    <div className="user-info">{ props.user.zip_code }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">Country</div>
                    <div className="user-info">{ props.user.country }</div>
                </div>
                <div className="flex">
                    <div className="p-headings">BM$</div>
                    <div className="user-info">{ props.user.dollars }</div>
                </div>

                <h3 className="mt-6 mb-0">Change Password</h3>
                <div className="flex">
                    <div className="p-headings">Old Password</div>                    
                    <div className="input-group">
                        <input type="password" id="old_password" name="password" placeholder="Enter password" required />
                        <p className="error" id="passwordError"></p>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-headings">New Password</div>                 
                    <div className="input-group">
                        <input type="password" id="new_password" name="password" placeholder="Enter password" required />
                        <p className="error" id="passwordError"></p>
                    </div>
                </div>
                <div className="flex">
                    <div className="p-headings">Repeat Password</div>                 
                    <div className="input-group">
                        <input type="password" id="repeat_password" name="password" placeholder="Enter password" required />
                        <p className="error" id="passwordError"></p>
                    </div>
                </div>

                <div className="flex mt-6">
                    <Link to="/history" className="w-1/2 block mx-1"><button>Prizes History</button></Link>
                    <button type="submit" className="w-1/2 block mx-1">Save changes</button>
                </div>
            </main>
        </>
    )
}

export default Profile