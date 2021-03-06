import * as React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import { BookListContainer } from '../components/BookListContainer/BookListContianer'

export default function Index() {
  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom id='heading'>
          Bookish
        </Typography>
        <Link href='/about' color='secondary'>
          Go to the about page
        </Link>
        <BookListContainer />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
