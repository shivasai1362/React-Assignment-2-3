import React from 'react'
import './User.css'

const User = (props) => {
  return (
    <div className='card'>
        <div className='icon'>{props.users.icon}</div>
        <p className='name'>{props.users.name}</p>
        <p className='desc'>{props.users.desc}</p>
        <span className='prof'>{props.users.prof}</span>
    </div>
  )
}

export default User