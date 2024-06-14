import React from 'react';

interface TextComponentProps {
    nome: string;
    quantidade: number;
    id: number;
}



const Item: React.FC<TextComponentProps> = ({nome, quantidade, id}) => {

    return(
    <a className="flex items-center justify-between  w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800" href="">
    <span className="mx-4 text-sm font-normal">{nome}
    </span>
    <span className="text-right ">{quantidade}
    </span>
    </a>
    )

}

export default Item