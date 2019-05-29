import mongoose from 'mongoose';
import Activity from './Activity';
import ActivityPicture from './ActivityPicture';
import ActivityDescription from './ActivityDescription';
import ActivityLink from './ActivityLink';
import ActivityType from './ActivityType';

const models = { Activity, ActivityDescription, ActivityLink, ActivityPicture, ActivityType };

export default models;