'use client'
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import Item from "./components/item-list/Item-list";

const Home = () => {

    interface Item {
        id: number;
        nome: string;
        foto: string;
        descricao: string;
        valor_compra: number;
        valor_venda: number;
        quantidade_estoque: number;
        estoque_min: number;
        categoria: string;
        local_estoque: string;
        info_extra: string;
      }


    const [items, setItems] = useState<Item[]>([]);
    
    
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/items/'); // Replace with your API endpoint
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        fetchData();
    }, []);
    

    

return(

    <div>
    <Navbar text="Produtos Disponíveis"/>
    <div className="relative pt-16 h-screen overflow-y-scroll my-0 ml-0 shadow-lg lg:block w-1/4 z-8">
            <div className="h-full bg-white dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6"></div>
                <nav className="mt-6">
                    <div>
                        {items.map((item, index) => (
                            <Item key={index} nome={item.nome} quantidade={item.quantidade_estoque} id={item.id}></Item>
                        ))}

                    </div>
                </nav>
            </div>
        </div>
    </div>

)
}


export default Home