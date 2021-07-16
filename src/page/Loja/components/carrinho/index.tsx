import { Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { useState } from 'react';
import { useLojaContext } from '../../Context';
import Produtos from './Produtos';

const Carrinho = () => {
    const context = useLojaContext()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            <Badge
                badgeContent={context.quantidadeProdutos}
                color="secondary"
                onClick={handleOpen}
            >
                <LocalGroceryStoreIcon />
            </Badge>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth maxWidth="lg" >
                <DialogTitle id="simple-dialog-title"><strong>Carrinho</strong></DialogTitle>
                {context.produtos.map((produto) => (
                    <Produtos
                        key={produto.id}
                        id={produto.id}
                        imagem={produto.imagem}
                        nome={produto.nome}
                        preco={produto.preco}
                    />
                ))}
                <Typography color="secondary" >
                    {`Preço Total R$ ${context.produtos.map((produto) => produto.preco).reduce((precoTotal, precoAtual) => precoTotal + precoAtual, 0).toFixed(2).toString().replace(".", ",")}`}
                </Typography>
            </Dialog>
        </div>
    )
}

export default Carrinho