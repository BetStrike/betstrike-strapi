'use strict';

/**
 * user-verification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-verification.user-verification');
