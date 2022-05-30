import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';


class FormControl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            comment: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                comment: false,
                message: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        // alert('Current State is: ' + JSON.stringify(this.state));
        alert('User name : ' + this.state.firstname + '\nYour comment : ' + this.state.lastname);
        this.setState({
            firstname: '',
            lastname: '',
            touched: {
                firstname: false,
                lastname: false,
            }
          });
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname) { 
        const errors = {
            firstname: '',
            lastname: '',
        };

        if (this.state.touched.firstname && firstname.length < 1)
            errors.firstname = 'Please fill your User name.';

        if (this.state.touched.lastname && lastname.length < 1)
            errors.lastname = 'Please fill your Comment.';

        // const reg = /^\d+$/;
        // if (this.state.touched.telnum && !reg.test(telnum))
        //     errors.telnum = 'Tel. Number should contain only numbers';

        // if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        //     errors.email = 'Email should contain a @';

        return errors;
    }


    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row row-content justify-content-center"> 
                    <div className="col-10  justify-content-center">
                        <h3 className=''>Send us your Comments</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>User name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="User name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="firstname" md={2}>Rate your score.</Label>
                                <Col md={10}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option> </option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            
                            {/* <FormGroup row>
                                <Label htmlFor="message" md={2}>Your comment</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        placeholder="Comment here!!"
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('messgae')}
                                        valid={errors.message === ''}
                                        invalid={errors.message !== ''}
                                        ></Input>
                                        
                                </Col>
                            </FormGroup> */}
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="lastname" name="lastname"
                                    rows="12"
                                        placeholder="Comment"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormControl;