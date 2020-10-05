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
    root.HmppsOffenderAssessmentApi.RefAnswerDto = factory(root.HmppsOffenderAssessmentApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RefAnswerDto model module.
   * @module model/RefAnswerDto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RefAnswerDto</code>.
   * @alias module:model/RefAnswerDto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RefAnswerDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefAnswerDto} obj Optional instance to populate.
   * @return {module:model/RefAnswerDto} The populated <code>RefAnswerDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('refAnswerCode'))
        obj.refAnswerCode = ApiClient.convertToType(data['refAnswerCode'], 'String');
      if (data.hasOwnProperty('refAnswerId'))
        obj.refAnswerId = ApiClient.convertToType(data['refAnswerId'], 'Number');
      if (data.hasOwnProperty('refDisplaySort'))
        obj.refDisplaySort = ApiClient.convertToType(data['refDisplaySort'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} refAnswerCode
   */
  exports.prototype.refAnswerCode = undefined;

  /**
   * @member {Number} refAnswerId
   */
  exports.prototype.refAnswerId = undefined;

  /**
   * @member {Number} refDisplaySort
   */
  exports.prototype.refDisplaySort = undefined;

  return exports;

}));
