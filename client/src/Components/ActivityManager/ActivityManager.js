import React, { Component } from 'react';
import TreeListSideBar from './TreeListSideBar';
import ActivityViewer from './ActivityViewer';
import ActivityEditor from './ActivityEditor';
import { Grid, Toolbar, Button } from '@material-ui/core';

class ActivityManager extends Component {

    render() {
        return (
            <Grid container style={{ paddingTop: 64 }}>
                <Grid item xs={2}>
                    <TreeListSideBar></TreeListSideBar>
                </Grid>
                <Grid item xs={10}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Toolbar xs={10} style={{ float: "right", position: "static" }}>
                                <Button variant="contained" style={{ marginRight: 10 }} color="primary">Add new</Button>
                                <Button variant="contained" style={{ marginRight: 10 }} color="primary">Edit</Button>
                                <Button variant="contained" style={{ marginRight: 10 }} color="secondary">Remove</Button>
                            </Toolbar>
                        </Grid>
                        <ActivityViewer></ActivityViewer>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ActivityManager