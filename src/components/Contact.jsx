import React from 'react'
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>
            Contact Us
            </h1>
            <form>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" required placeholder='John Doe' />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input type="text" required placeholder='john.doe@yahoo.com' />
                </div>
                <div>
                    <label>
                        Message
                    </label>
                    <input type="text" required placeholder='Enter Your Message' />
                </div>
                <button>Submit</button>
            </form>
        </main>
      
    </div>
  )
}

export default Contact
