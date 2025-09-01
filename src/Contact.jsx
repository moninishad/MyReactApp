
function Contact() {
  return (
    <div>   
    <div className="text-center font-bold text-3xl my-5 text-blue-800">Contact Us</div>
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 font-semibold text-2xl mb-5">
      <ul>
        <li>Name </li>
        <input type="text" placeholder="Enter Your Name" className="border-2 border-blue-300 rounded-md p-3 my-2 w-full"/>
        <li>E-mail </li>
        <input type="text" placeholder="Enter Your E-mail" className="border-2 border-blue-300 rounded-md p-3 my-2 w-full"/>
        <li>Phone </li>
        <input type="text" placeholder="Enter Your Phone" className="border-2 border-blue-300 rounded-md p-3 my-2 w-full"/> 
      </ul>
      <button className="bg-blue-500 text-white rounded-md p-3 mt-4 mx-auto block">Submit</button>
    </div>
</div>
  )
}

export default Contact;
