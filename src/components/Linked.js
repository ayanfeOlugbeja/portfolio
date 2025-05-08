import gitHub from './../images/github.svg'
import whatsapp from './../images/whatsapp.svg'
import twitter from './../images/twitter.svg'
import link from './../images/link.svg'

const Linked = () => {
  return (
    <div className='social-links mx-auto w-full lg:w-auto mt-4 lg:mt-0 flex justify-center lg:justify-start'>
      <ul className='flex lg:flex-col flex-row gap-4 items-center'>
        <li>
          <a
            href='https://github.com/ayanfeOlugbeja'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='hover:scale-110 transition-transform duration-300'
          >
            <img
              src={gitHub}
              alt='GitHub'
              className='h-8 w-8 lg:h-6 lg:w-6'
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <a
            href='https://wa.me/message/GYJUYSL4SGQVH1'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp'
            className='hover:scale-110 transition-transform duration-300'
          >
            <img
              src={whatsapp}
              alt='WhatsApp'
              className='h-8 w-8 lg:h-6 lg:w-6'
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/joshuaAAbraham?s=20'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='hover:scale-110 transition-transform duration-300'
          >
            <img
              src={twitter}
              alt='Twitter'
              className='h-8 w-8 lg:h-6 lg:w-6'
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/in/aiyedogbon'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='hover:scale-110 transition-transform duration-300'
          >
            <img
              src={link}
              alt='LinkedIn'
              className='h-8 w-8 lg:h-6 lg:w-6'
              loading='lazy'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Linked
