import React from "react"
import UserList from "../Components/UsersList"

const Users = () =>{

    const USERS = [{
        id:'u1',
        name:"jdj",
        image :"https://1b-f.s3.eu-west-1.amazonaws.com/a/114830-DE80A3CC-A5F8-4B9A-8889-72E2AA8466F3-0-1522382920.gif",
        places:"4"

    }]

    return <UserList items ={USERS} />

}

export default Users