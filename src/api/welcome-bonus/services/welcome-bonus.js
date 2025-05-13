'use strict';

/**
 * welcome-bonus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-bonus.welcome-bonus');
