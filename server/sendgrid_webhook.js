var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "vigorsolutionsllc" }, function(err, tunnel) {
  console.log('LT running')
});