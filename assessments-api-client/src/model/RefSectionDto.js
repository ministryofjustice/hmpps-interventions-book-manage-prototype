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
    define(['ApiClient', 'model/RefQuestionDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RefQuestionDto'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.RefSectionDto = factory(root.HmppsOffenderAssessmentApi.ApiClient, root.HmppsOffenderAssessmentApi.RefQuestionDto);
  }
}(this, function(ApiClient, RefQuestionDto) {
  'use strict';

  /**
   * The RefSectionDto model module.
   * @module model/RefSectionDto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RefSectionDto</code>.
   * @alias module:model/RefSectionDto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RefSectionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefSectionDto} obj Optional instance to populate.
   * @return {module:model/RefSectionDto} The populated <code>RefSectionDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('refCrimNeedScoreThreshold'))
        obj.refCrimNeedScoreThreshold = ApiClient.convertToType(data['refCrimNeedScoreThreshold'], 'Number');
      if (data.hasOwnProperty('refQuestions'))
        obj.refQuestions = ApiClient.convertToType(data['refQuestions'], [RefQuestionDto]);
      if (data.hasOwnProperty('refScoredForOgp'))
        obj.refScoredForOgp = ApiClient.convertToType(data['refScoredForOgp'], 'Boolean');
      if (data.hasOwnProperty('refScoredForOvp'))
        obj.refScoredForOvp = ApiClient.convertToType(data['refScoredForOvp'], 'Boolean');
      if (data.hasOwnProperty('refSectionCode'))
        obj.refSectionCode = ApiClient.convertToType(data['refSectionCode'], 'String');
      if (data.hasOwnProperty('refSectionId'))
        obj.refSectionId = ApiClient.convertToType(data['refSectionId'], 'Number');
      if (data.hasOwnProperty('shortDescription'))
        obj.shortDescription = ApiClient.convertToType(data['shortDescription'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Number} refCrimNeedScoreThreshold
   */
  exports.prototype.refCrimNeedScoreThreshold = undefined;

  /**
   * @member {Array.<module:model/RefQuestionDto>} refQuestions
   */
  exports.prototype.refQuestions = undefined;

  /**
   * @member {Boolean} refScoredForOgp
   */
  exports.prototype.refScoredForOgp = undefined;

  /**
   * @member {Boolean} refScoredForOvp
   */
  exports.prototype.refScoredForOvp = undefined;

  /**
   * @member {String} refSectionCode
   */
  exports.prototype.refSectionCode = undefined;

  /**
   * @member {Number} refSectionId
   */
  exports.prototype.refSectionId = undefined;

  /**
   * @member {String} shortDescription
   */
  exports.prototype.shortDescription = undefined;

  return exports;

}));
