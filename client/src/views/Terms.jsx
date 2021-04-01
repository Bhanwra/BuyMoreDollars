import { faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/Footer'
import logo from './../assets/images/logo.png'

const Terms = (props) => {
    return (
        <>
            <div className="flex flex-col bg-gradient-to-b from-white to-green-100">
                <div className="w-full">
                    <img src={logo} alt="Logo Image" className="logo my-6"/>
                </div>
                <div className="bg-white rounded-t-3xl py-8">
                    <div className="flex items-center px-8">
                        <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-green-700" />
                        <h2 className="text-2xl mx-3 font-semibold">Terms and Conditions</h2>
                    </div>
                    <div className="terms pl-8 pr-4 mr-4">
                        <h4 className="mb-3 mt-6 font-semibold">Privacy Policy</h4>
                        <p className="text-sm">Privacy Policy of our company explains, how we treat your personal data and protect your privacy when you use our services. While using our site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally, identifiable information may include, but is not limited to your name. You will ensure that at all times you use the services, the properties have a clearly labeled and easily accessible privacy policy that provides end users with clear and comprehensive information about cookies, device-specific information, location information and other information stored on, or collected from the end users’ devices in connection with the Services, including, as applicable, information about users’ options for cookie management. You will use commercially reasonable efforts to ensure that an end user gives consent to the storing and accessing of cookies and other aspects.</p>
                        <h4 className="mb-3 mt-6 font-semibold">Cookies</h4>
                        <p className="text-sm">We use cookies, and other technologies to recognise your browser or device, learn more about your interests, and provide you with essential features and services and for additional purposes which includes many other information. Cookies recognises you when you sign-in to use our services. This allows us to provide you with recommendations, display personalised content and recognise you as a Prime member. It also helps in improving security to your browser and preventing fraudulent activity. We use cookies to keep our supplication functioning and help us remember your preference to provide the best experience. Read our Privacy and cookies Policy. </p>
                        <h4 className="mb-3 mt-6 font-semibold">Copyrights</h4>
                        <p className="text-sm">We own or license all copyrights in the texts, images, photographs, graphics, user interface, and other content provided on the services, and the selection, coordination and arrangement of such content (whether by us or by you), to the full extent provided under the copyright laws of Canada. This mobile application game and its content is copyright of BuyMore Dollars Inc. - &copy; BuyMore Dollars Inc. 2021 All rights reserved. Any redistribution or reproduction of part or all of the contents in any form is prohibited other than printing or downloading to a local hard disk extracts for your personal and non-commercial use only. One may copy the content to individual third parties for their personal use, but only if we acknowledge the mobile application as the source.</p>
                        <h4 className="mb-3 mt-6 font-semibold">Age Restrictions</h4>
                        <p className="text-sm">The BuyMore Dollars Inc. Company is committed to protecting the privacy of children who plays the game or uses the mobile application. This Children’s online Privacy Policy explains our information collection, disclosure, and parental or any guardian consent practices with respect to information provided by children under the age of 16 (“child” or “children”), and uses terms defined in our general Privacy Policy. This policy outlines the company’s practices in the Canada regarding the children’s personal information.</p>
                        <h4 className="mb-3 mt-6 font-semibold">Chance of Winning and Prize Distribution</h4>
                        <p className="text-sm">The contest will remain online for 3 weeks. During this time users will be able to play once per 48 hours, if they have won or per 24 hours if they lose. The winning totally depends on the users, as it is all on the luck, that who is playing the game. If the user wins, they will be presented with a skill testing question. The questions must be a simple math question. If the question is answered correctly, their BuyMore Dollars will be added to the account associated with their name between 6 to 8 weeks from the time of their win. The user will be presented information congratulating them on their win, as well as the timing of the awarding of their prize.</p>
                        <h4 className="mb-3 mt-6 font-semibold">Opting out Communication</h4>
                        <p className="text-sm">Opting out of promotional, consumer policy and mobilization communications, newsletter and alerts. As marketing and sales communication channels have expanded, customers have developed clear preferences for when and how they want to receive content. Whether it’s generational, at a certain stage of the buyer’s journey, or for support, customers are now able to pull more levers to personalize when they receive text messages, emails, phone calls, and other multichannel communications. </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Terms