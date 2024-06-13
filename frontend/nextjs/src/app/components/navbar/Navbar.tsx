import React from 'react';

interface TextComponentProps {
    text: string;
}

const Navbar: React.FC<TextComponentProps> = ({text}) => {
    return (
    
        

<div className=" absolute z-10 flex flex-row items-center justify-between w-full p-2 bg-gray-600 shadow-xs">
    <div className="hidden ml-8 text-lg text-white md:flex">
        {text}
    </div>
    <span className="flex w-full h-10 text-sm border border-gray-300 rounded-full cursor-pointer md:w-1/3">
        <input type="search" name="serch" placeholder="Search" className="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none"/>
    </span>
        <div className="flex flex-row-reverse ml-4 mr-4 text-white md:hidden">
            <button>
                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center hidden mr-8 md:flex">
        <a href="/" className="p-0.5 text-white rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">
                    Listagem
                </span>
                <img src = 'https://img.icons8.com/?size=100&id=774&format=png&color=000000' width="30" height="30" className="text-xl transition-colors duration-200">
                </img>
            </a>
            <a href="/cadastro" className="p-3">
                <span className="sr-only">
                    Tela de Cadastro
                </span>
                <img src = 'https://img.icons8.com/?size=100&id=25717&format=png&color=000000' width="30" height="30" className="text-xl transition-colors duration-200">
                </img>
            </a>
            <a href="/logout" className="">
                <img src = 'https://img.icons8.com/?size=100&id=26218&format=png&color=000000' width="2048" height="1792" className="w-8 h-8 mr-2 text-white hover:text-gray-100">
                </img>
            </a>
        </div>
    </div>



    )
}

export default Navbar