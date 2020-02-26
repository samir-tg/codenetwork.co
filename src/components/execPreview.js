import React from "react"
import ExecWindow from "./execWindow"

const ExecPreview = ({ execs }) => {
  let elms = execs.map(exec => {
    return <ExecWindow exec={exec} />
  })
  console.log(elms)
  return <div>{elms}</div>
}

export default ExecPreview
