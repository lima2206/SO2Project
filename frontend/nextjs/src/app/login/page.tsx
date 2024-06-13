'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

      event.preventDefault()

      const formData = {
        email: email,
        password: password
      }
      
      const res = await fetch('http://localhost:5000/users/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
    });

    if (res.ok){
    const logado = localStorage.setItem("logado", "logado")
    router.replace('/')
    }
      // Here you can add your logic to handle form submission, e.g., making an API call to your backend
    };

    return(

        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Sistemas Operacionais 2</h1>
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
			</div>
			<div className="mb-4">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input value={password} onChange={(e) => setPassword(e.target.value)}type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				<a href="#"
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></a>
			</div>
			<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
		</form>
	</div>
        </div>

    )

}

export default Login