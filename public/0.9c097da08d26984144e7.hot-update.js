webpackHotUpdate(0,{

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _axios = __webpack_require__(889);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _constants = __webpack_require__(373);
	
	var types = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { apiPrefix } from '../../etc/config.json';
	
	exports.default = {
	    getSkills: function getSkills() {
	        return function action(dispatch) {
	            dispatch({ type: types.GET_SKILLS });
	
	            var request = (0, _axios2.default)({
	                method: 'GET',
	                url: 'http://localhost:8090//skills',
	                headers: []
	            });
	
	            return request.then(function (response) {
	                console.log('response: ' + response.data.toString());dispatch({ type: types.GET_SKILLS, skills: response.data, loaded: false });
	            }, function (err) {
	                return dispatch({ type: types.GET_SKILLS, skills: [], loaded: false });
	            });
	        };
	    },
	    addSkill: function addSkill(data) {
	        return _axios2.default.post('http://localhost:8090/addskill', data);
	    },
	    deleteSkill: function deleteSkill(skillId) {
	        return _axios2.default.delete('http://localhost:8090/skills/${noteId}');
	    }
	};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FwaS9za2lsbHMuanM/ZWU1OSJdLCJuYW1lcyI6WyJ0eXBlcyIsImdldFNraWxscyIsImFjdGlvbiIsImRpc3BhdGNoIiwidHlwZSIsIkdFVF9TS0lMTFMiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwidG9TdHJpbmciLCJza2lsbHMiLCJsb2FkZWQiLCJhZGRTa2lsbCIsInBvc3QiLCJkZWxldGVTa2lsbCIsInNraWxsSWQiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7S0FBWUEsSzs7Ozs7O0FBQ1o7O21CQUVlO0FBQ1hDLGNBRFcsdUJBQ0M7QUFDUixnQkFBTyxTQUFTQyxNQUFULENBQWdCQyxRQUFoQixFQUEwQjtBQUM3QkEsc0JBQVMsRUFBRUMsTUFBTUosTUFBTUssVUFBZCxFQUFUOztBQUVBLGlCQUFNQyxVQUFVLHFCQUFNO0FBQ2xCQyx5QkFBUSxLQURVO0FBRWxCQyxzQkFBSywrQkFGYTtBQUdsQkMsMEJBQVM7QUFIUyxjQUFOLENBQWhCOztBQU1BLG9CQUFPSCxRQUFRSSxJQUFSLENBQ0gsb0JBQVk7QUFBQ0MseUJBQVFDLEdBQVIsQ0FBWSxlQUFlQyxTQUFTQyxJQUFULENBQWNDLFFBQWQsRUFBM0IsRUFBc0RaLFNBQVMsRUFBQ0MsTUFBTUosTUFBTUssVUFBYixFQUF5QlcsUUFBUUgsU0FBU0MsSUFBMUMsRUFBZ0RHLFFBQVEsS0FBeEQsRUFBVDtBQUF5RSxjQUR6SSxFQUVIO0FBQUEsd0JBQU9kLFNBQVMsRUFBQ0MsTUFBTUosTUFBTUssVUFBYixFQUF5QlcsUUFBUSxFQUFqQyxFQUFxQ0MsUUFBUSxLQUE3QyxFQUFULENBQVA7QUFBQSxjQUZHLENBQVA7QUFHSCxVQVpEO0FBYUgsTUFmVTtBQWlCWEMsYUFqQlcsb0JBaUJGSixJQWpCRSxFQWlCSTtBQUNYLGdCQUFPLGdCQUFNSyxJQUFOLENBQVcsZ0NBQVgsRUFBNkNMLElBQTdDLENBQVA7QUFDSCxNQW5CVTtBQXFCWE0sZ0JBckJXLHVCQXFCQ0MsT0FyQkQsRUFxQlU7QUFDakIsZ0JBQU8sZ0JBQU1DLE1BQU4sQ0FBYSx3Q0FBYixDQUFQO0FBQ0g7QUF2QlUsRSIsImZpbGUiOiIwLjljMDk3ZGEwOGQyNjk4NDE0NGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vcGFnZXMvYWRtaW4vc2tpbGxzL2NvbnN0YW50cyc7XG4vLyBpbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tICcuLi8uLi9ldGMvY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0U2tpbGxzKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYWN0aW9uKGRpc3BhdGNoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLkdFVF9TS0lMTFMgfSlcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5MC8vc2tpbGxzJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnRoZW4oXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge2NvbnNvbGUubG9nKCdyZXNwb25zZTogJyArIHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSk7IGRpc3BhdGNoKHt0eXBlOiB0eXBlcy5HRVRfU0tJTExTLCBza2lsbHM6IHJlc3BvbnNlLmRhdGEsIGxvYWRlZDogZmFsc2V9KX0sXG4gICAgICAgICAgICAgICAgZXJyID0+IGRpc3BhdGNoKHt0eXBlOiB0eXBlcy5HRVRfU0tJTExTLCBza2lsbHM6IFtdLCBsb2FkZWQ6IGZhbHNlfSkpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhZGRTa2lsbChkYXRhKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwOTAvYWRkc2tpbGwnLCBkYXRhKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlU2tpbGwoc2tpbGxJZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjgwOTAvc2tpbGxzLyR7bm90ZUlkfScpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYXBpL3NraWxscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=