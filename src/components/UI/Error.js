import './Error.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

const Backdrop = () => {
    return (<div className='backdrop'/>)
};

const ModalOverLay = (props) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='footer'>
                <Button onClick={props.onConfirm}>Ok</Button>
            </footer>
        </Card>
    )
};

const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverLay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}

export default Error;