import React from 'react'

export default function UseEffect7() {
    const [windowWidthSize, setWindowWidthSize] = React.useState(0);
   
    React.useEffect(()=>{
        function handleResize(e){
            const {width} = document.body.getBoundingClientRect();
            setWindowWidthSize(Math.ceil(width))
        }
        window.addEventListener('resize', handleResize)
    },[])
    return (
        <h1>
        The window size {windowWidthSize} pixels
      </h1>
    )
}
