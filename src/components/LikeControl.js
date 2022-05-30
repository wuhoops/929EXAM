import React from "react";
import { Button } from 'reactstrap';


function LikeControl(props){

    const [like, setLike] = React.useState(props.like);

    const increase = () =>{
        setLike(like+1)
    }

    return (
        <>{console.log(props.like)}
            <div>
                <Button className="mt-3 px-4"
                onClick={increase}
                    color="warning"
                >
                    <strong className="fs-4">Like</strong>
                </Button>
                <p className="fs-3">Currnet likes is: {like}</p>
                
            </div>
        </>
    )
}

export default LikeControl;