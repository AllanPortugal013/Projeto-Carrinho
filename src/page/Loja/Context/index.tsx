import { createContext, PropsWithChildren, useContext, useState } from 'react'
import Produtos, { ProdutosIntem } from '../components/itens/Produtos'

type LojaContextValues = {
    produtos: ProdutosIntem[]
    adicionarProduto(produto: ProdutosIntem): void
    removerProduto(id: number): void
    quantidadeProdutos: number
}

export const LojaContext = createContext<LojaContextValues>({} as LojaContextValues)

const LojaProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [produtos, setProdutos] = useState<ProdutosIntem[]>([])

    const adicionarProduto = (produto: ProdutosIntem) => {
        if (!produtos.some((_produto) => _produto.id === produto.id)) {
            setProdutos(prevProdutos => [...prevProdutos, produto])
        }
    }

    const removerProduto = (id: number) => {
        const listaProdutos = produtos.filter((produto) => produto.id !== id)
        setProdutos(listaProdutos)
    }

    const valores: LojaContextValues = {
        produtos,
        adicionarProduto,
        removerProduto,
        quantidadeProdutos: produtos.length
    }
    return (
        <LojaContext.Provider value={valores}>
            {children}
        </LojaContext.Provider>
    )
}
export const useLojaContext = () => {
    const context = useContext(LojaContext)
    if (!context) {
        throw new Error()
    }
    return context
}

export default LojaProvider