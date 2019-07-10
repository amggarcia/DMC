import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography, List, ListItemText, ListItem } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ACTIVITY = gql`
  query activity($id: ID!) {
    activity(id: $id) {
    id
    name
    location
    capacity
    descriptions {
      description
    }
    type{type}
    pictures{picture,isStarred}
    links{description,link}
  }
  }
`;

class ActivityViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityID: props.activityId
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.activityId != prevProps.activityId) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            console.log(this.props.activityId)
            this.updateActivity(this.props.activityId);
        }
    };

    updateActivity = (activityID) => {
        this.setState({ activityID: activityID });
    };
    render() {
        if (!this.state.activityID)
            return (<div></div>);
        else
            return (
                <div>
                    <Query query={GET_ACTIVITY} variables={{ id: this.state.activityID }}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading ...";
                            if (error) return `Error! ${error}`;
                            return (
                                <div style={{ marginLeft: 10 }}>
                                    <Typography component="h1" variant="display2" style={{ marginTop: 20, marginBottom: 20 }}>{data.activity.name}</Typography>
                                    <GridList cols={2.5} cellHeight={240} style={{ flexWrap: "nowrap" }}>
                                        {data.activity.pictures.map((picture, index) => (
                                            <GridListTile key={"image" + index}>
                                                <img src={picture.picture} />
                                                <GridListTileBar
                                                    title="Picture Title"
                                                    actionIcon={
                                                        <IconButton>
                                                            <StarBorderIcon />
                                                        </IconButton>}
                                                />
                                            </GridListTile>
                                        ))};
                                </GridList>
                                    <br />
                                    <Typography variant="body1" gutterBottom >{data.activity.descriptions.find(description => description.language == "en-GB")}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1" gutterBottom > <b>Location : </b> {data.activity.location} <b>Capacity : </b> {data.activity.capacity}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1" gutterBottom><b>Aditional links</b> </Typography>
                                    <List component="nav">
                                        {data.activity.links.map((link, index) => (
                                            <ListItem button component="a" href={link.link}>
                                                <ListItemText primary={link.description} />
                                            </ListItem>
                                        ))};
                                </List>
                                </div>
                            );
                        }}
                    </Query>
                </div >
            );
    }
}

export default ActivityViewer