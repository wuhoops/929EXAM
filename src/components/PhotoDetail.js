import React, {Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
class PhotoDetail extends Component {
    constructor(props) {
        super(props)
    }
    renderPhoto() {
        const photo = this.props.photo;
        if (photo != null)
            return (
                <Card>
                    <CardImg top src={photo.image} alt={photo.name} />
                    <CardBody>
                        <CardTitle>{photo.name}</CardTitle>
                        <CardText>{photo.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    render() {
        console.log(this.props.photo);
        const photo = this.props.photo;
        console.log(this.props);
        {console.log(photo)}
        return (
            <>  <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/gallery">Gallery</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{photo.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='row justify-content-evenly'>
                    <div className="col-12 col-md-6 my-5">
                        {this.renderPhoto()}
                    </div>
                    
                </div>

            </div>

            </>
        );
    }
}

export default PhotoDetail;