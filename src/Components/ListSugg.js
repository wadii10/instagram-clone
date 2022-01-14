import React from 'react'
import UsersSugg from './UsersSugg'

const ListSugg = ({listSugg}) => {
    return (
        <div>
            {
                listSugg.map((el,i) => <UsersSugg itemSugg={el} key={i} />)
            }
        </div>
    )
}

export default ListSugg
