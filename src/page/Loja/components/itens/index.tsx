import Box from '@material-ui/core/Box'
import Produtos from './Produtos'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Item = {
    id: 133453126,
    title: string,
    price: number,
    picture: string,
}


const Itens = () => {

    const [itens, setItens] = useState<Item[]>([])

    useEffect(() => {
        async function getProdutos() {
            const retorno = await axios.get(
                "http://localhost:3000/products"
            )
            setItens(retorno.data)
        }

        getProdutos()

    }, [])

    return (
        <Box>
            {itens.map((item) =>
                <Produtos
                    key={item.id}
                    id={item.id}
                    imagem={item.picture}
                    nome={item.title}
                    preco={item.price} />
            )}

        </Box>
    )
}

export default Itens