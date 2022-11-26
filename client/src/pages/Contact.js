import React from 'react'

const Contact = () => {
  return (
    <div>
      <h3 className="text-headBlue font-merriweather text-4xl text-center mt-10" >Contact</h3>
      <h5 className="text-darkOrange font-merriweather md:text-xl text-lg text-center mb-5 mx-2">For any questions about photoshoots, bookings, or general inquiries, <br />
      please send a message using the form below. </h5>
      <div className="flex justify-center mb-5">
        <form className="lg:px-32 lg:py-8 p-8 grid grid-cols-1 gap-3 place-items-center text-center font-encodeSans bg-seashore bg-cover bg-center " action={process.env.REACT_APP_FORMSPREE_ENDPOINT} method="POST">
          <label>
            Your name:
            <br />
            <input type="text" name="your name" placeholder="Enter your name"className="rounded-md px-1" required/>
          </label>
          <label>
            Your email:
            <br />
            <input type="email" name="your email" placeholder="Enter your email" className="rounded-md px-1" required/>
          </label>
          <label>
            Your message:
            <br />
            <textarea name="your message" placeholder="Enter your message" cols="40" rows="5" className="resize-none rounded-md px-1" required></textarea>
          </label>
          <button type="submit" className="bg-headBlue py-2 px-4 rounded-md text-white hover:bg-darkOrange duration-500">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact