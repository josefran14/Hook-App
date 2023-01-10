import React from "react"
//import { memo } from "react"

export const Small = React.memo((props) => {

  const {value} = props

  console.log("Me volvi a dibujar:(")

  return (
    <small>{value}</small>
  )
})
