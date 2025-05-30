'use strict';

/**
 * cashier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cashier.cashier');
