import cn from 'classnames'
import { UniversalLink } from './universal-link'

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            style={{ height: '100%', maxHeight: '40vh' }}
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <UniversalLink href={`/docs/${slug}`} chakraLinkProps={{ 'aria-label': title }}>
                    {image}
                </UniversalLink>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
