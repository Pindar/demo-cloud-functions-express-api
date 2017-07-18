const gstore = require('gstore-node');

const KIND = 'BlogPost';

const Schema = gstore.Schema;

const blogPostSchema = new Schema({
  title: { type: 'string', required: true },
  text: { type: 'string', optional: true },
});

/**
 * List entities query shortcut
 */
const listSettings = {
  limit: 15,
  order: { property: 'title' },
};
blogPostSchema.queries('list', listSettings);


module.exports = gstore.model(KIND, blogPostSchema);

