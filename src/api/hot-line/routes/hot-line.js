'use strict';

/**
 * hot-line router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hot-line.hot-line');
