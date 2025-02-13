import RegisterButton from './RegisterButton'

function Hero() {
  return (
    <div className="h-screen bg-black relative w-full">

      <video src='./bg-video.webm' className='h-full w-full object-cover' autoPlay muted loop />
      <img
        src='./noise-2.gif'
        className='absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none'
      />


      <h1 className=' md:hidden w-full font-monument text-[36px] md:text-6xl lg:text-7xl font-bold leading-9 text-white mix-blend-difference mb-8 absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <p className='text-sm uppercase tracking-widest  text-white text-center mb-4'>
          Department of ECE
        </p>
        FRACTALS & I`VENOR '25
        <h3 className='text-xl font-normal tracking-widest mt-5'>
          FEB 27 - 28
        </h3>
      </h1>

      <h1 className='hidden md:block font-monument text-[24px] md:text-6xl lg:text-7xl font-bold leading-7 md:leading-19 lg:text-[80px] text-white mix-blend-difference mb-8 absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <p className='text-sm font-light uppercase tracking-widest  text-white text-center mb-2'>
          Department of Electronics & Communication engineering
        </p>
        FRACTALS & I`VENOR '25
        <div>
          <h3 className='text-4xl tracking-widest py-5 mb-8 '>
            FEB 27 - 28
          </h3>
        </div>
      </h1>
      <div className='absolute top-[55%]  md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-8'>
        <RegisterButton />
      </div>

    </div>
  )
}

export default Hero