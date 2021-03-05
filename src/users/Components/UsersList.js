import React from "react"
import "./UsersList.css"
import UserItem from "./UsersItem"


const UsersList = (props) => {
    if (props.items.length === 0)

        return <div className="centre">
            <h1>User not found</h1>
        </div>

    return (<ul>
        {props.items.map(user => (
            <UserItem key={user.id}
             id={user.id} 
             image={user.image}
              name={user.name} 
              placeCounter={user.places} />
        ))}
    </ul>)
}
export default UsersList