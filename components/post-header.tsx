import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import { Box } from '@chakra-ui/react'

type Props = {
    title: string
    coverImage: string
    date: string
    author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
    return (
        <Box mb={7}>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                {coverImage ? <CoverImage title={title} src={coverImage} /> : null}
            </div>
        </Box>
    )
}

export default PostHeader
