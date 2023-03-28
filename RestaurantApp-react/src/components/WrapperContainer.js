import React from 'react'

function ContainerWrapper(props) {
  return (
    <div className='container'>{props.children}</div>
  )
}

export default ContainerWrapper