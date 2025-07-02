import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";

interface ContextType {
    showCreate: boolean,
    setShowCreate: Dispatch<SetStateAction<boolean>>
    images: string | null,
    setImages: Dispatch<SetStateAction<string | null>>,
    data: any[],
    setData: any,
}

export const Context = createContext<ContextType>({
    showCreate: false,
    setShowCreate: () => false,
    images: "",
    setImages: () => "",
    data: [],
    setData: () => []
})

export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [showCreate, setShowCreate] = useState<boolean>(false)
    const [images, setImages] = useState<string | null>("")
    const [data, setData] = useState([])

    return <Context.Provider value={{ showCreate, setShowCreate, images, setImages, data, setData }}>{children}</Context.Provider>
}