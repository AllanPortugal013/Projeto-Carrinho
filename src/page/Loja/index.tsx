import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import usetSyles from './styles'
import Carrinho from './components/carrinho'
import Itens from './components/itens'
import LojaProvider from './Context'

const Loja = () => {
    const classes = usetSyles()

    return (
        <LojaProvider>
            <Box className={classes.root}>
                <Box className={classes.header}>
                    <Carrinho />
                </Box>
                <Box className={classes.content}>
                    <Typography variant='h5'>
                        Lista de Produtos
                </Typography>
                    <Itens />
                </Box>
            </Box>
        </LojaProvider>
    )
}
export default Loja