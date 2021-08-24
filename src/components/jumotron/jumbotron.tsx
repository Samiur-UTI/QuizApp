import React, { ReactElement } from 'react'
import {Paper,Container} from '@material-ui/core'
import { Link } from 'react-router-dom'
import CustomButton from '../custombutton/button'
import './jumbotron.scss'
interface Props {
    
}

export default function Jumbotron({}: Props): ReactElement {
    return (
        <Container>
            <div className="jumbotron">
                <Paper variant="outlined" square elevation={3}>
                    <div className="content-wrapper">
                        <span className="jumbotron-title">Want to check out you general knowledge?</span>
                        <p className='jumbotron-text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Link to='/freequiz'><CustomButton variant='contained' className='btn-jumbotron' color='primary' text='give a quick quiz!'/></Link>
                    </div>
                </Paper>
            </div>
        </Container>
    )
}
