import React from 'react'

export const Website = (props) => {
    return (
        <div className='bg-teal-500 rounded-2xl'>
            <h2 className='text-lg text-white px-5 py-2'>{props.title}</h2>
            <div class="relative rounded-2xl bg-gradient-to-t from-teal-800 to-white">
                <img className='h-48 rounded-2xl object-cover mix-blend-multiply' src="phsite.png" alt="website image" />
                <svg className=' fill-white h-8 absolute bottom-4 right-24' viewBox="0 0 496 512"><path d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 0 0 0 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 0 1 126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 0 0 168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8 3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z" /></svg>
                <a className='text-xl text-white absolute bottom-4 right-4' href={props.source}>Source</a>
            </div>
        </div>
    )
}
