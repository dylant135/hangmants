import { useState, createContext, ReactElement } from "react";

type ContextType = {
    word?: string,
    setWord: React.Dispatch<React.SetStateAction<string>>
}

export const WordContext = createContext<ContextType>({})

type ChildrenProps = {
    children?: ReactElement | undefined
}

const WordProvider = ( { children }: ChildrenProps) => {
    const [word, setWord] = useState('')
    return (
        <WordContext.Provider value={{
            word,
            setWord
        }}>
            {children}
        </WordContext.Provider>
    )
}
export default WordProvider