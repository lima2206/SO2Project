import React from 'react';

interface TextComponentProps {
    nome: string;
    foto: any
    descricao: string
    valor: number
    categoria: string
}

const Card: React.FC<TextComponentProps> = ({ nome, descricao, valor, categoria, foto }) => {
    return (

        <a
            href=""
            className="w-[1100px] h-[300px] grid grid-cols-3 grid-rows-3 gap-4 relative block bg-gray-100 overflow-hidden rounded-lg border border-gray-100 mt-3 mr-0 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>


            <div>
            <p className="mt-1 text-xs font-medium text-gray-600">Nome</p>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {nome}
                </h3>
            </div>

            <div className='col-start-1 row-start-2'>
            <p className="mt-1 text-xs font-medium text-gray-600">Categoria</p>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {categoria}
                </h3>
            </div>

            <div className='col-start-1 row-start-3'>
                <p className="mt-1 text-xs font-medium text-gray-600">Valor:</p>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    R${valor / 100}
                </h3>
            </div>



            <div className=" row-span-2 col-start-3 hidden sm:block sm:shrink-0">

                <img
                    alt="item_foto"
                    src={foto}
                    className="size-64 rounded-lg object-cover shadow-sm"
                />
            </div>

            <div className="mt-4 row-span-3 col-start-2 row-start-1">
                <p className="text-pretty text-l text-gray-500">
                    {descricao}
                </p>
            </div>


        </a>

    )

}

export default Card
