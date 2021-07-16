import { Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import Box from "@material-ui/core/Box"
import useStyles from './styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useLojaContext } from "../../Context"

export type ProdutosIntem = {
    id: number
    imagem: string
    nome: string
    preco: number
}

const Produtos = ({ id, imagem, nome, preco }: ProdutosIntem) => {
    const classes = useStyles()
    const context = useLojaContext()

    const adicionarProdutos = () => {
        context.adicionarProduto({ id, imagem, nome, preco })
    }
    console.log(imagem)
    return (
        <Box className={classes.root} >
            <Box className={classes.imag}>
                <img
                    className={classes.image}
                    src={imagem || "https://t2.tudocdn.net/332029?w=143&h=304"}
                    alt="Foto da Mercadoria" />
            </Box>
            <Box className={classes.nome}>
                <Typography className={classes.name}>{nome}</Typography>
                <Typography>{`Preço do produto R$: ${preco.toFixed(2).toString().replace(".", ",")}`}</Typography>
            </Box>
            <Box>
                <Button
                    className={classes.buttonAdd}
                    variant='outlined'
                    startIcon={<AddShoppingCartIcon />}
                    onClick={adicionarProdutos}
                >
                    Adicionar no carrinho
                </Button>
            </Box>
        </Box>
    )
}

export default Produtos