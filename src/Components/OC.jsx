import React from 'react'
import C1 from '../assets/c1.avif'
import C3 from '../assets/c3.webp'
import C4 from '../assets/c4.jpg'
import C5 from '../assets/c5.webp'
const OC = () => {
      return (
            <section className='w-full py-14 overflow-hidden bg-amber-200'>
                  <main className='mt-12 container'>
                        {/* Our-Courses */}
                        <div className='flex flex-col gap-4'>
                              {/* courses-center */}
                              <h3 className='font-small' data-aos='zoom-in' data-aos-delay='100'>our <span className='span-small'>courses</span></h3>

                              {/* courses */}
                              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto mt-7 md:-translate-x-5 sm:-translate-x-0'>
                                    {/* courses-left01 */}
                                    <div className='flex flex-col gap-4 md:w-[370px] overflow-hidden bg-white rounded-lg cursor-pointer hover:scale-110 duration-300 ease-linear' data-aos='fade-right' data-aos-delay='300'>
                                          <img src={C1} alt="" className='md:[230px] md:h:[230px] hover:scale-110 duration-300 transition-all' />
                                          <h3 className='font-small px-4'>web development</h3>
                                          <p className='font-desc px-4 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus similique rem laboriosam, laborum nostrum animi saepe sit eum nisi aliquid praesentium, commodi temporibus dolore autem cum porro itaque voluptas beatae repellendus aspernatur neque? Harum, unde deleniti?</p>
                                    </div>

                                    {/* courses-right02 */}
                                    <div className='flex flex-col  gap-4 md:w-[370px] overflow-hidden bg-white rounded-lg cursor-pointer hover:scale-110 duration-300 ease-linear' data-aos='fade-left' data-aos-delay='300'>
                                          <img src={C3} alt="" className='md:[230px] md:h:[230px] hover:scale-110 duration-300 ease-linear' />
                                          <h3 className='font-small px-4'>app development</h3>
                                          <p className='font-desc px-4 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus similique rem laboriosam, laborum nostrum animi saepe sit eum nisi aliquid praesentium, commodi temporibus dolore autem cum porro itaque voluptas beatae repellendus aspernatur neque? Harum, unde deleniti?</p>
                                    </div>

                                    {/* courses-lef03 */}
                                    <div className='flex flex-col   gap-4 md:w-[370px] overflow-hidden bg-white rounded-lg cursor-pointer hover:scale-110 duration-300 ease-linear' data-aos='fade-right' data-aos-delay='300'>
                                          <img src={C4} alt="" className='md:[230px] md:h:[230px] hover:scale-110 duration-300 ease-linear' />
                                          <h3 className='font-small px-4'>cyber security</h3>
                                          <p className='font-desc px-4 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus similique rem laboriosam, laborum nostrum animi saepe sit eum nisi aliquid praesentium, commodi temporibus dolore autem cum porro itaque voluptas beatae repellendus aspernatur neque? Harum, unde deleniti?</p>
                                    </div>

                                    {/* courses-right04 */}
                                    <div className='flex flex-col  gap-4 md:w-[370px] overflow-hidden bg-white rounded-lg cursor-pointer hover:scale-110 duration-300 ease-linear' data-aos='fade-left' data-aos-delay='300'>
                                          <img src={C5} alt="" className='md:[230px] md:h:[230px] hover:scale-110 duration-300 ease-linear' />
                                          <h3 className='font-small px-4'>graphic designer</h3>
                                          <p className='font-desc px-4 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus similique rem laboriosam, laborum nostrum animi saepe sit eum nisi aliquid praesentium, commodi temporibus dolore autem cum porro itaque voluptas beatae repellendus aspernatur neque? Harum, unde deleniti?</p>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default OC