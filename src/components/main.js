import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './aboutme';
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Gallery from './Gallery';
import PhotoDetail from './PhotoDetail';
import Home from './HomeComponent';
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap'


const mapStateToProps = state => {
    return {
        photos: state.photos,
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const PhotoWithId = ({ match }) => {
            return (
                <>

                    <PhotoDetail photo={this.props.photos.filter((photo) => photo.id === parseInt(match.params.photoId, 10))[0]}
                        selectedPhoto={this.props.selectedPhoto} />
                    
                </>
            );
        };
        const Homepage = () => {
            return (
                <>{console.log(this.props)}
                    <Home
                        photo={this.props.photos.filter((photo) => photo.featured)[0]}
                    />
                </>

            )
        }


        return (
            <div>
                {console.log(this.props)}
                <Header />
                <Route exact path='/' component={Homepage} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route path='/gallery/:photoId' component={PhotoWithId} />
                <Route exact path='/home' component={Homepage} />
                <Route exact path='/gallery' component={() => <Gallery photos={this.props.photos} />} />
                <Footer />
            </div >

        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));