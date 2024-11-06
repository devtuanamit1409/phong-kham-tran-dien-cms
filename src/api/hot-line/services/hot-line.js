'use strict';

/**
 * hot-line service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-line.hot-line');
