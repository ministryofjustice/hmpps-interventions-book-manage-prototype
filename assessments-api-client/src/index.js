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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnswerDto', 'model/AssessmentDto', 'model/AssessmentNeedDto', 'model/AssessmentSummaryDto', 'model/AuthenticationDto', 'model/AuthorisationDto', 'model/BasicSentencePlanDto', 'model/BasicSentencePlanItemDto', 'model/CriminogenicNeedDto', 'model/FullSentencePlanDto', 'model/FullSentencePlanSummaryDto', 'model/InterventionDto', 'model/InterventionMeasureDto', 'model/OasysUserAuthenticationDto', 'model/ObjectiveDto', 'model/ObjectiveMeasureDto', 'model/OffenderDto', 'model/OgpDto', 'model/Ogrs3Dto', 'model/OvpDto', 'model/PredictorDto', 'model/QuestionDto', 'model/RefAnswerDto', 'model/RefAssessmentDto', 'model/RefElementDto', 'model/RefQuestionDto', 'model/RefSectionDto', 'model/SectionDto', 'model/SentenceDto', 'model/ValidateUserRequest', 'model/WhoDoingWorkDto', 'api/AssessmentsApi', 'api/AuthenticationApi', 'api/OffenderOGPOGRsOVPPredictorsApi', 'api/OffendersApi', 'api/ReferenceAssessmentApi', 'api/ReferenceDataApi', 'api/SentencePlansApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AnswerDto'), require('./model/AssessmentDto'), require('./model/AssessmentNeedDto'), require('./model/AssessmentSummaryDto'), require('./model/AuthenticationDto'), require('./model/AuthorisationDto'), require('./model/BasicSentencePlanDto'), require('./model/BasicSentencePlanItemDto'), require('./model/CriminogenicNeedDto'), require('./model/FullSentencePlanDto'), require('./model/FullSentencePlanSummaryDto'), require('./model/InterventionDto'), require('./model/InterventionMeasureDto'), require('./model/OasysUserAuthenticationDto'), require('./model/ObjectiveDto'), require('./model/ObjectiveMeasureDto'), require('./model/OffenderDto'), require('./model/OgpDto'), require('./model/Ogrs3Dto'), require('./model/OvpDto'), require('./model/PredictorDto'), require('./model/QuestionDto'), require('./model/RefAnswerDto'), require('./model/RefAssessmentDto'), require('./model/RefElementDto'), require('./model/RefQuestionDto'), require('./model/RefSectionDto'), require('./model/SectionDto'), require('./model/SentenceDto'), require('./model/ValidateUserRequest'), require('./model/WhoDoingWorkDto'), require('./api/AssessmentsApi'), require('./api/AuthenticationApi'), require('./api/OffenderOGPOGRsOVPPredictorsApi'), require('./api/OffendersApi'), require('./api/ReferenceAssessmentApi'), require('./api/ReferenceDataApi'), require('./api/SentencePlansApi'));
  }
}(function(ApiClient, AnswerDto, AssessmentDto, AssessmentNeedDto, AssessmentSummaryDto, AuthenticationDto, AuthorisationDto, BasicSentencePlanDto, BasicSentencePlanItemDto, CriminogenicNeedDto, FullSentencePlanDto, FullSentencePlanSummaryDto, InterventionDto, InterventionMeasureDto, OasysUserAuthenticationDto, ObjectiveDto, ObjectiveMeasureDto, OffenderDto, OgpDto, Ogrs3Dto, OvpDto, PredictorDto, QuestionDto, RefAnswerDto, RefAssessmentDto, RefElementDto, RefQuestionDto, RefSectionDto, SectionDto, SentenceDto, ValidateUserRequest, WhoDoingWorkDto, AssessmentsApi, AuthenticationApi, OffenderOGPOGRsOVPPredictorsApi, OffendersApi, ReferenceAssessmentApi, ReferenceDataApi, SentencePlansApi) {
  'use strict';

  /**
   * OASys_Data_API_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var HmppsOffenderAssessmentApi = require('index'); // See note below*.
   * var xxxSvc = new HmppsOffenderAssessmentApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new HmppsOffenderAssessmentApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new HmppsOffenderAssessmentApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new HmppsOffenderAssessmentApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AnswerDto model constructor.
     * @property {module:model/AnswerDto}
     */
    AnswerDto: AnswerDto,
    /**
     * The AssessmentDto model constructor.
     * @property {module:model/AssessmentDto}
     */
    AssessmentDto: AssessmentDto,
    /**
     * The AssessmentNeedDto model constructor.
     * @property {module:model/AssessmentNeedDto}
     */
    AssessmentNeedDto: AssessmentNeedDto,
    /**
     * The AssessmentSummaryDto model constructor.
     * @property {module:model/AssessmentSummaryDto}
     */
    AssessmentSummaryDto: AssessmentSummaryDto,
    /**
     * The AuthenticationDto model constructor.
     * @property {module:model/AuthenticationDto}
     */
    AuthenticationDto: AuthenticationDto,
    /**
     * The AuthorisationDto model constructor.
     * @property {module:model/AuthorisationDto}
     */
    AuthorisationDto: AuthorisationDto,
    /**
     * The BasicSentencePlanDto model constructor.
     * @property {module:model/BasicSentencePlanDto}
     */
    BasicSentencePlanDto: BasicSentencePlanDto,
    /**
     * The BasicSentencePlanItemDto model constructor.
     * @property {module:model/BasicSentencePlanItemDto}
     */
    BasicSentencePlanItemDto: BasicSentencePlanItemDto,
    /**
     * The CriminogenicNeedDto model constructor.
     * @property {module:model/CriminogenicNeedDto}
     */
    CriminogenicNeedDto: CriminogenicNeedDto,
    /**
     * The FullSentencePlanDto model constructor.
     * @property {module:model/FullSentencePlanDto}
     */
    FullSentencePlanDto: FullSentencePlanDto,
    /**
     * The FullSentencePlanSummaryDto model constructor.
     * @property {module:model/FullSentencePlanSummaryDto}
     */
    FullSentencePlanSummaryDto: FullSentencePlanSummaryDto,
    /**
     * The InterventionDto model constructor.
     * @property {module:model/InterventionDto}
     */
    InterventionDto: InterventionDto,
    /**
     * The InterventionMeasureDto model constructor.
     * @property {module:model/InterventionMeasureDto}
     */
    InterventionMeasureDto: InterventionMeasureDto,
    /**
     * The OasysUserAuthenticationDto model constructor.
     * @property {module:model/OasysUserAuthenticationDto}
     */
    OasysUserAuthenticationDto: OasysUserAuthenticationDto,
    /**
     * The ObjectiveDto model constructor.
     * @property {module:model/ObjectiveDto}
     */
    ObjectiveDto: ObjectiveDto,
    /**
     * The ObjectiveMeasureDto model constructor.
     * @property {module:model/ObjectiveMeasureDto}
     */
    ObjectiveMeasureDto: ObjectiveMeasureDto,
    /**
     * The OffenderDto model constructor.
     * @property {module:model/OffenderDto}
     */
    OffenderDto: OffenderDto,
    /**
     * The OgpDto model constructor.
     * @property {module:model/OgpDto}
     */
    OgpDto: OgpDto,
    /**
     * The Ogrs3Dto model constructor.
     * @property {module:model/Ogrs3Dto}
     */
    Ogrs3Dto: Ogrs3Dto,
    /**
     * The OvpDto model constructor.
     * @property {module:model/OvpDto}
     */
    OvpDto: OvpDto,
    /**
     * The PredictorDto model constructor.
     * @property {module:model/PredictorDto}
     */
    PredictorDto: PredictorDto,
    /**
     * The QuestionDto model constructor.
     * @property {module:model/QuestionDto}
     */
    QuestionDto: QuestionDto,
    /**
     * The RefAnswerDto model constructor.
     * @property {module:model/RefAnswerDto}
     */
    RefAnswerDto: RefAnswerDto,
    /**
     * The RefAssessmentDto model constructor.
     * @property {module:model/RefAssessmentDto}
     */
    RefAssessmentDto: RefAssessmentDto,
    /**
     * The RefElementDto model constructor.
     * @property {module:model/RefElementDto}
     */
    RefElementDto: RefElementDto,
    /**
     * The RefQuestionDto model constructor.
     * @property {module:model/RefQuestionDto}
     */
    RefQuestionDto: RefQuestionDto,
    /**
     * The RefSectionDto model constructor.
     * @property {module:model/RefSectionDto}
     */
    RefSectionDto: RefSectionDto,
    /**
     * The SectionDto model constructor.
     * @property {module:model/SectionDto}
     */
    SectionDto: SectionDto,
    /**
     * The SentenceDto model constructor.
     * @property {module:model/SentenceDto}
     */
    SentenceDto: SentenceDto,
    /**
     * The ValidateUserRequest model constructor.
     * @property {module:model/ValidateUserRequest}
     */
    ValidateUserRequest: ValidateUserRequest,
    /**
     * The WhoDoingWorkDto model constructor.
     * @property {module:model/WhoDoingWorkDto}
     */
    WhoDoingWorkDto: WhoDoingWorkDto,
    /**
     * The AssessmentsApi service constructor.
     * @property {module:api/AssessmentsApi}
     */
    AssessmentsApi: AssessmentsApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The OffenderOGPOGRsOVPPredictorsApi service constructor.
     * @property {module:api/OffenderOGPOGRsOVPPredictorsApi}
     */
    OffenderOGPOGRsOVPPredictorsApi: OffenderOGPOGRsOVPPredictorsApi,
    /**
     * The OffendersApi service constructor.
     * @property {module:api/OffendersApi}
     */
    OffendersApi: OffendersApi,
    /**
     * The ReferenceAssessmentApi service constructor.
     * @property {module:api/ReferenceAssessmentApi}
     */
    ReferenceAssessmentApi: ReferenceAssessmentApi,
    /**
     * The ReferenceDataApi service constructor.
     * @property {module:api/ReferenceDataApi}
     */
    ReferenceDataApi: ReferenceDataApi,
    /**
     * The SentencePlansApi service constructor.
     * @property {module:api/SentencePlansApi}
     */
    SentencePlansApi: SentencePlansApi
  };

  return exports;
}));
