import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg } from "reactstrap";

function RenderGal(props) {
    return(
        <>
        {props.photos.map((photo) => {{console.log(props.photos)}
                return (
                    <div className="  col-sm-6 col-xl-3 col-12 mb-5">
                        
                        <Link to={`/gallery/${photo.id}`} >
                            <Card>
                                <CardTitle>{photo.name}</CardTitle>
                                <CardImg src={photo.image} />
                            </Card>
                        </Link>
                    </div>

                )
            })
            }
        </>
    )
}

const Gallery = (props) =>{
    return(
        <>{console.log(props.photos)}
            <div className="container">
                <div className="row">
                    <RenderGal photos={props.photos} />
                </div>
            </div>
        </>
    )
}

export default Gallery;