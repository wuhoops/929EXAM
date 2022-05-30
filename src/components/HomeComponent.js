import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from "reactstrap";

const RenderCard = (props) => {
    console.log(props);
    return (
        <Card>
            <CardImg src={props.item.image} alt={props.item.name} />
            <CardBody>
                <CardTitle className="fw-bold">{props.item.name}</CardTitle>
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );

}

const Home = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-evenly">
                <div className="col-12 col-lg-5 my-5">
                    <p className="fs-5 fw-bold">Featured Photo</p>
                    <RenderCard item={props.photo} />
                </div>
                <div className="col-12 col-lg-5 my-5">
                    <p className="fs-5 fw-bold">Breaking News</p>
                    <Card>
                        <CardImg src='/new.jpg' />
                        <CardBody>
                            <CardTitle className="fw-bold">929 Examination</CardTitle>
                            <CardText>Reminder: 929 Exam on Monday, 30 May 2022
                                Location: LX, Floor 11
                                Time: 9Am - 9PM</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;