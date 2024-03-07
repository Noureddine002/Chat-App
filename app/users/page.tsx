'use client'

import { signOut } from "next-auth/react"

const Users = () => {
  return (
    <div>
      Hello users !
      <br />
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}

export default Users