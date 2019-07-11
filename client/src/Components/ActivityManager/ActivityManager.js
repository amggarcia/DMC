import React, { Component } from 'react';
import TreeListSideBar from './TreeListSideBar';
import ActivityViewer from './ActivityViewer';
import ActivityEditor from './ActivityEditor';
import { Grid, Toolbar, Button } from '@material-ui/core';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

class ActivityManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activityId: undefined
        };
        this.changeActivity = this.changeActivity.bind(this);
    }

    changeActivity = (activityId) => () => {
        this.setState({ activityId: activityId });
    };

    render() {
        return (
            <Router>
                <Grid container style={{ paddingTop: 64 }}>
                    <Grid item xs={2}>
                        <TreeListSideBar changeActivity={this.changeActivity} ></TreeListSideBar>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Toolbar xs={10} style={{ float: "right", position: "static" }}>
                                    <Button component={Link} variant="contained" style={{ marginRight: 10 }} color="primary" to="/Edit" onClick={this.changeActivity(undefined)}>Add new</Button>
                                    <Button component={Link} variant="contained" style={{ marginRight: 10 }} color="primary" to="/Edit">Edit</Button>
                                    <Button variant="contained" style={{ marginRight: 10 }} color="secondary">Remove</Button>
                                </Toolbar>
                            </Grid>
                            <Route path="/Viewer" render={(props) => (<ActivityViewer {...props} activityId={this.state.activityId} />)} />
                            <Route path="/Edit" render={(props) => (<ActivityEditor {...props} activityId={this.state.activityId} />)} />
                        </Grid>
                    </Grid>
                </Grid>
            </Router >
        );
    }
}


export default ActivityManager