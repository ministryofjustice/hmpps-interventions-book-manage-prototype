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
    define(['ApiClient', 'model/PredictorDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PredictorDto'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.OffenderOGPOGRsOVPPredictorsApi = factory(root.HmppsOffenderAssessmentApi.ApiClient, root.HmppsOffenderAssessmentApi.PredictorDto);
  }
}(this, function(ApiClient, PredictorDto) {
  'use strict';

  /**
   * OffenderOGPOGRsOVPPredictors service.
   * @module api/OffenderOGPOGRsOVPPredictorsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OffenderOGPOGRsOVPPredictorsApi. 
   * @alias module:api/OffenderOGPOGRsOVPPredictorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * getPredictorScoresForOasysOffenderId
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PredictorDto>} and HTTP response
     */
    this.getPredictorScoresForOasysOffenderIdUsingGETWithHttpInfo = function(identity, identityType) {
      var postBody = null;

      // verify the required parameter 'identity' is set
      if (identity === undefined || identity === null) {
        throw new Error("Missing the required parameter 'identity' when calling getPredictorScoresForOasysOffenderIdUsingGET");
      }

      // verify the required parameter 'identityType' is set
      if (identityType === undefined || identityType === null) {
        throw new Error("Missing the required parameter 'identityType' when calling getPredictorScoresForOasysOffenderIdUsingGET");
      }


      var pathParams = {
        'identity': identity,
        'identityType': identityType
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [PredictorDto];

      return this.apiClient.callApi(
        '/offenders/{identityType}/{identity}/predictors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getPredictorScoresForOasysOffenderId
     * @param {String} identity identity
     * @param {String} identityType identityType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PredictorDto>}
     */
    this.getPredictorScoresForOasysOffenderIdUsingGET = function(identity, identityType) {
      return this.getPredictorScoresForOasysOffenderIdUsingGETWithHttpInfo(identity, identityType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
