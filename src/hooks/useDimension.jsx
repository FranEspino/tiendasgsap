import React from 'react'

export function useDimension() {
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    
    React.useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        }
    
        window.addEventListener('resize', handleResize)
    
        handleResize()
    
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return { width, height }


}
