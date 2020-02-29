import React from "react";
import {withRouter} from 'react-router-dom';
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import classes from './index.module.css'
class NavReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };

    render() {
        return (
            <div>
                <div className="deep-blue-skin">
                    <MDBNavbar className="blue lighten-1" expand="md" fixed="top" style={{color:'#32313B'}}>

                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <div
                                        onClick={this.handleToggleClickA}
                                        key="sideNavToggleA"
                                        style={{
                                            lineHeight: "10px",
                                            marginRight: "1em",
                                            verticalAlign: "middle"
                                        }}
                                    >
                                        <MDBIcon icon="bars" size="2x" className="mt-1" style={{color:'white'}}/>
                                    </div>
                                </MDBNavItem>

                            </MDBNavbarNav>
                            <MDBNavbarNav left>
                                <MDBNavItem
                                    className="d-none d-md-inline"
                                    onClick={() => {this.props.history.push('/home');}}

                                >
                                    <img className='img-fluid' style={{height:'44px'}} src='https://myedmaster.oss-us-east-1.aliyuncs.com/A-list Empire logo.png'/>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>
                <div style={{height:'53px'}}>

                </div>
            </div>

        );
    }
}
export const Nav = withRouter(NavReact);
