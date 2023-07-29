import Linked from './../components/Linked';

const Contact = () => {
  return (
    <div>
      <div className='absolute left-2 top-[400px] sm:hidden md:hidden lg:block hidden flex flex-col'>
        <Linked />
      </div>
      <div className='absolute right-2 rotate-90 top-[430px]   sm:hidden md:hidden lg:block hidden flex flex-col'>
        <a href='mailto:aiyedogbonabraham@gmail.com'>
          <p className='text-sm font-semibold h-[70px] w-[290px] text-center'>
            {' '}
            aiyedogbonabraham@gmail.com
          </p>
        </a>
      </div>

      <div
        className='contact-details mt-10 md:mt-16
       mb-6 sm:mt-14 w-[80%] mx-auto md:w-[70%]'>
        <h3
          className='text-xl text-center hidden md:block mb-4'
          style={{ color: '#3b82f6' }}>
          What's next?
        </h3>
        <h2 className='mx-auto font-bold text-3xl text-center text-gray-700 my-4 md:mt-4 md:text-4xl'>
          Get In Touch
        </h2>
        <div className='text-center lg:w-[500px]  w-full px-4 mx-auto '>
          <p className='text-lg p-2 text-center md:text-xl font-normal'>
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question, want to collaborate or just want
            to say hi, I’ll get back to you as soon as I can!
          </p>
        </div>
        <button
          className='lg:px-6 lg:py-5 px-5 py-4 bg-transparent  rounded-lg mt-14 mx-auto flex justify-center'
          style={{ border: '1px solid #3b82f6', color: '#3b82f6' }}>
          <a href='mailto:aiyedogbonabraham@gmail.com'> Say Hello</a>
        </button>

        <section className='w-[80%] mx-auto h-[80%] mt-24 sm:block lg:hidden md:block'>
          <Linked />
        </section>
      </div>
      <p className='text-sm lg:text-base md:text-base  mb-10  text-center sm:hidden lg:block lg:absolute lg:left-10 lg:right-10 lg:bottom-0 md:block md:absolute md:left-10 md:right-10 md:bottom-0 hover:text-red-500'>
        Designed & Built by <br />
        <a href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'>
          {' '}
          <span style={{ color: '#3b82f6' }}>Aiyedogbon A</span>
        </a>
      </p>
    </div>
  );
};

export default Contact;
