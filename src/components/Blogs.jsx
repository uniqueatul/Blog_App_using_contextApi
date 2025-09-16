import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Blogs() {

    
    const {loading} = useContext(AppContext);
  return (
    <div>
        {
            loading ? (<Spiner/>) : (
                posts.length === 0 ?
                (
                    <div>
                        <p>No post Found </p>
                        
                         </div>
                ) : 
                (posts.map ((post) => (
                    <div>
                        <p>{post.title}</p>
                        <p>
                            By <span>{post.autor}</span> on <span>{post.category}</span>
                        </p>
                         </div>
                )))
            )
        }


    </div>
  )
}

export default Blogs