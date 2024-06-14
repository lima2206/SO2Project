'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../components/navbar/Navbar"

const Cadastro = () => {

  interface FormData {
    nome: string;
    descricao: string;
    valor_compra: number;
    valor_venda: number;
    quantidade_estoque: number;
    estoque_min: number;
    categoria: string;
    local_estoque: string;
    info_extra: string;
    foto: string; // Assuming the file is handled elsewhere and provided as a string
  }




    const [formData, setFormData] = useState<FormData>({
      nome: '',
      descricao: '',
      valor_compra: 0,
      valor_venda: 0,
      quantidade_estoque: 0,
      estoque_min: 0,
      categoria: '',
      local_estoque: '',
      info_extra: '',
      foto: '' // Initialize file state with empty string or handle as needed
    });


  const onFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader()

    reader.onloadend = () => {
      const base64String = reader.result as string
      setFormData({...formData, foto: base64String})
      
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      try {
        console.log(formData)
        const response = await fetch('http://3.92.119.95:5000/items', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log('Produto criado com sucesso!');
          // Reset form fields or handle success UI as needed
        } else {
          console.error('Erro ao criar produto:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao enviar requisição:', error);
      }
    };
  



    return (

      <div>
        <Navbar text="Cadastro de Produtos" search="" setSearch={()=>{}} />
        <section className="bg-white dark:bg-gray-900 min-h-screen ">
          <div className="max-w-2xl px-4 py- mx-auto lg:py-16 ">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white mt-10">Cadastrar Item</h2>
            <form action="#" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

                <div className="sm:col-span-2">
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome: </label>
                  <input type="text" name="nome" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"                   defaultValue={formData.nome} onChange={handleChange}placeholder="Nome do Item" required={true} />
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="foto">Upload file</label>
                  <input name ="foto" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="foto" id="foto" onChange={(e: any) => onFileChange(e)} type="file" />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="foto">SVG, PNG, JPG (MAX. 800x400px).</p>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="descricao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                  <textarea name="descricao"id="descricao" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escreva a descrição do Item aqui..." defaultValue={formData.descricao} onChange={handleChange}></textarea>
                </div>

                <div className="w-full">
                  <label htmlFor="valor_compra" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor de Compra</label>
                  <input type="number" name="valor_compra" id="valor_compra" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="R$150" defaultValue={formData.valor_compra} onChange={handleChange} required={true} />
                </div>

                <div className="w-full">
                  <label htmlFor="valor_venda" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor de Venda</label>
                  <input type="number" name="valor_venda" id="valor_venda" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="R$150" defaultValue={formData.valor_venda} onChange={handleChange} required={true} />
                </div>
                <div className="w-full">
                  <label htmlFor="quantidade_estoque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade em Estoque</label>
                  <input type="number" name="quantidade_estoque" id="quantidade_estoque" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Quantidade em Estoque" defaultValue={formData.quantidade_estoque} onChange={handleChange} required={true} />
                </div>

                <div className="w-full">
                  <label htmlFor="estoque_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estoque Mínimo</label>
                  <input type="number" name="estoque_min" id="estoque_min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Estoque Minimo" defaultValue={formData.estoque_min} onChange={handleChange} required={true} />
                </div>

                <div className="w-full">
                  <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                  <input type="text" name="categoria" id="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="R$(Porção / Bebida / Combo / Etc...)" defaultValue={formData.categoria} onChange={handleChange} required={true} />
                </div>

                <div className="w-full">
                  <label htmlFor="local_estoque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local do Estoque</label>
                  <input type="text" name="local_estoque" id="local_estoque" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nome do Estoque" defaultValue={formData.local_estoque} onChange={handleChange} required={true} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="info_extra" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Informações Extras</label>
                  <textarea id="info_extra"  name="info_extra"rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Descreva qualquer informação adicional sobre o Item aqui..." defaultValue={formData.info_extra} onChange={handleChange}></textarea>
                </div>
                <div className="flex items-center space-x-4">
                  <button type="submit" className="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Criar Item
                  </button>
                </div>

              </div>
            </form>
          </div>
        </section>
      </div>

    )

  }

  export default Cadastro