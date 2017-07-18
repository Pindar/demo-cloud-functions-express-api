// configure datastore
const gstore = require('gstore-node');
const datastore = require('@google-cloud/datastore')();
gstore.connect(datastore);

// configure application
const express = require('express');
const app = express();
const router = express.Router();
const gstoreApi = require('gstore-api')();
const apiBuilder = gstoreApi.express(router);

// import gstore-node Model
const BlogPost = require('./blog-post.model');

// create api
const blogPostApi = apiBuilder.create(BlogPost);

// add it to your Express app
app.use('/api/v1', blogPostApi);

/**
 * This will generate the following API
 */

// GET /api/v1/blog-posts -- list all BlogPost
// GET /api/v1/blog-posts/:id -- get one BlogPost
// POST /api/v1/blog-posts -- create a BlogPost
// PATCH /api/v1/blog-posts/:id -- update a BlogPost (merging new data with old one)
// PUT /api/v1/blog-posts/:id -- update a BlogPost (replacing old data with new one)
// DELETE /api/v1/blog-posts/:id -- delete a BlogPost

module.exports = app;

