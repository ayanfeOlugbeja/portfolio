import { Cloudinary } from '@cloudinary/url-gen'
import { auto } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { AdvancedImage } from '@cloudinary/react'

const Loader = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dgreljx82' } })
  const logo = cld
    .image('logo')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(120).height(120)) // Transform the image: auto-crop to square

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-white'
      role='status'
      aria-label='Loading screen'
    >
      <div className='relative flex flex-col items-center'>
        <AdvancedImage
          cldImg={logo}
          className='transition-opacity duration-1000 ease-in-out'
          alt='Loading...'
        />
        <div className='mt-8 flex space-x-3'>
          <div className='w-2 h-2 bg-black rounded-full animate-[bounce_0.8s_infinite_0s]' />
          <div className='w-2 h-2 bg-black rounded-full animate-[bounce_0.8s_infinite_0.2s]' />
          <div className='w-2 h-2 bg-black rounded-full animate-[bounce_0.8s_infinite_0.4s]' />
        </div>
      </div>
    </div>
  )
}

export default Loader
