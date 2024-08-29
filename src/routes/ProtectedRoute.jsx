import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  return (
    props.isAuthenticated ?
    <Outlet /> : <Navigate to={"/login"} />
  )
}
