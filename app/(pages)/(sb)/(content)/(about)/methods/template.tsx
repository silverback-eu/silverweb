import FlowProvider from '@/components/provider/FlowProvider'
import { Metadata } from 'next'
import React, { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'About',
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
        <FlowProvider>
        {children}
        </FlowProvider>
    </Fragment>
  )
}
