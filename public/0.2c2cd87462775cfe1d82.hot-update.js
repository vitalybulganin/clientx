webpackHotUpdate(0,{

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getSkills = getSkills;
	exports.saveSkills = saveSkills;
	exports.addSkill = addSkill;
	exports.updateSkill = updateSkill;
	exports.deleteSkill = deleteSkill;
	exports.findSkill = findSkill;
	
	var _constants = __webpack_require__(373);
	
	var types = _interopRequireWildcard(_constants);
	
	var _api = __webpack_require__(887);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getSkills() {
	    // return (dispatch) => {dispatch({type: types.GET_SKILLS, skills: [], loaded: false})};
	    return _api2.default.getSkills().then(function (_ref) {
	        var data = _ref.data;
	        dispatch({ type: types.GET_SKILLS, skills: data, loaded: false });
	    }).catch(function (_ref2) {
	        var err = _ref2.err;
	        return console.log(err);
	    });
	    // .catch(({err}) => {dispatch({type: types.LOAD_NOTES_FAIL, error: err})});
	}
	
	function saveSkills(skills) {
	    return function (dispatch) {
	        dispatch({ type: types.SAVE_SKILLS, skills: skills });
	    };
	}
	
	function addSkill(skill) {
	    var _this = this;
	
	    _api2.default.addSkill(skill).then(function () {
	        return _this.getSkills();
	    }).catch(function (err) {
	        return console.error(err);
	    });
	    /*
	        return {
	            type: types.ADD_SKILL,
	            skill
	        };
	    */
	}
	
	function updateSkill(skill) {
	    return {
	        type: types.UPDATE_SKILL,
	        skill: skill
	    };
	}
	
	function deleteSkill(skill) {
	    return {
	        type: types.DELETE_SKILL,
	        skill: skill
	    };
	}
	
	function findSkill(skill) {
	    return {
	        type: types.FIND_SKILL,
	        skill: skill
	    };
	}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL2FkbWluL3NraWxscy9hY3Rpb25zL2FjdGlvbnMuanM/ZDQzOSJdLCJuYW1lcyI6WyJnZXRTa2lsbHMiLCJzYXZlU2tpbGxzIiwiYWRkU2tpbGwiLCJ1cGRhdGVTa2lsbCIsImRlbGV0ZVNraWxsIiwiZmluZFNraWxsIiwidHlwZXMiLCJ0aGVuIiwiZGF0YSIsImRpc3BhdGNoIiwidHlwZSIsIkdFVF9TS0lMTFMiLCJza2lsbHMiLCJsb2FkZWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJTQVZFX1NLSUxMUyIsInNraWxsIiwiZXJyb3IiLCJVUERBVEVfU0tJTEwiLCJERUxFVEVfU0tJTEwiLCJGSU5EX1NLSUxMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1NBR2dCQSxTLEdBQUFBLFM7U0FTQUMsVSxHQUFBQSxVO1NBSUFDLFEsR0FBQUEsUTtTQVdBQyxXLEdBQUFBLFc7U0FRQUMsVyxHQUFBQSxXO1NBUUFDLFMsR0FBQUEsUzs7QUEzQ2hCOztLQUFZQyxLOztBQUNaOzs7Ozs7OztBQUVPLFVBQVNOLFNBQVQsR0FDUDtBQUNJO0FBQ0EsWUFBTyxjQUFJQSxTQUFKLEdBQ0ZPLElBREUsQ0FDRyxnQkFBYztBQUFBLGFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUFDQyxrQkFBUyxFQUFDQyxNQUFNSixNQUFNSyxVQUFiLEVBQXlCQyxRQUFRSixJQUFqQyxFQUF1Q0ssUUFBUSxLQUEvQyxFQUFUO0FBQWdFLE1BRGxGLEVBRUZDLEtBRkUsQ0FFSTtBQUFBLGFBQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLGdCQUFXQyxRQUFRQyxHQUFSLENBQVlGLEdBQVosQ0FBWDtBQUFBLE1BRkosQ0FBUDtBQUdJO0FBQ1A7O0FBRU0sVUFBU2QsVUFBVCxDQUFvQlcsTUFBcEIsRUFBNEI7QUFDL0IsWUFBTyxVQUFDSCxRQUFELEVBQWM7QUFBQ0Esa0JBQVMsRUFBQ0MsTUFBTUosTUFBTVksV0FBYixFQUEwQk4sY0FBMUIsRUFBVDtBQUE0QyxNQUFsRTtBQUNIOztBQUVNLFVBQVNWLFFBQVQsQ0FBa0JpQixLQUFsQixFQUNQO0FBQUE7O0FBQ0ksbUJBQUlqQixRQUFKLENBQWFpQixLQUFiLEVBQW9CWixJQUFwQixDQUF5QjtBQUFBLGdCQUFNLE1BQUtQLFNBQUwsRUFBTjtBQUFBLE1BQXpCLEVBQWlEYyxLQUFqRCxDQUF1RDtBQUFBLGdCQUFPRSxRQUFRSSxLQUFSLENBQWNMLEdBQWQsQ0FBUDtBQUFBLE1BQXZEO0FBQ0o7Ozs7OztBQU1DOztBQUVNLFVBQVNaLFdBQVQsQ0FBcUJnQixLQUFyQixFQUNQO0FBQ0ksWUFBTztBQUNIVCxlQUFNSixNQUFNZSxZQURUO0FBRUhGO0FBRkcsTUFBUDtBQUlIOztBQUVNLFVBQVNmLFdBQVQsQ0FBcUJlLEtBQXJCLEVBQ1A7QUFDSSxZQUFPO0FBQ0hULGVBQU1KLE1BQU1nQixZQURUO0FBRUhIO0FBRkcsTUFBUDtBQUlIOztBQUVNLFVBQVNkLFNBQVQsQ0FBbUJjLEtBQW5CLEVBQ1A7QUFDSSxZQUFPO0FBQ0hULGVBQU1KLE1BQU1pQixVQURUO0FBRUhKO0FBRkcsTUFBUDtBQUlILEUiLCJmaWxlIjoiMC4yYzJjZDg3NDYyNzc1Y2ZlMWQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vLi4vYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxscygpXG57XG4gICAgLy8gcmV0dXJuIChkaXNwYXRjaCkgPT4ge2Rpc3BhdGNoKHt0eXBlOiB0eXBlcy5HRVRfU0tJTExTLCBza2lsbHM6IFtdLCBsb2FkZWQ6IGZhbHNlfSl9O1xuICAgIHJldHVybiBhcGkuZ2V0U2tpbGxzKClcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7ZGlzcGF0Y2goe3R5cGU6IHR5cGVzLkdFVF9TS0lMTFMsIHNraWxsczogZGF0YSwgbG9hZGVkOiBmYWxzZX0pfSlcbiAgICAgICAgLmNhdGNoKCh7ZXJyfSkgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIC8vIC5jYXRjaCgoe2Vycn0pID0+IHtkaXNwYXRjaCh7dHlwZTogdHlwZXMuTE9BRF9OT1RFU19GQUlMLCBlcnJvcjogZXJyfSl9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTa2lsbHMoc2tpbGxzKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge2Rpc3BhdGNoKHt0eXBlOiB0eXBlcy5TQVZFX1NLSUxMUywgc2tpbGxzfSl9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpbGwoc2tpbGwpXG57XG4gICAgYXBpLmFkZFNraWxsKHNraWxsKS50aGVuKCgpID0+IHRoaXMuZ2V0U2tpbGxzKCkpLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuLypcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfU0tJTEwsXG4gICAgICAgIHNraWxsXG4gICAgfTtcbiovXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTa2lsbChza2lsbClcbntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfU0tJTEwsXG4gICAgICAgIHNraWxsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVNraWxsKHNraWxsKVxue1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9TS0lMTCxcbiAgICAgICAgc2tpbGxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNraWxsKHNraWxsKVxue1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkZJTkRfU0tJTEwsXG4gICAgICAgIHNraWxsXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcGFnZXMvYWRtaW4vc2tpbGxzL2FjdGlvbnMvYWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=