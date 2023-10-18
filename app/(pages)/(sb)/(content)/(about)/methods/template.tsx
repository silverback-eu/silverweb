import FlowProvider from '@/components/provider/FlowProvider'
import React, { Fragment } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
        <FlowProvider>
        {children}
        </FlowProvider>
    </Fragment>
  )
}
