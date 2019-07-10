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

class ActivityManager extends Component {

    render() {
        return (
            <div>
                <Query query={GET_ACTIVITY} variables={{ id: "5d251ff4125e482bc8dca570" }}>
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

export default ActivityManager