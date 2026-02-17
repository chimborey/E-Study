import React from 'react'
import H1 from '../assets/h1.jpg'
const Hero = () => {
  return (
    <section className='w-full py-14 bg-pink-300 overflow-hidden'>
      <main className='container overflow-hidden mt-12 flex-col flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden mb-7'>
                  {/* hero-left */}
                  <div className='flex flex-col items-start gap-5 mt-7 mb-12 max-w-[740px] overflow-hidden'>
                        <div className='flex flex-col items-center gap-3'>
                              <h3 className='font' data-aos='fade-up' data-aos-delay='100'>knowledge with <span className='span'>E-Study</span></h3>
                              <p className='font-desc' data-aos='fade-up' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam? Quia earum vel aliquid beatae illum facilis magni consectetur recusandae, eaque, id velit reiciendis perferendis. Exercitationem, sit modi dignissimos provident aspernatur ipsum omnis sequi ut recusandae pariatur error nisi fugiat. Voluptates maxime quis temporibus voluptatem impedit aliquid.</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300'>
                              <button className='btn'>contact us</button>
                        </div>
                  </div>

                  {/* hero-right */}
                  <div data-aos='fade-up' data-aos-delay='400' className='overflow-hidden w-full'>
                        <img src={H1} alt="" className='sm:w-full sm:h-[430px] md:w-[5300px] md:h-[530px] rounded-lg shadow-[rgba(0,0,0,0.4)] hover:scale-110 duration-300 transition-all cursor-not-allowed'/>
                  </div>
            </div>
      </main>
    </section>
  )
}

export default Hero