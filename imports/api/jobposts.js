import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const JobPosts = new Mongo.Collection('jobposts');

export const jobPostSchema = new SimpleSchema ({
  annualPay: Number,
  benefits: Array,
  'benefits.$': String,
  company: String,
  description: String,
  location: String,
  payStructure: String,
  qualificationNeeds: Array,
  'qualificationNeeds.$': String,
  qualificationWants: Array,
  'qualificationWants.$': String,
  title: String,
  website: String
});

JobPosts.attachSchema(jobPostSchema);
