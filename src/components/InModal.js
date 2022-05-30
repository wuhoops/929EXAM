import React from "react";
import FormControl from "./FormControl";
import LikeControl from "./LikeControl";
const InModal = props => {
    return (
        <>{console.log(props)}
        <div className="row align-items-center ">
            <div className="col-12">
                <LikeControl like ={props.photo.like}/>
            </div>
            <div className="col-12">
                <FormControl /> 
            </div>
        </div>
        </>
    )
}

export default InModal;