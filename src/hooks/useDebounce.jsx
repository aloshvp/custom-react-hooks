import { useEffect, useState } from "react";

const useDebounce = (value, delay, callback = () => { }) => {

    const [debouncedValue, setDebouncedValue] = useState()


    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value);
            callback()
        }, delay)
        return () => {
            clearTimeout(handler);
        }

    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;