
import { useState } from 'react'

function Image({ src,
    alt,
    className }: {
        src: string,
        alt: string,
        className: string,
    }) {

    const [isLoading, setIsLoading] = useState(true)
    return (
        <img src={src} alt={alt} className={className + ` object-contain rounded-2xl duration-700 ease-in-out group-hover:opacity-75 ${isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
            }}`}
            onLoad={() => setIsLoading(false)} width={500} height={100} />

    )
}
export default Image