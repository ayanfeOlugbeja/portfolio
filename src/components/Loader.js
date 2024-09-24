import logo from './../images/logo.png';

const Loader = () => {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-white'
      aria-label='Loading screen'>
      {/* Logo with animation */}
      <img
        src={logo}
        alt='AIYEDOGBON ABRAHAM'
        className='w-24 h-24 animate-spin-slow'
      />
    </div>
  );
};

export default Loader;
