import { Avatar, TableRow } from '@mui/material'
import React from 'react'
import "./SuggFooter.css"

export const SuggFooter = () => {
    return (
        <div className='sugg__footer'>
            <TableRow>
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
            </TableRow>

            <TableRow >
                <div className="sugg">
                    <div className="suggestion__proposition">
                        <h5 className='message'>Suggestions pour vous </h5>
                        <button className="basculer__button"
                            type="submit"
                            onClick>Voirtout</button>
                    </div>
                </div>
            </TableRow>

            <TableRow>
                <div className="under__sugg">
                    <Avatar
                        className="user__avatarProp"
                        alt="Wadii"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 24, height: 24 }}
                    />
                    <h6>other user</h6>
                    <button className="basculer__button"
                        type="submit"
                        onClick>Basculer</button>
                </div>
            </TableRow>


            <TableRow>
                <div className="footer">
                    <p>À propo.sAide.Presse.API.Emplois.Confidentialité.</p>
                    <br />
                    <p>Conditions.Lieux.Comptes principaux.Hashtags.Langue
                        Français
                    </p>
                    <br />
                    <p>© 2022 INSTAGRAM PAR META</p>
                </div>
            </TableRow>

        </div>
    )
}
