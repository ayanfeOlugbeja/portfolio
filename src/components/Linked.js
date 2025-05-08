import gitHub from './../images/github.svg'
import whatsapp from './../images/whatsapp.svg'
import twitter from './../images/twitter.svg'
import link from './../images/link.svg'

const Linked = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ayanfeOlugbeja',
      icon: gitHub,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/message/GYJUYSL4SGQVH1',
      icon: whatsapp,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/joshuaAAbraham?s=20',
      icon: twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aiyedogbon',
      icon: link,
    },
  ]

  return (
    <nav className='social-links' aria-label='Social media links'>
      <ul className='flex lg:flex-col flex-row gap-6 items-center'>
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit my ${social.name} profile`}
              className='group relative p-3 inline-flex items-center justify-center hover:bg-gray-50 rounded-full transition-all duration-300 ease-in-out'
            >
              <img
                src={social.icon}
                alt=''
                className='h-5 w-5 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out'
                loading='lazy'
              />
              <span className='absolute -right-2 -top-2 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Linked
