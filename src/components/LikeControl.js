import React from "react";
import { Button } from 'reactstrap';


function LikeControl(props){

    const [like, setLike] = React.useState(props.like);

    const increase = () =>{
        setLike(like+1)
    }

    return (
        <>{console.log(props.like)}
            <div className="text-center">
                <Button className="mt-3 px-4"
                onClick={increase}
                    color="warning"
                >
                    <strong className="fs-4">Like</strong>
                </Button>
                <div className="fs-5">Current likes is:</div>
                <p className="fs-2 fw-bold">{like} likes</p>
                
            </div>
        </>
    )
}

export default LikeControl;