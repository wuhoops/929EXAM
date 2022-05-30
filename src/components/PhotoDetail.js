import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Modal, Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import FormControl from "./FormControl";
import LikeControl from "./LikeControl";
import InModal from "./InModal";

class PhotoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    renderPhoto() {
        const photo = this.props.photo;
        if (photo != null)
            return (
                <>
                    <Card onClick={this.toggleModal}>
                        Click photo to comment or see likes.
                        <CardImg top src={photo.image} alt={photo.name} />
                        <CardBody>
                            <CardTitle>{photo.name}</CardTitle>
                            <CardText>{photo.description}</CardText>
                        </CardBody>
                    </Card>
                    <Button
                         
                        color="danger"
                        onClick={this.toggleModal}
                    >
                        Click Me
                    </Button>
                    <Modal size="xl" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            Comment and like. 
                        </ModalHeader>
                        <ModalBody>
                            <InModal photo={this.props.photo} />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </Modal>
                </>
            );
    }

    render() {
        console.log(this.props.photo);
        const photo = this.props.photo;
        console.log(this.props);
        { console.log(photo) }
        return (
            <>  <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/gallery">Gallery</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{photo.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='row justify-content-evenly' >
                    <div className="col-12 col-xl-6 my-5">
                        {this.renderPhoto()}
                        {/* <LikeControl /> */}
                    </div>
                    {/* <div className="col-12 col-xl-6 my-5">
                        <FormControl />
                    </div> */}
                </div>
            </div>

            </>
        );
    }
}

export default PhotoDetail;