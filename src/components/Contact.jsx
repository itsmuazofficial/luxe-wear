import React,{useState,useEffect} from "react";

export default function Contact() {
  const [dataSave, setDataSave] = useState({
    name:"",
    email:"",
    message:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
   setTimeout(() => {
    setIsSubmitted(false)
   }, 3000);
  }, [isSubmitted]);
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h1 className="font-bold text-3xl md:text-4xl text-gray-900">
        Contact Us
      </h1>
      <p className="text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
        Have questions or need assistance? We'd love to hear from you. Get in
        touch with our team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-xl mt-3">
        <h2 className="text-xl font-bold text-gray-900">Email Us</h2>
        <a
          href="mailto:support@luxewear.com"
          className="text-gray-600 hover:text-black transition"
        >
          support@luxewear.com
        </a>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl mt-3">
        <h2 className="text-xl font-bold text-gray-900">Call Us</h2>
        <a
          href="tel:03405907228"
          className="text-gray-600 hover:text-black transition"
        >
          03405907228
        </a>
      </div>
      </div>
     
      <form className="max-w-xl mx-auto mt-10 flex flex-col gap-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100" onSubmit={(e) => {
      e.preventDefault();
      setIsSubmitted(false)
      if(!dataSave.name.trim()){
       setErrors({name:'Name is required'})
        return
      }
       if(!dataSave.email.trim()){
        setErrors({email:'Email is required'})
        return
      }
           if(!dataSave.message.trim()){
        setErrors({message:'Message is required'})
        return
      }
     setIsSubmitted(true)
      console.log(dataSave)
      setDataSave({
        name : "",
        email : "",
        message : ""
      })
      }}>
         {isSubmitted && <p className="font-bold text-center text-green-500 bg-green-100">Your message has been sent successfully!</p>}
        <h1 className="text-2xl font-bold text-gray-900 my-3">Send Us a Message</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
          <input
          value={dataSave.name}
          onChange={(e) =>{
            setDataSave({...dataSave,name:e.target.value})
            setErrors({name:"",})
          }}
            type="text"
            id="name"
            placeholder="Enter Your name"
            className="border  border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 rounded-lg w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label  htmlFor="email" className="text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            
          value={dataSave.email}
          onChange={(e) =>{
            setDataSave({...dataSave,email:e.target.value})
            setErrors({email:"",})
          }}
            type="email"
            id="email"
            placeholder="Enter Your email"
            className="border  border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 rounded-lg w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
          value={dataSave.message}
          onChange={(e) =>{
            setDataSave({...dataSave,message:e.target.value})
            setErrors({message:""})
          }}
          id="message"
            placeholder="Write Your message..."
            className="border  border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 min-h-32 resize-y rounded-lg w-full"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 rounded-md  hover:scale-95 w-full py-3 font-medium transition duration-300 hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
