'use strict';

/**
 * restdata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restdata.restdata');
