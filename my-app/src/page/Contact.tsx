function ContactUs() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form className="flex flex-col gap-2 w-1/2 mx-auto">
                <input className="border border-gray-300 rounded-md p-2 block" type="text" placeholder="Name" />
                <input className="border border-gray-300 rounded-md p-2 block" type="email" placeholder="Email" />
                <input className="border border-gray-300 rounded-md p-2 block" type="text" placeholder="Message" />
                <input className="bg-blue-500 text-white rounded-md p-2 block"    type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default ContactUs;