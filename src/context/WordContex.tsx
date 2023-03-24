import { useState, createContext, ReactElement } from "react";

type ContextType = {
    word: string,
    setWord: React.Dispatch<React.SetStateAction<string>>,
    wrongGuesses: number,
    setWrongGuesses: React.Dispatch<React.SetStateAction<number>>
}

export const WordContext = createContext<ContextType>({} as ContextType)

type ChildrenProps = {
    children?: ReactElement | ReactElement[] | undefined
}

const WordProvider = ( { children }: ChildrenProps) => {
    const [word, setWord] = useState('')
    const [wrongGuesses, setWrongGuesses] = useState(0)
    return (
        <WordContext.Provider value={{
            word,
            setWord,
            wrongGuesses,
            setWrongGuesses
        }}>
            {children}
        </WordContext.Provider>
    )
}
export default WordProvider