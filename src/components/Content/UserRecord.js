import React from 'react'
import { NavLink } from 'react-router-dom'
const UserRecord = (props) => {
  const { id, name, phone } = props
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <NavLink
          className="btn btn-success text-white mx-3"
          to={`/profile/${props.id}`}
        >
       View
        </NavLink>
        <NavLink className="btn btn-info text-white mx-5" to={`#`}>
          Edit
        </NavLink>
      </td>
    </tr>
  )
}

export default UserRecord
