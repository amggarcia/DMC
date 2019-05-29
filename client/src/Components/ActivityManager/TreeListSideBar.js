import React , { Component} from 'react';
import {List, ListItemText,ListItem,ListItemIcon, Divider, Collapse} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import StarBorder from '@material-ui/icons/StarBorder';


class SideBar extends Component
{
  constructor(props) {
    super(props);
    const collections = ['Hotels','Restaurants','Team building', 'Theme parties', 'Other'];
    const expands = [];
    collections.forEach(text => {
      expands[text] = false;
    });

    this.state = {
      expands: expands,
      collections : collections
    };
    
  }

    handleClick = (text) => () => {
      const currentState = this.state.expands;
      currentState[text] = !currentState[text];
      this.setState({expands : currentState});
    };
   
    render(){
      const {expands,collections} = this.state;
      const subCols = ['Cenas1','Cenas2','Cenas4']  
        return (        
        <div>
        <List>
          {collections.map((text, index) => (
            <div>
            <ListItem button key={text} onClick={this.handleClick(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            <Collapse in={this.state.expands[text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subCols.map((subcolText) =>(
                <ListItem button >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary={subcolText} />
              </ListItem>
              ) )}
            </List>
          </Collapse>
          </div>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
         </div>
        );
    }
}

export default SideBar