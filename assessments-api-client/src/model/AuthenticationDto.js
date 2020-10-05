/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.AuthenticationDto = factory(root.HmppsOffenderAssessmentApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AuthenticationDto model module.
   * @module model/AuthenticationDto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthenticationDto</code>.
   * @alias module:model/AuthenticationDto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AuthenticationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationDto} obj Optional instance to populate.
   * @return {module:model/AuthenticationDto} The populated <code>AuthenticationDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('authenticated'))
        obj.authenticated = ApiClient.convertToType(data['authenticated'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Boolean} authenticated
   */
  exports.prototype.authenticated = undefined;

  return exports;

}));
