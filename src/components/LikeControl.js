import React from "react";
import { Button } from 'reactstrap';

const LikeControl = () => {
    return (
        <>
            <div>
                <Button className="mt-3 px-4"
                    color="warning"
                >
                    <strong className="fs-4">Like</strong>
                </Button>
            </div>
        </>
    )
}

export default LikeControl;