import { Avatar } from '@mui/material'
import React from 'react'
import "./UsersSugg.css"

const UsersSugg = ({ itemSugg }) => {
    return (
        <div className='under__suggList'>
            <div className="users">
                <Avatar
                    className="user__avatarProp"
                    alt="Wadii"
                    src={itemSugg.srcImage}
                    sx={{ width: 24, height: 24 }}
                />
                <h6>{itemSugg.usernameSugg}</h6>
            </div>
            <button className="sabonner__button"
                type="submit"
                onClick>S'abonner</button>
        </div>
    )
}

export default UsersSugg
