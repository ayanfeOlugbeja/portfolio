import Linked from './../components/Linked'

const Contact = () => {
  return (
    <div>
      {/* Social Links Sidebar */}
      <div className='absolute left-2 top-[400px] hidden lg:block'>
        <Linked />
      </div>

      {/* Email Sidebar */}
      <div className='absolute right-2 rotate-90 top-[430px] hidden lg:block'>
        <a href='mailto:aiyedogbonabraham@gmail.com'>
          <p className='text-sm font-semibold h-[70px] w-[290px] text-center'>
            aiyedogbonabraham@gmail.com
          </p>
        </a>
      </div>

      {/* Main Contact Section */}
      <div className='contact-details mt-10 md:mt-16 mb-6 w-[80%] mx-auto md:w-[70%]'>
        {/* Heading for SEO */}

        {/* What's Next? */}
        <h3 className='text-xl text-center hidden md:block mt-2 mb-2 text-blue-500'>
          What’s Next?
        </h3>

        {/* Get In Touch Section */}
        <h2 className='text-2xl font-bold text-center text-gray-700 mb-4 md:text-3xl'>
          Get In Touch
        </h2>
        <p className='text-lg text-center md:text-xl font-normal px-4 lg:w-[500px] mx-auto'>
          I’m currently looking for new opportunities. My inbox is always open!
          Whether you have a question, want to collaborate, or just want to say
          hi, I’ll get back to you as soon as possible.
        </p>

        {/* Call To Action */}
        <div className='flex justify-center mt-10'>
          <a
            href='mailto:aiyedogbonabraham@gmail.com'
            className='px-6 py-4 border border-blue-500 text-blue-500 rounded-lg text-lg hover:bg-blue-500 hover:text-white transition duration-300'
          >
            Say Hello
          </a>
        </div>

        {/* Mobile Linked Component */}
        <section className='w-[80%] mx-auto mt-16 sm:block lg:hidden'>
          <Linked />
        </section>
      </div>

      {/* Footer */}
      <footer className='text-center text-sm mt-10 mb-6 lg:absolute lg:bottom-0 lg:left-10 lg:right-10'>
        <p className='hover:text-red-500'>
          Designed & Built by{' '}
          <a
            href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'
            className='text-blue-500 hover:underline'
          >
            Aiyedogbon Abraham
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Contact
