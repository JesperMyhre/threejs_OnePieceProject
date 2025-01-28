import { useEffect, useState } from "react";

const Fruits = () => {
    const [fruits, setFruits] = useState([])

    useEffect(() => {
        const fetchFruits = async () => {
            const res = await fetch('https://api.api-onepiece.com/v2/fruits/en')
            const data = await res.json()
            setFruits(data)
            console.log(data)
        }
        fetchFruits()
    }, [])

  return (
    <section className="w-full max-h flex flex-row justify-center items-center gap-4 bg-blue-600 py-2">
        {
            fruits.map(fruit => (
                <div key={fruit.id} className=" h-auto w-1/5 flex flex-col justify-between border-solid gap-5 border-2 border-blue-500 rounded-lg flex-wrap">
                    <h1 className="text-2xl font-bold">{fruit.name}</h1>
                    <img src={fruit.filename} alt={fruit.name} className="h-[300px] w-[300px]"/>
                    <p className="text-xl font-semibold">{fruit.desc}</p>
                </div>
            ))
        }
    </section>
  )
}

export default Fruits