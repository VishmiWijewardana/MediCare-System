import React from 'react'

const Contact = () => {
  return (
    <section className="bg-blue-50">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <br/>
        <p className="mb-8 lg:mb-16  font-semibold text-center text-para">
          Do you have a technical problem?<span className="text-yellow-500"> Do you want to share your thoughts on a beta feature?</span> Inform us.
        </p>


        <form action="#" className="space-y-8 py-4">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input  type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="form__input mt-2"/>
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input  type="text"
                    id="subject"
                    placeholder="Tell us how we can support you."
                    className="form__input mt-2"/>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="Message" className="form__label">
              Your Message
            </label>
            <textarea rows="5"
                      type="text"
                      id="message"
                      placeholder="post a comment..."
                      className="form__input mt-2"/>
          </div>

          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>

      </div>
    </section>
  )
}

export default Contact