var lisaSite = angular.module('lisaSite',['ngRoute']);
lisaSite.config[('$routeProvider', function($routeProvider){
$routeProvider
.when ('/about',{
	templateUrl:'partials/about.html',
	controller:'about'

})
.when ('/art',{
	templateUrl:'partials/art.html',
	controller:'art'

})
.when ('/design',{
	templateUrl:'partials/design.html',
	controller:'design'

})
.when ('/cv',{
	templateUrl:'partials/cv.html',
	controller:'design'

})
.when ('/contact',{
	templateUrl:'partials/contact.html',
	controller:'design'

});
}

});