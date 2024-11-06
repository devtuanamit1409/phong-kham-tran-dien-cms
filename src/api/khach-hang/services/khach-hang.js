'use strict';

/**
 * khach-hang service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::khach-hang.khach-hang');
