import {Button, Container, Navbar, Modal} from 'react-bootstrap'



function NavbarComponent(props){
    const subscription = props.option;



    
    return(
        <Navbar expand="sm">
            <Navbar.Brand href="/">Nerd Box</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button variant='success' >Buy</Button>
            </Navbar.Collapse>
        </Navbar>
    )
    
}

export default NavbarComponent;