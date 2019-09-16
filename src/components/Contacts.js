import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import paperTexture from "../assets/images/paperTexture.jpg";
import axios from 'axios';

export default class SimpleFormExample extends React.Component {
    state = {
        formData: {
            message: '',
            name: '',
            email: '',
        },
        submitted: false,
    }


    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        axios.post('https://formcarry.com/s/Zu0f-r39Ydw',
            this.state.formData,
            {headers: {"Accept": "application/json"}}
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <div style={{backgroundImage: `url(${paperTexture})`}}>
                <div style={{
                        width: 0,
                        height: 0,
                        borderLeft: '.6rem solid transparent',
                        borderRight: '.6rem solid transparent',
                        borderBottom: '.6rem solid transparent',
                        borderTop: '.6rem solid #474441',
                        margin: '0 auto'
                }} />
                <div style={{ padding: 50}}>
                    <Container maxWidth="md">
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                        >
                            <Typography
                                variant="h3"
                                align='center'
                            >
                                Contacts
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="stretch"
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={8}
                                >
                                    <TextValidator
                                        label="Input a message here"
                                        multiline
                                        fullWidth
                                        rows="9"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        type='text'
                                        name="message"
                                        value={formData.message}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <TextValidator
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        onChange={this.handleChange}
                                        type='text'
                                        name="name"
                                        value={formData.name}
                                        validators={['required','matchRegexp:^.{3,}$']}
                                        errorMessages={['this field is required','this field requires at least 3 characters']}
                                    />
                                    <TextValidator
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        onChange={this.handleChange}
                                        type='email'
                                        name="email"
                                        value={formData.email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                    <Button
                                        style={{height: 50, marginTop: 12}}
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        value='Submit'
                                        disabled={submitted}
                                    >
                                        {
                                            (submitted && 'Your form is submitted!')
                                            || (!submitted && 'Submit')
                                        }
                                    </Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </Container>
                </div>
            </div>
        );
    }
}
