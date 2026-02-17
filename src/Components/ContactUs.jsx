import React from 'react'

const ContactUs = () => {
      return (
            <section className='w-full bg-purple-200 py-14 overflow-hidden'>
                  <main className='mt-12 container'>
                        {/* Contact-Us */}
                        <div className='flex flex-col items-center gap-7'>
                              {/* Reviews-center */}
                              <h3 className='font-small' data-aos='zoom-in' data-aos-delay='100'>contact <span className='span-small'>us</span></h3>

                              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                    {/* Reviews-left */}
                                    <div>
                                          <form className='flex flex-col items-center '>
                                                {/* form01 */}
                                                <div className='flex flex-col items-start mb-4' data-aos='fade-up' data-aos-delay='200'>
                                                      <label htmlFor="name" className='form'>your name</label>
                                                      <input type="text" name="name" placeholder='Enter your name'className='input'/>
                                                </div>

                                                {/* form02 */}
                                                <div className='flex flex-col items-start mb-4' data-aos='fade-up' data-aos-delay='400'>
                                                      <label htmlFor="name" className='form'>your email</label>
                                                      <input type="text" name="name" placeholder='Enter your email'className='input'/>
                                                </div>

                                                {/* form03 */}
                                                <div className='flex flex-col items-start mb-4' data-aos='fade-up' data-aos-delay='600'>
                                                      <label htmlFor="name" className='form'>your number</label>
                                                      <input type="text" name="name" placeholder='Enter your number'className='input'/>
                                                </div>
                                          </form>

                                          <div data-aos='fade-up' data-aos-delay='800'>
                                                <button className='btn mx-auto'>send message</button>
                                          </div>
                                    </div>

                                    {/* Reviews-right*/}
                                    <div data-aos='fade-left' data-aos-delay='100' className='overflow-hidden'>
                                          <img src="https://www.sung.de/sites/default/files/styles/large/public/technical_support_services.jpg?itok=1pk6lMRD" alt="" className='sm:w-full sm:h-[430px] md:w-[530px] md:h-[330px] rounded-lg shadow-[rgba(0,0,0,0.4)] hover:scale-110 duration-300 transition-all cursor-not-allowed'/>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default ContactUs