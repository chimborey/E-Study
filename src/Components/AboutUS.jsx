import React from 'react'
import A1 from '../assets/a1.jpeg'
const AboutUS = () => {
      return (
            <section className='w-full py-14 overflow-hidden'>
                  <main className='container mt-14'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                              {/* about-left */}
                              <div data-aos='fade-right' data-aos-delay='200' className='overflow-hidden w-full'>
                                    <img src={A1} alt="" className='sm:w-full sm:h-[430px] md:w-[5300px] md:h-[530px] rounded-lg shadow-[rgba(0,0,0,0.4)] hover:scale-110 duration-300 transition-all cursor-not-allowed' />
                              </div>


                              {/* about-right */}
                              <div className='flex flex-col items-start gap-4'>
                                    <h3 className='font-small' data-aos='fade-left' data-aos-delay='100'>about <span className='span-small'>us</span></h3>
                                    <p className='font-desc' data-aos='fade-left' data-aos-delay='300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea inventore accusantium, praesentium, impedit obcaecati modi aspernatur saepe quos quasi vero quod minima qui dicta. Consequuntur doloribus distinctio, earum dicta, beatae molestiae eligendi dolore delectus corrupti eaque laborum quae at. Voluptatum dolorem veniam voluptates minima laborum error!</p>

                                    <div data-aos='fade-up' data-aos-delay='400'>
                                          <button className='btn'>contact us</button>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default AboutUS