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
    describe('ValidateUserRequest', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.ValidateUserRequest();
      });

      it('should create an instance of ValidateUserRequest', function() {
        // TODO: update the code to test ValidateUserRequest
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.ValidateUserRequest);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

    });
  });

}));
