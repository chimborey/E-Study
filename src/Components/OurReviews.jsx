import React from 'react'
import R1 from '../assets/r1.webp'
import R2 from '../assets/r2.jpg'
import R3 from '../assets/r3.jpg'
const OurReviews = () => {
      return (
            <section className='w-full py-14 bg-pink-300 overflow-hidden'>
                  <main className='mt-12 container'></main>
                  {/* Our-Reviews */}
                  <div className='flex items-center flex-col'>
                        {/* Reviews-center */}
                        <h3 className='font-small' data-aos='zoom-in' data-aos-delay='100'>our <span className='span-small'>reviews</span></h3>

                        <div className='grid grid-cols-1 md:grid-cols-2 mt-7 mb-7 gap-12'>
                              {/* Reviews-left */}
                              <div data-aos='fade-up' data-aos-delay='200' className='flex flex-col justify-between items-center'>
                                    <div className='overflow-hidden w-[330px] hover:scale-95 duration-300 ease-linear rounded-lg bg-white px-4 py-7 cursor-not-allowed flex flex-col justify-between items-center'>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores nobis eos optio natus, vitae consequatur! Ducimus nihil vel debitis assumenda tempora vero quis quasi eos nobis.</p>
                                          <img src={R1} alt="" className='w-[70px] mt-4 h-[70px] rounded-full border-2 border-white'/>
                                    </div>
                              </div>

                              {/* Reviews-left-right */}
                              <div data-aos='fade-up' data-aos-delay='200'>
                                    <div className='overflow-hidden w-[330px] hover:scale-95 duration-300 ease-linear rounded-lg bg-white px-4 py-7 cursor-not-allowed flex flex-col justify-between items-center'>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores nobis eos optio natus, vitae consequatur! Ducimus nihil vel debitis assumenda tempora vero quis quasi eos nobis.</p>
                                          <img src={R2} alt="" className='w-[70px] mt-4 h-[70px] rounded-full border-2 border-white'/>
                                    </div>
                              </div>


                              {/* Reviews-right */}
                              <div data-aos='fade-up' data-aos-delay='200'>
                                    <div className='overflow-hidden w-[330px] hover:scale-95 duration-300 ease-linear rounded-lg bg-white px-4 py-7 cursor-not-allowed flex flex-col justify-between items-center'>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores nobis eos optio natus, vitae consequatur! Ducimus nihil vel debitis assumenda tempora vero quis quasi eos nobis.</p>
                                          <img src={R3} alt="" className='w-[70px] mt-4 h-[70px] rounded-full border-2 border-white'/>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default OurReviews