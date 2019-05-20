import React , { Component} from 'react';
import TreeListSideBar from './TreeListSideBar';
import ActivityViewer from './ActivityViewer';
import { Grid} from '@material-ui/core';

class ActivityManager extends Component{

    render(){
        return (
        <Grid container>
            <Grid item xs={2}>
                <TreeListSideBar></TreeListSideBar>
            </Grid>
            <Grid item xs={10}>
                <ActivityViewer></ActivityViewer>
            </Grid>
        </Grid>
        );
    }
}

export default ActivityManager