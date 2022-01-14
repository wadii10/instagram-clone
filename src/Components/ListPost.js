import React from 'react'
import PostIns from './PostIns'

export const ListPost = ({listPost}) => {
    return (
        <div>
            {
                listPost.map((el,i)=><PostIns item={el} key={i} />)
            }
        </div>
    )
}
