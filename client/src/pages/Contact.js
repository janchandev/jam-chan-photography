import React from 'react'

const Contact = () => {
  return (
    <div>
      <h3 className="text-headBlue font-merriweather text-4xl text-center mt-10" >Contact</h3>
      <div className=" border-black border-solid border-2">
        <form className="grid grid-cols-1 gap-3 place-items-center text-center font-encodeSans bg-sky-200 max-w-2xl border-black border-solid border-2" action={process.env.REACT_APP_FORMSPREE_ENDPOINT} method="POST">
          <label>
            Your name:
            <br />
            <input type="text" name="your name" className="rounded-md" />
          </label>
          <label>
            Your email:
            <br />
            <input type="email" name="your email" className="rounded-md"/>
          </label>
          <label>
            Your message:
            <br />
            <textarea name="your message" cols="40" rows="7" className="resize-none rounded-md"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact