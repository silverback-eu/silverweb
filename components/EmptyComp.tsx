import React, { Fragment } from 'react'

export default function EmptyComp({children}: {children: React.ReactNode}) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
