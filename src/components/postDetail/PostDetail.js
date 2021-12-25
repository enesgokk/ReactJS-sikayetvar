import React from 'react'
import { Link } from 'react-router-dom'

const PostDetail = ({postDetail}) => {
    return (
        <div>
            <ul className='bg-white p-3 rounded-md'>
                {postDetail && postDetail.map((detail,i)=>
                 <li key={i}>
                     <Link to={{ pathname: `/profile/${detail.userId}` }}>
                     <div className='mb-2'>
                         <span className='text-lg text-indigo-600 underline font-medium'>User:</span>
                         <span className='text-gray-500 pl-2'>{detail.userId}</span>
                    </div>
                    </Link>
                     <div className='mb-2'>
                         <span className='text-lg text-gray-800 font-medium' > Post Title:</span>
                         <span className='text-gray-500 pl-2' >{detail.title}</span> 
                    </div>
                     <div>
                         <span className='text-lg text-gray-800 font-medium'> Post Body:</span> 
                         <span className='text-gray-500 pl-2'>{detail.body}</span>
                    </div>
                 </li>
                )}
               
            </ul>
        </div>
    )
}

export default PostDetail
