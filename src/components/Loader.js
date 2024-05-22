import logo from './../images/logo.png'
const Loader = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full  bg-white z-50 flex items-center justify-center'>
      {/* <RotateLoader
        color='#0f3460'
        size={20}
        aria-label='Loading Spinner'
        data-testid='loader'
      /> */}
      <img src={logo} alt='AIYEDOGBON ABRAHAM' className='w-24 h-24' />
    </div>
  )
}

export default Loader
