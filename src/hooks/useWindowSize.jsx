import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [WindowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return WindowSize


}
export default useWindowSize;