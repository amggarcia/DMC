import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, AppBar, MenuItem ,Menu, Drawer } from "@material-ui/core";
import MenuIcon  from '@material-ui/icons/Menu';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import SideBar from './SideBar';

class MenuBar extends React.Component
{
  state = {anchorEl : null, drawerOpen : false}; 
  handleMenu = event => {
    this.setState({anchorEl : event.currentTarget});
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  toggleDrawer = (open) => () => {
    this.setState({drawerOpen  : open});
  }
    render()
    {
    const {anchorEl , drawerOpen}  = this.state;
      console.log(drawerOpen);
      const open = Boolean(anchorEl);
    
        return( 
            <div >
            <AppBar>
                <Toolbar>
                    <IconButton onClick={this.toggleDrawer(!drawerOpen)} color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{flexGrow:1}}>DMC WebApp</Typography>
                    <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
             <div>
              <Drawer open={drawerOpen} onClose={this.toggleDrawer(false)}>
                  <div
                    tabIndex={0}
                    role="button"
                  >
                  <SideBar></SideBar>
                  </div>
              </Drawer>
            </div>
            </div>
        );
    }

}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default MenuBar;