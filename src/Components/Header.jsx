import React from 'react'
import {Card, Typography} from '@material-ui/core';

const Header = () => {
    return (
        <Card className="container">
            <div className="title">
                <Typography variant="h4">Welcome to Redux</Typography>
            </div>
        </Card>
    )
}

export default Header