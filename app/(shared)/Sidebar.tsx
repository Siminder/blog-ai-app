import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from "public/assets/ad-2.png"
import AboutPortfile from "public/assets/about-profile.jpg"

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
            <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
                Subscribe and Follow
            </h4>
            <div className='my-5 mx-5'>
                <SocialLinks isDark/>
            </div>
            <Subscribe />
            <div className='bg-wh-900 my-8'>
                <Image
                className='hidden md:block my-8 w-full'
                    style={{objectFit: 'cover'}}
                    src={Ad2}
                    alt='advert-2'
                    width={500}
                    height={1000}
                    placeholder='blur'
                />
            </div>
            <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
                About the Blog
            </h4>
            <div className='flex justify-center'>
            <Image
                style={{width:"500px", height: "250px", objectFit: 'cover'}}
                src={AboutPortfile}
                alt='about-profile'
                placeholder='blur'
             />
            </div>
            <h4 className=' py-3 px-5 text-wh-500  font-bold text-center'>
                Taylor 
            </h4>
            <p className='text-wh-500 text-center text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur hic sit. Debitis vero accusantium quasi harum perspiciatis. Nesciunt asperiores doloribus vitae, aspernatur saepe ducimus. Sit veritatis libero cum explicabo!
            </p>

    </section>
  )
}

export default Sidebar