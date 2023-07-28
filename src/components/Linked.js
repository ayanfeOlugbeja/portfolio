import gitHub from './../images/github.svg';
import whatsapp from './../images/whatsapp.svg';
import twitter from './../images/twitter.svg';
import link from './../images/link.svg';
const Linked = () => {
  return (
    <div className='social-links mx-auto  h-[100px] w-[90%]  lg:w-[80%]  mb-0 flex items-center justify-center'>
      <ul className='flex  lg:flex-col flex-row justify-between items-end gap-3  md:gap-4 p-2 lg:w-[120px] lg:h-[190px]'>
        <li>
          {' '}
          <a href='https://github.com/ayanfeOlugbeja'>
            <img
              src={gitHub}
              alt='link to github'
              className=' h-14 w-14 lg:h-5 lg:w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            />
          </a>
        </li>
        <li>
          {' '}
          <a href='https://wa.me/message/GYJUYSL4SGQVH1'>
            <img
              src={whatsapp}
              alt='link to whatsapp'
              className=' h-14 w-14 lg:h-5 lg:w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            />
          </a>
        </li>
        <li>
          {' '}
          <a href='https://twitter.com/joshuaAAbraham?s=20'>
            <img
              src={twitter}
              alt='link to twitter'
              className=' h-14 w-14 lg:h-5 lg:w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/abraham-aiyedogbon-9a7095282'>
            <img
              src={link}
              alt='link to linkedIn'
              className=' h-14 w-14 lg:h-5 lg:w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Linked;
