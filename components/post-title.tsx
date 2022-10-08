import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Heading as={'h1'} size={'2xl'} mb={6}>
      {children}
    </Heading>
  )
}

export default PostTitle
