// import { Router } from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware';
// import {  } from '../server/config/services.js';

import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import {
  service3
} from '../server/config/services.js';

console.log('im inside bundles.js!');

const router = Router();

//router.use('/service1.js', createProxyMiddleware({
//  target: service1.url,
//  pathRewrite: {
//    '^/bundles/service1.js': service1.bundle,
//  },
//  changeOrigin: true,
//}));

//router.use('/service2.js', createProxyMiddleware({
//  target: service2.url,
//  pathRewrite: {
//    '^/bundles/service2.js': service2.bundle,
//  },
//  changeOrigin: true,
//}));

// router.use('/service3.js', createProxyMiddleware({
//   target: service3.url,
//   pathRewrite: {
//     '^/bundles/service3.js': service3.bundle,
//   },
//   changeOrigin: true,
// }), () => {
//   console.log('service3 accessed on proxy!');
// });

// router.get('/reviews', )

//router.use('/service4.js', createProxyMiddleware({
//  target: service4.url,
//  pathRewrite: {
//    '^/bundles/service4.js': service4.bundle,
//  },
//  changeOrigin: true,
//}));

export default router;