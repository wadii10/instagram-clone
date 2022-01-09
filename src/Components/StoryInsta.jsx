import { Avatar } from '@mui/material'
import React from 'react'
import "./StoryInsta.css"

export const StoryInsta = () => {
    return (
        <div className="story">
            <div className="story__avatar">
                <Avatar
                    alt="Wadii"
                    src="/static/images/avatar/1.jpg"
                />
                <h6>username</h6>
            </div>
        </div>
    )
}
