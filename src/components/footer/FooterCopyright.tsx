import Link from 'next/link';
import React from 'react'

const FooterCopyright = () => {
  return (
    <div className='bg-transparent py-6 border-t border-lightBlue/30'>
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row justify-between text-sm text-gray-400">
        <p>Copyright © {new Date().getFullYear()} - All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-gray-300">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright