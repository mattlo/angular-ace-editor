angular
.module('angular-ace-editor', [])
.directive('aceEditor', ['$rootScope', function ($rootScope) {

	var lastId = 0;

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var id = 'ace-editor-' + (++lastId);

			// set unique id
			element.attr('id', id);

			// emit object out
			$rootScope.$emit('aceEditor.init', ace.edit(id));
		}
	};
}]);
