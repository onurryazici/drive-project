import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

export default function Logout() {
    const API_URL="http://host.docker.internal:3030";
    const token = localStorage.getItem("user-token")
    const history = useHistory();
    useEffect(() => {
        axios.get(`${API_URL}/api/secured/logout?token=${token}`)
        .then((response)=>{
            history.push("/login")
        }).catch(()=>{
            history.push("/login")
        })
    }, [])
    return ""
}
