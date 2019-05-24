import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography, List, ListItemText, ListItem, TextField, Grid, Toolbar, Button } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteBorderIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';
class ActivityEditor extends Component {
    state = {
        name: 'New name',
        pictures: ['https://loremflickr.com/320/240?random=', 'https://loremflickr.com/320/240?random='],
        description: 'long description incoming',
        location: 'somewhere',
        capacity: '100',
        links: [{ description: 'tripadvisor', address: 'https://tripadvisor.com' }, { description: 'zoomato', address: 'https://zoomato.com' }]
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleLinkChange = (property, index) => event => {
        const currentLinks = this.state.links;
        currentLinks[index][property] = event.target.value;
        this.setState({ links: currentLinks })
    }
    handleLinkRemove = (index) => event => {
        const currentLinks = this.state.links;
        currentLinks.splice(index, 1);
        this.setState({ links: currentLinks })
    }
    handleLinkAdd = () => event => {
        const currentLinks = this.state.links;
        currentLinks.push({ description: '', address: '' });
        this.setState({ links: currentLinks });
    }
    render() {
        return (
            <Grid item xs={12} style={{ marginLeft: 10, marginRight: 10 }}>
                <form>
                    <TextField
                        id="activityName"
                        label="Activity Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="filled"
                        fullWidth
                    />
                    <Typography component="h1" variant="display2" style={{ marginTop: 20, marginBottom: 20 }}>Activity Name</Typography>
                    <GridList cols={2.5} cellHeight={240} style={{ flexWrap: "nowrap", marginRight: 10 }}>
                        {this.state.pictures.map((element, index) => (
                            <GridListTile key={"image" + index}>
                                <img src={element + index} />
                                <GridListTileBar
                                    title={"Random Image " + index}
                                    actionIcon={<span><IconButton><DeleteBorderIcon /></IconButton><IconButton><StarBorderIcon /></IconButton></span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                    <Grid container>
                        <Grid item xs={12}>
                            <Toolbar style={{ float: "right" }}>
                                <Button variant="contained" style={{ marginRight: 10 }} color="primary">Upload images</Button>
                            </Toolbar>
                        </Grid>
                    </Grid>
                    <br />
                    <TextField
                        id="activityDescription"
                        label="Description"
                        multiline
                        rows="5"
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        helperText="A description of the activity/venue"
                        variant="filled"
                        fullWidth
                    />

                    <TextField
                        id="activityLocation"
                        label="Location"
                        value={this.state.location}
                        onChange={this.handleChange('location')}
                        variant="filled"
                        margin="normal"
                        style={{ marginRight: 10 }}
                    />
                    <TextField
                        id="activityCapacity"
                        label="Capacity"
                        value={this.state.capacity}
                        onChange={this.handleChange('capacity')}
                        variant="filled"
                        margin="normal"
                    />
                    <Typography variant="body1" gutterBottom><b>Aditional links</b> </Typography>
                    <Button variant="contained" style={{ marginRight: 10 }} color="primary" onClick={this.handleLinkAdd()}>Add new link</Button>
                    {this.state.links.map((element, index) => (
                        <Grid item xs={12} key={"additionalLink" + index} style={{ alignItems: "center", display: "flex" }}>
                            <IconButton aria-label="Delete" style={{ marginRight: 10 }} onClick={this.handleLinkRemove(index)}>
                                <DeleteIcon color="secondary" />
                            </IconButton>
                            <TextField xs={2} style={{ marginRight: 10 }}
                                id={"linkDescription_" + index}
                                label="Link description"
                                value={element.description}
                                onChange={this.handleLinkChange('description', index)}
                                variant="filled"
                                margin="normal"
                            />
                            <TextField xs={9}
                                id={"linkAddress_" + index}
                                label="Link address"
                                value={element.address}
                                onChange={this.handleLinkChange('address', index)}
                                variant="filled"
                                margin="normal"
                            />
                        </Grid>
                    ))}
                </form>
            </Grid>
        );
    }
}

export default ActivityEditor