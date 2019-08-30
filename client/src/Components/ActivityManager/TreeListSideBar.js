import React, { Component } from 'react';
import { List, ListItemText, ListItem, ListItemIcon, Divider, Collapse } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import StarBorder from '@material-ui/icons/StarBorder';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const ACTIVITY_TYPES_QUERY = gql`query{activityTypes{id,type,activities{name,id}}}`;

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expands: [],
      collections: []
    };

  }

  handleClick = (text) => () => {
    const currentState = this.state.expands;
    currentState[text] = !currentState[text];
    this.setState({ expands: currentState });
  };

  render() {
    return (
      <div>
        <Query query={ACTIVITY_TYPES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading....";
            if (error) return `Error! ${error.message}`;
            return (
              < List >
                {
                  data.activityTypes.map((type, index) => (
                    < div >
                      <ListItem button key={type.type} onClick={this.handleClick(type.type)}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={type.type} />
                      </ListItem>
                      <Collapse in={this.state.expands[type.type]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {type.activities.map((activity) => (
                            <ListItem component={Link} button onClick={this.props.changeActivity(activity.id)} to="/Viewer">
                              <ListItemText inset primary={activity.name} />
                            </ListItem>
                          ))}

                        </List>
                        <Divider />
                      </Collapse>
                    </div>
                  ))}
                <ListItem button key="AddNew" onClick={() => console.log("To be implemented")}>
                  <ListItemIcon><AddIcon /></ListItemIcon>
                  <ListItemText primary="Add new category" />
                </ListItem>
              </List>
            )
          }

          }
        </Query>
      </div >
    );
  }
}

export default SideBar