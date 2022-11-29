import { useState } from "react";
import { AiOutlineAppstoreAdd, AiOutlineCloseCircle } from "react-icons/ai"
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs"
import {
    InstantSearch,
    Pagination,
    RefinementList,
    SearchBox,
} from "react-instantsearch-dom";


const CustomNavbar = () => {

    const [topics, setTopics] = useState(false)

    const handleSetTopics = () => {
        setTopics(!topics)
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <div className=" flex gap-1 text-xl text-gray-500" >
                        <AiOutlineAppstoreAdd />
                        <h1>Typesense</h1>
                    </div> 
                    <div className="flex items-center">
                        <SearchBox />
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="text-gray-700">
                        {
                            topics ?
                                <>
                                    <button className="absolute right-0 pr-5 text-3xl" onClick={handleSetTopics}>
                                        <AiOutlineCloseCircle />
                                    </button>
                                    <RefinementList attribute="sector" className="flex flex-auto align-middle text-gray-700"/>
                                </>
                                : <button onClick={handleSetTopics} className="bg-sky-600 w-32 h-10 rounded-lg text-white "> Topics </button>
                        }

                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CustomNavbar