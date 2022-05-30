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
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


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
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/aboutme' component={AboutMe} />
                    <Route path='/gallery/:photoId' component={PhotoWithId} />
                    <Route path='/home' component={Homepage} />
                    <Route path='/gallery' component={() => <Gallery photos={this.props.photos} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div >

        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));