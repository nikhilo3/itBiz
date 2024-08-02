import React from 'react'

function ContactUs() {
  return (
    <>
         <div className="bg-white px-[6rem] py-8 text-black mt-[9rem]">
            <div className="wrapper flex justify-around items-center">
                <div className="flex justify-end items-center flex-col">
                    <img width="64" height="64" src="https://img.icons8.com/wired/64/clock.png" alt="clock" />

                    <h5 className='font-bold text-3xl my-3'>Open Hours</h5>

                    <div className="flex flex-col text-black/75 leading-7">
                        <span>Mon-Fri: 9 AM – 6 PM</span>
                        <span>Saturday: 9 AM – 4 PM</span>
                        <span>Sunday: Closed</span>
                    </div>
                </div>

                <div className="flex justify-end items-center flex-col">
                    <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/marker--v2.png"
                        alt="marker--v2" />

                    <h5 className='font-bold text-3xl my-3'>Our Location</h5>

                    <div className="flex flex-col text-black/75 leading-7">
                        <span>Off 505 Kiran Arcade</span>
                        <span>Near Wonder wave Waterpark</span>
                        <span>Surat, Gujarat.</span>
                    </div>
                </div>

                <div className="flex justify-end items-center flex-col">
                    <img width="64" height="64" src="https://img.icons8.com/ios-filled/64/headset.png" alt="headset" />

                    <h5 className='font-bold text-3xl my-3'>Customer Support</h5>

                    <div className="flex flex-col text-black/75 leading-7">
                        <span>+91 9624753388</span>
                        <span>townycustomer@gmail.com</span>
                        <span>24x7 Customer Support</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs