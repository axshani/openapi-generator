/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client', 'model/OuterBoolean', 'model/OuterComposite', 'model/OuterNumber', 'model/OuterString', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'), require('../model/OuterBoolean'), require('../model/OuterComposite'), require('../model/OuterNumber'), require('../model/OuterString'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.FakeApi = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Client, root.SwaggerPetstore.OuterBoolean, root.SwaggerPetstore.OuterComposite, root.SwaggerPetstore.OuterNumber, root.SwaggerPetstore.OuterString, root.SwaggerPetstore.User);
  }
}(this, function(ApiClient, Client, OuterBoolean, OuterComposite, OuterNumber, OuterString, User) {
  'use strict';

  /**
   * Fake service.
   * @module api/FakeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeApi. 
   * @alias module:api/FakeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fakeOuterBooleanSerialize operation.
     * @callback module:api/FakeApi~fakeOuterBooleanSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OuterBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.booleanPostBody Input boolean as post body
     * @param {module:api/FakeApi~fakeOuterBooleanSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OuterBoolean}
     */
    this.fakeOuterBooleanSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['booleanPostBody'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OuterBoolean;

      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterCompositeSerialize operation.
     * @callback module:api/FakeApi~fakeOuterCompositeSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OuterComposite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.outerComposite Input composite as post body
     * @param {module:api/FakeApi~fakeOuterCompositeSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OuterComposite}
     */
    this.fakeOuterCompositeSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['outerComposite'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OuterComposite;

      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterNumberSerialize operation.
     * @callback module:api/FakeApi~fakeOuterNumberSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OuterNumber} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @param {module:api/FakeApi~fakeOuterNumberSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OuterNumber}
     */
    this.fakeOuterNumberSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OuterNumber;

      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fakeOuterStringSerialize operation.
     * @callback module:api/FakeApi~fakeOuterStringSerializeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OuterString} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @param {module:api/FakeApi~fakeOuterStringSerializeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OuterString}
     */
    this.fakeOuterStringSerialize = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OuterString;

      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testBodyWithQueryParams operation.
     * @callback module:api/FakeApi~testBodyWithQueryParamsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} query 
     * @param {module:model/User} user 
     * @param {module:api/FakeApi~testBodyWithQueryParamsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testBodyWithQueryParams = function(query, user, callback) {
      var postBody = user;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling testBodyWithQueryParams");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testClientModel operation.
     * @callback module:api/FakeApi~testClientModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test \&quot;client\&quot; model
     * To test \&quot;client\&quot; model
     * @param {module:model/Client} client client model
     * @param {module:api/FakeApi~testClientModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Client}
     */
    this.testClientModel = function(client, callback) {
      var postBody = client;

      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling testClientModel");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;

      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEndpointParameters operation.
     * @callback module:api/FakeApi~testEndpointParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {File} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @param {module:api/FakeApi~testEndpointParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEndpointParameters = function(_number, _double, patternWithoutDelimiter, _byte, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling testEndpointParameters");
      }

      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }

      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }

      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      var authNames = ['http_basic_test'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEnumParameters operation.
     * @callback module:api/FakeApi~testEnumParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to -efg)
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {module:model/String} opts.enumFormStringArray Form parameter enum test (string array)
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string)
     * @param {module:api/FakeApi~testEnumParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEnumParameters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'enum_query_string_array': opts['enumQueryStringArray'],
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
        'enum_query_double': opts['enumQueryDouble'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      var formParams = {
        'enum_form_string_array': opts['enumFormStringArray'],
        'enum_form_string': opts['enumFormString']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testInlineAdditionalProperties operation.
     * @callback module:api/FakeApi~testInlineAdditionalPropertiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * test inline additionalProperties
     * @param {Object.<String, String>} requestBody request body
     * @param {module:api/FakeApi~testInlineAdditionalPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testInlineAdditionalProperties = function(requestBody, callback) {
      var postBody = requestBody;

      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling testInlineAdditionalProperties");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testJsonFormData operation.
     * @callback module:api/FakeApi~testJsonFormDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * test json serialization of form data
     * @param {String} param field1
     * @param {String} param2 field2
     * @param {module:api/FakeApi~testJsonFormDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testJsonFormData = function(param, param2, callback) {
      var postBody = null;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }

      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'param': param,
        'param2': param2
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
