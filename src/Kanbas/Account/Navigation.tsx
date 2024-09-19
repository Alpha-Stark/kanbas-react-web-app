import React from 'react'
import { Link } from 'react-router-dom'

function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br />
            <Link to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br />
            <Link to={`/Kanbas/Account/Profile`} > Profile </Link> <br />
        </div>
    )
}

export default AccountNavigation