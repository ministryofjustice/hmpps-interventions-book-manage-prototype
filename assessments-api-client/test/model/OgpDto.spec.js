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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OgpDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.OgpDto();
      });

      it('should create an instance of OgpDto', function() {
        // TODO: update the code to test OgpDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.OgpDto);
      });

      it('should have the property ogp1Year (base name: "ogp1Year")', function() {
        // TODO: update the code to test the property ogp1Year
        expect(instance).to.have.property('ogp1Year');
        // expect(instance.ogp1Year).to.be(expectedValueLiteral);
      });

      it('should have the property ogp2Year (base name: "ogp2Year")', function() {
        // TODO: update the code to test the property ogp2Year
        expect(instance).to.have.property('ogp2Year');
        // expect(instance.ogp2Year).to.be(expectedValueLiteral);
      });

      it('should have the property ogpDynamicWeightedScore (base name: "ogpDynamicWeightedScore")', function() {
        // TODO: update the code to test the property ogpDynamicWeightedScore
        expect(instance).to.have.property('ogpDynamicWeightedScore');
        // expect(instance.ogpDynamicWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ogpRisk (base name: "ogpRisk")', function() {
        // TODO: update the code to test the property ogpRisk
        expect(instance).to.have.property('ogpRisk');
        // expect(instance.ogpRisk).to.be(expectedValueLiteral);
      });

      it('should have the property ogpStaticWeightedScore (base name: "ogpStaticWeightedScore")', function() {
        // TODO: update the code to test the property ogpStaticWeightedScore
        expect(instance).to.have.property('ogpStaticWeightedScore');
        // expect(instance.ogpStaticWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ogpTotalWeightedScore (base name: "ogpTotalWeightedScore")', function() {
        // TODO: update the code to test the property ogpTotalWeightedScore
        expect(instance).to.have.property('ogpTotalWeightedScore');
        // expect(instance.ogpTotalWeightedScore).to.be(expectedValueLiteral);
      });

    });
  });

}));
