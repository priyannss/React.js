import React, { useEffect, useState } from 'react'

const ResizeWindowComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <h1>
            Window width: {windowWidth}
        </h1>
    )
}

export default ResizeWindowComponent