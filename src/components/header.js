import React, {Component} from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import styles from '../styles/header.module.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={styles.header}>
        <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-0 w-100 justify-content-between">
              <NavItem className="mb-0">
                <NavLink href="/" className={styles.headerNavLink}>Home</NavLink>
              </NavItem>
              <NavItem className="mb-0">
                <NavLink href="/about" className={styles.headerNavLink}>About Us</NavLink>
              </NavItem>
              <UncontrolledDropdown className="mb-0" nav inNavbar>
                <DropdownToggle nav caret className={styles.headerNavLink}>
                  Students
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Admission
                  </DropdownItem>
                  <DropdownItem>
                    School Catalog
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="mb-0">
                <NavLink href="/financial-aid" className={styles.headerNavLink}>Financial Aid</NavLink>
              </NavItem>
              <UncontrolledDropdown className="mb-0" nav inNavbar>
                <DropdownToggle nav caret className={styles.headerNavLink}>
                  Programs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Barber Program
                  </DropdownItem>
                  <DropdownItem>
                    Cosmetology Program
                  </DropdownItem>
                  <DropdownItem>
                    Manicure Program
                  </DropdownItem>
                  <DropdownItem>
                    Skin Care Specialist Program
                  </DropdownItem>
                  <DropdownItem>
                    Full Specialist Program
                  </DropdownItem>
                  <DropdownItem>
                    Instructor Program
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="mb-0">
                <NavLink href="/services" className={styles.headerNavLink}>Services</NavLink>
              </NavItem>
              <NavItem className="mb-0">
                <NavLink href="/va-benefits" className={styles.headerNavLink}>VA Benefits</NavLink>
              </NavItem>
              <NavItem className="mb-0">
                <NavLink href="/contact" className={styles.headerNavLink}>Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

