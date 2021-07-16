import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(3),
        boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.56)",
        marginBottom: theme.spacing(3),

    },
    imag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 19,
    },
    nome: {
        maxWidth: 300,
    },
    name: {
        marginBottom: theme.spacing(1),
        fontWeight: 600.
    },
    buttonRem: {
        fontSize: 12,
        borderColor: '#E12F2F',
        color: '#E12F2F',
    },
}))

export default useStyles