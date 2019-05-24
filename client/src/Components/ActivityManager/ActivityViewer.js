import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography, List, ListItemText, ListItem } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';


class ActivityManager extends Component {

    render() {
        return (
            <div style={{ marginLeft: 10 }}>
                <Typography component="h1" variant="display2" style={{ marginTop: 20, marginBottom: 20 }}>Activity Name</Typography>
                <GridList cols={2.5} cellHeight={240} style={{ flexWrap: "nowrap" }}>
                    <GridListTile key={"image1"}>
                        <img src="https://loremflickr.com/320/240?random=4" />
                        <GridListTileBar
                            title="RandomImage1"
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon />
                                </IconButton>}
                        />
                    </GridListTile>
                    <GridListTile key={"image2"}>
                        <img src="https://loremflickr.com/320/240?random=3" />
                        <GridListTileBar
                            title="RandomImage1"
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon />
                                </IconButton>}
                        />
                    </GridListTile>
                    <GridListTile key={"image3"}>
                        <img src="https://loremflickr.com/320/240?random=2" />
                        <GridListTileBar
                            title="RandomImage1"
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon />
                                </IconButton>}
                        />
                    </GridListTile>

                </GridList>
                <br />
                <Typography variant="body1" gutterBottom > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
                <br />
                <Typography variant="body1" gutterBottom > <b>Location : </b> Outdoors <b>Capacity : </b> 4pax per team
            </Typography>
                <br />
                <Typography variant="body1" gutterBottom><b>Aditional links</b> </Typography>
                <List component="nav">
                    <ListItem button component="a" href="http://google.com">
                        <ListItemText primary="Google" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default ActivityManager