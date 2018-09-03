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
	        dispatcher.dispatch({ type: types.LOAD_NOTES_FAIL, error: err });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL2FkbWluL3NraWxscy9hY3Rpb25zL2FjdGlvbnMuanM/ZDQzOSJdLCJuYW1lcyI6WyJnZXRTa2lsbHMiLCJzYXZlU2tpbGxzIiwiYWRkU2tpbGwiLCJ1cGRhdGVTa2lsbCIsImRlbGV0ZVNraWxsIiwiZmluZFNraWxsIiwidHlwZXMiLCJ0aGVuIiwiZGF0YSIsImRpc3BhdGNoIiwidHlwZSIsIkdFVF9TS0lMTFMiLCJza2lsbHMiLCJsb2FkZWQiLCJjYXRjaCIsImVyciIsImRpc3BhdGNoZXIiLCJMT0FEX05PVEVTX0ZBSUwiLCJlcnJvciIsIlNBVkVfU0tJTExTIiwic2tpbGwiLCJjb25zb2xlIiwiVVBEQVRFX1NLSUxMIiwiREVMRVRFX1NLSUxMIiwiRklORF9TS0lMTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQkEsUyxHQUFBQSxTO1NBUUFDLFUsR0FBQUEsVTtTQUlBQyxRLEdBQUFBLFE7U0FXQUMsVyxHQUFBQSxXO1NBUUFDLFcsR0FBQUEsVztTQVFBQyxTLEdBQUFBLFM7O0FBMUNoQjs7S0FBWUMsSzs7QUFDWjs7Ozs7Ozs7QUFFTyxVQUFTTixTQUFULEdBQ1A7QUFDSTtBQUNBLFlBQU8sY0FBSUEsU0FBSixHQUNGTyxJQURFLENBQ0csZ0JBQWM7QUFBQSxhQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQ0Msa0JBQVMsRUFBQ0MsTUFBTUosTUFBTUssVUFBYixFQUF5QkMsUUFBUUosSUFBakMsRUFBdUNLLFFBQVEsS0FBL0MsRUFBVDtBQUFnRSxNQURsRixFQUVGQyxLQUZFLENBRUksaUJBQVc7QUFBQSxhQUFUQyxHQUFTLFNBQVRBLEdBQVM7QUFBQ0Msb0JBQVdQLFFBQVgsQ0FBb0IsRUFBQ0MsTUFBTUosTUFBTVcsZUFBYixFQUE4QkMsT0FBT0gsR0FBckMsRUFBcEI7QUFBK0QsTUFGL0UsQ0FBUDtBQUdIOztBQUVNLFVBQVNkLFVBQVQsQ0FBb0JXLE1BQXBCLEVBQTRCO0FBQy9CLFlBQU8sVUFBQ0gsUUFBRCxFQUFjO0FBQUNBLGtCQUFTLEVBQUNDLE1BQU1KLE1BQU1hLFdBQWIsRUFBMEJQLGNBQTFCLEVBQVQ7QUFBNEMsTUFBbEU7QUFDSDs7QUFFTSxVQUFTVixRQUFULENBQWtCa0IsS0FBbEIsRUFDUDtBQUFBOztBQUNJLG1CQUFJbEIsUUFBSixDQUFha0IsS0FBYixFQUFvQmIsSUFBcEIsQ0FBeUI7QUFBQSxnQkFBTSxNQUFLUCxTQUFMLEVBQU47QUFBQSxNQUF6QixFQUFpRGMsS0FBakQsQ0FBdUQ7QUFBQSxnQkFBT08sUUFBUUgsS0FBUixDQUFjSCxHQUFkLENBQVA7QUFBQSxNQUF2RDtBQUNKOzs7Ozs7QUFNQzs7QUFFTSxVQUFTWixXQUFULENBQXFCaUIsS0FBckIsRUFDUDtBQUNJLFlBQU87QUFDSFYsZUFBTUosTUFBTWdCLFlBRFQ7QUFFSEY7QUFGRyxNQUFQO0FBSUg7O0FBRU0sVUFBU2hCLFdBQVQsQ0FBcUJnQixLQUFyQixFQUNQO0FBQ0ksWUFBTztBQUNIVixlQUFNSixNQUFNaUIsWUFEVDtBQUVISDtBQUZHLE1BQVA7QUFJSDs7QUFFTSxVQUFTZixTQUFULENBQW1CZSxLQUFuQixFQUNQO0FBQ0ksWUFBTztBQUNIVixlQUFNSixNQUFNa0IsVUFEVDtBQUVISjtBQUZHLE1BQVA7QUFJSCxFIiwiZmlsZSI6IjAuNTcwZGMwNTliMTAyMmRjMjNmMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTa2lsbHMoKVxue1xuICAgIC8vIHJldHVybiAoZGlzcGF0Y2gpID0+IHtkaXNwYXRjaCh7dHlwZTogdHlwZXMuR0VUX1NLSUxMUywgc2tpbGxzOiBbXSwgbG9hZGVkOiBmYWxzZX0pfTtcbiAgICByZXR1cm4gYXBpLmdldFNraWxscygpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge2Rpc3BhdGNoKHt0eXBlOiB0eXBlcy5HRVRfU0tJTExTLCBza2lsbHM6IGRhdGEsIGxvYWRlZDogZmFsc2V9KX0pXG4gICAgICAgIC5jYXRjaCgoe2Vycn0pID0+IHtkaXNwYXRjaGVyLmRpc3BhdGNoKHt0eXBlOiB0eXBlcy5MT0FEX05PVEVTX0ZBSUwsIGVycm9yOiBlcnJ9KX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNraWxscyhza2lsbHMpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7ZGlzcGF0Y2goe3R5cGU6IHR5cGVzLlNBVkVfU0tJTExTLCBza2lsbHN9KX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTa2lsbChza2lsbClcbntcbiAgICBhcGkuYWRkU2tpbGwoc2tpbGwpLnRoZW4oKCkgPT4gdGhpcy5nZXRTa2lsbHMoKSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4vKlxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFERF9TS0lMTCxcbiAgICAgICAgc2tpbGxcbiAgICB9O1xuKi9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNraWxsKHNraWxsKVxue1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9TS0lMTCxcbiAgICAgICAgc2tpbGxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2tpbGwoc2tpbGwpXG57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NLSUxMLFxuICAgICAgICBza2lsbFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU2tpbGwoc2tpbGwpXG57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRklORF9TS0lMTCxcbiAgICAgICAgc2tpbGxcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9hZG1pbi9za2lsbHMvYWN0aW9ucy9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==