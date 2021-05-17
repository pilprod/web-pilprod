// React
import React from 'react';
// API axios 
import axios from 'axios';
// Material-UI
import {
    makeStyles,
    styled,
    Typography,
    Button,
    TextField,
    Grid,
    Box,
} from '@material-ui/core';

const Input = styled(TextField)({
    width: '100%',
})

const ButtonOK = styled(Button)({
    width: '100%'
})

const Name = (props) => {
    return <Input
        id='name'
        name='name'
        type='text'
        label='Имя'
        variant='outlined'
        onChange={props.handleChange}
        required
    />
}

const Phone = (props) => {
    return <Input
        id='phone'
        name='phone'
        type='text'
        label='Номер телефона'
        variant='outlined'
        onChange={props.handleChange}
        required
    />
}

const Message = (props) => {
    return <Input
        id='message'
        name='message'
        type='text'
        label='Сообщение'
        variant='outlined'
        onChange={props.handleChange}
    />
}
const SubmitButton = (props) => {
    return <ButtonOK
        color='primary'
        size='large'
        variant='contained'
        type='submit'
        // onClick={props.onClick}
    >
        {props.buttonText}
    </ ButtonOK>
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            message: '',
            status: 'Отправить'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Event Change
    handleChange = event => {
        const field = event.target.id;
        if (field === 'name') {
            this.setState({name: event.target.value});
        } else if (field === 'phone') {
            this.setState({phone: event.target.value});
        } else if (field === 'message') {
            this.setState({message: event.target.value});
        }
    }
    // Event Send
    handleSubmit = async event => {
        event.preventDefault();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const formSend = '/form' + '?send=mail'
        const jsonBody = {
            contacts: {
                name: this.state.name,
                phone: this.state.phone,
            },
            message: this.state.message
        }
        const option = {
            method: 'POST',
            url: apiUrl + formSend,
            data: jsonBody
        }
        this.setState({status: "Одну минуту..."});
        axios(option)
            .then((res) => {
                if (res.data.success === true) {
                    // alert("Спасибо! Скоро я свяжусь с вами.");
                    this.setState({name: "", phone: "", message: "", status: "Спасибо! Скоро я свяжусь с вами."});
                } else if (res.data.success === false) {
                    // alert("Что-то пошло не так! Повторите попытку позже.");
                    this.setState({
                        name: "",
                        phone: "",
                        message: "",
                        status: "Что-то пошло не так! Повторите попытку позже."
                    });
                }
            });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <Box paddingBottom='15px'
                         align='center'
                         justifyContent='center'>
                        <Grid item xs={12} md={4}>
                            <Name handleChange={this.handleChange}/>
                        </Grid>
                    </Box>
                    <Box paddingBottom='15px'
                            align='center'
                            justifyContent='center'>
                        <Grid item xs={12}
                                 md={4}>
                            <Phone handleChange={this.handleChange}/>
                        </Grid>
                    </Box>
                    <Box paddingBottom='15px'
                        align='center'
                        justifyContent='center'>
                    <Grid item xs={12}
                             md={4}>
                        <Message handleChange={this.handleChange}/>
                    </Grid>
                </Box>
                    <Box paddingTop='15px'
                        align='center'
                        justifyContent='center'>
                    <Grid item xs={12} md={4}>
                        <SubmitButton buttonText={this.state.status}/>
                    </Grid>
                    </Box>
                </form>
            </React.Fragment>
        )
    }
}

const FormComponent = () => {

    const useStyles = makeStyles((theme) => ({
        form: {
            width: '100%',
            justifyContent: 'center',
            paddingBottom: theme.spacing(12)
        },
        title: {
            textAlign: 'center',
            padding: theme.spacing(8, 0, 6),
        },
        inputWrap: {
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                marginBottom: theme.spacing(4),
            },
            align: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.form}>
                <div className={classes.title}>
                    <Typography component="h7" variant="h4" align="center" gutterBottom>
                        Форма для связи
                    </Typography>
                </div>
                <Box className={classes.inputWrap}>
                    <Grid item container spacing={8}>
                        <Grid item xs={12} md={12}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    )
}

export default FormComponent;