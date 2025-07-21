import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DebouncedInput = () => {

    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const debouncedValue = useDebounce(inputText, 1000, () => { console.log("function call") });

    return (
        <>
            <p>{debouncedValue}</p>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type Something...."
            />
        </>
    )
}
export default DebouncedInput;