'use strict';
module.exports = function(app) {
  let RestApi = require('../controllers/RestApiController.js');
  /*var router = express.Router();

// GET users listing.
router.get('/users', function (req, res) {
    res.send('respond with a resource');
});*/


  // RestApi Routes
  app.route('/user')
  .get(RestApi.list_all_users)
  .post(RestApi.create_a_user);


  app.route('/user/:userId')
    .get(RestApi.read_user_info)
    .put(RestApi.update_a_user)
    .delete(RestApi.delete_a_user);
};