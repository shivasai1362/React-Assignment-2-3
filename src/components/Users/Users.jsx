import React from 'react'
import User from './User/User'
import { FaUserLarge } from "react-icons/fa6";
import './Users.css'
const Users = () => {
    let users = [
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
        {
            icon: <FaUserLarge />,
            name: "XXXXXX",
            desc: "XXXXXX",
            prof: <button>Profile</button>
        },
    ]

  return (
    <main>
        {users.map((user,index) => <User key={index} users={user}/>)}
    </main>
  )
}

export default Users