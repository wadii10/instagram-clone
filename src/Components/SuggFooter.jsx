import { Avatar, TableRow } from '@mui/material'
import React from 'react'
import ListSugg from './ListSugg'
import "./SuggFooter.css"

export const SuggFooter = () => {

    const dataSugg = [
        {
          usernameSugg:"Nejahyengui",
          srcImage:"/images/avatar1.webp"
        },
        {
          usernameSugg:"oussemaWess",
          srcImage:"/images/avatar2.jpg"
        },
        {
          usernameSugg:"salma",
          srcImage:"/images/avatar3.webp"
        }
      ];

    return (
        <div className='sugg__footer'>
            
                <div className="up__sugg">
                    <Avatar
                        className="user__avatar"
                        alt="Wadii"
                        src="/static/images/avatar/1.jpg"
                    />
                    <h5>wadii..driss</h5>
                    <button className="basculer__button"
                        type="submit"
                        onClick>Basculer</button>
                </div>
            

            
                <div className="sugg">
                    <div className="suggestion__proposition">
                        <h5 className='message'>Suggestions pour vous </h5>
                        <button className="basculer__button"
                            type="submit"
                            onClick>Voirtout</button>
                    </div>
                </div>
            

            
                <div className="under__suggList">
                <ListSugg listSugg={dataSugg} />
                </div>
            


                <div className="footer">
                    <p>À propo.sAide.Presse.API.Emplois.Confidentialité.</p>
                    <p>Conditions.Lieux.Comptes principaux.Hashtags.Langue
                        Français
                    </p>
                    <br />
                    <p>© 2022 INSTAGRAM PAR META</p>
                </div>
            

        </div>
    )
}
