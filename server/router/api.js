const axios = require('axios');
const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service3
} = require('../config/services.js');

const router = Router();

console.log('hello!');
console.log('what is service3s api? ' + service3.api);
router.get(service3.api, (req, res) => {
  console.log('hello!');
  axios.get(service3.url)
    .then((response) => {
      console.log('response came back!');
      res.send(response);
    }).catch((err) => {
      console.log(err);
    })
})

console.log('heres the service 3 url: ' + service3.url);

//router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
//router.use(service2.api, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
router.use(service3.api, createProxyMiddleware({
  target: service3.url,
  changeOrigin: true
}));
//router.use(service4.api, createProxyMiddleware({ target: service4.url, changeOrigin: true }));

module.exports = router;