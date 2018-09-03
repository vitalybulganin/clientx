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
	        dispatch({ type: types.LOAD_NOTES_FAIL, error: err });
	    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL2FkbWluL3NraWxscy9hY3Rpb25zL2FjdGlvbnMuanM/ZDQzOSJdLCJuYW1lcyI6WyJnZXRTa2lsbHMiLCJzYXZlU2tpbGxzIiwiYWRkU2tpbGwiLCJ1cGRhdGVTa2lsbCIsImRlbGV0ZVNraWxsIiwiZmluZFNraWxsIiwidHlwZXMiLCJ0aGVuIiwiZGF0YSIsImRpc3BhdGNoIiwidHlwZSIsIkdFVF9TS0lMTFMiLCJza2lsbHMiLCJsb2FkZWQiLCJjYXRjaCIsImVyciIsIkxPQURfTk9URVNfRkFJTCIsImVycm9yIiwiU0FWRV9TS0lMTFMiLCJza2lsbCIsImNvbnNvbGUiLCJVUERBVEVfU0tJTEwiLCJERUxFVEVfU0tJTEwiLCJGSU5EX1NLSUxMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1NBR2dCQSxTLEdBQUFBLFM7U0FRQUMsVSxHQUFBQSxVO1NBSUFDLFEsR0FBQUEsUTtTQVdBQyxXLEdBQUFBLFc7U0FRQUMsVyxHQUFBQSxXO1NBUUFDLFMsR0FBQUEsUzs7QUExQ2hCOztLQUFZQyxLOztBQUNaOzs7Ozs7OztBQUVPLFVBQVNOLFNBQVQsR0FDUDtBQUNJO0FBQ0EsWUFBTyxjQUFJQSxTQUFKLEdBQ0ZPLElBREUsQ0FDRyxnQkFBYztBQUFBLGFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUFDQyxrQkFBUyxFQUFDQyxNQUFNSixNQUFNSyxVQUFiLEVBQXlCQyxRQUFRSixJQUFqQyxFQUF1Q0ssUUFBUSxLQUEvQyxFQUFUO0FBQWdFLE1BRGxGLEVBRUZDLEtBRkUsQ0FFSSxpQkFBVztBQUFBLGFBQVRDLEdBQVMsU0FBVEEsR0FBUztBQUFDTixrQkFBUyxFQUFDQyxNQUFNSixNQUFNVSxlQUFiLEVBQThCQyxPQUFPRixHQUFyQyxFQUFUO0FBQW9ELE1BRnBFLENBQVA7QUFHSDs7QUFFTSxVQUFTZCxVQUFULENBQW9CVyxNQUFwQixFQUE0QjtBQUMvQixZQUFPLFVBQUNILFFBQUQsRUFBYztBQUFDQSxrQkFBUyxFQUFDQyxNQUFNSixNQUFNWSxXQUFiLEVBQTBCTixjQUExQixFQUFUO0FBQTRDLE1BQWxFO0FBQ0g7O0FBRU0sVUFBU1YsUUFBVCxDQUFrQmlCLEtBQWxCLEVBQ1A7QUFBQTs7QUFDSSxtQkFBSWpCLFFBQUosQ0FBYWlCLEtBQWIsRUFBb0JaLElBQXBCLENBQXlCO0FBQUEsZ0JBQU0sTUFBS1AsU0FBTCxFQUFOO0FBQUEsTUFBekIsRUFBaURjLEtBQWpELENBQXVEO0FBQUEsZ0JBQU9NLFFBQVFILEtBQVIsQ0FBY0YsR0FBZCxDQUFQO0FBQUEsTUFBdkQ7QUFDSjs7Ozs7O0FBTUM7O0FBRU0sVUFBU1osV0FBVCxDQUFxQmdCLEtBQXJCLEVBQ1A7QUFDSSxZQUFPO0FBQ0hULGVBQU1KLE1BQU1lLFlBRFQ7QUFFSEY7QUFGRyxNQUFQO0FBSUg7O0FBRU0sVUFBU2YsV0FBVCxDQUFxQmUsS0FBckIsRUFDUDtBQUNJLFlBQU87QUFDSFQsZUFBTUosTUFBTWdCLFlBRFQ7QUFFSEg7QUFGRyxNQUFQO0FBSUg7O0FBRU0sVUFBU2QsU0FBVCxDQUFtQmMsS0FBbkIsRUFDUDtBQUNJLFlBQU87QUFDSFQsZUFBTUosTUFBTWlCLFVBRFQ7QUFFSEo7QUFGRyxNQUFQO0FBSUgsRSIsImZpbGUiOiIwLmQyNTc5MmFlYThjNjA2MmM1ZTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi8uLi8uLi9hcGknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGxzKClcbntcbiAgICAvLyByZXR1cm4gKGRpc3BhdGNoKSA9PiB7ZGlzcGF0Y2goe3R5cGU6IHR5cGVzLkdFVF9TS0lMTFMsIHNraWxsczogW10sIGxvYWRlZDogZmFsc2V9KX07XG4gICAgcmV0dXJuIGFwaS5nZXRTa2lsbHMoKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtkaXNwYXRjaCh7dHlwZTogdHlwZXMuR0VUX1NLSUxMUywgc2tpbGxzOiBkYXRhLCBsb2FkZWQ6IGZhbHNlfSl9KVxuICAgICAgICAuY2F0Y2goKHtlcnJ9KSA9PiB7ZGlzcGF0Y2goe3R5cGU6IHR5cGVzLkxPQURfTk9URVNfRkFJTCwgZXJyb3I6IGVycn0pfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2tpbGxzKHNraWxscykge1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtkaXNwYXRjaCh7dHlwZTogdHlwZXMuU0FWRV9TS0lMTFMsIHNraWxsc30pfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNraWxsKHNraWxsKVxue1xuICAgIGFwaS5hZGRTa2lsbChza2lsbCkudGhlbigoKSA9PiB0aGlzLmdldFNraWxscygpKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbi8qXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX1NLSUxMLFxuICAgICAgICBza2lsbFxuICAgIH07XG4qL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2tpbGwoc2tpbGwpXG57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1NLSUxMLFxuICAgICAgICBza2lsbFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVTa2lsbChza2lsbClcbntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfU0tJTEwsXG4gICAgICAgIHNraWxsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTa2lsbChza2lsbClcbntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5GSU5EX1NLSUxMLFxuICAgICAgICBza2lsbFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL2FkbWluL3NraWxscy9hY3Rpb25zL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9