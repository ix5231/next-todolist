import * as React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'TodoList',
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </Head>
    {children}
  </Container>
)

export default Layout
