import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const Loader = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dgreljx82' } });
  const logo = cld
    .image('logo')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(180).height(180)); // Transform the image: auto-crop to square
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-white'
      aria-label='Loading screen'>
      {/* Logo with animation */}
      <AdvancedImage cldImg={logo} />
    </div>
  );
};

export default Loader;
