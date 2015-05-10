'use strict';

angular.module( 'angullax' )
	.directive( 'angullax', [ '$interpolate', '$timeout',
	 function ( $interpolate, $timeout ) {

		var postLinkFuc;

		postLinkFuc = function ( scope, elem, attrs, ctrl, transcludeFn ) {

			transcludeFn( function ( clone ) {
				var navItems = $( clone ).filter( 'section' ),
					pageId = 0;
				scope.navItems = [];

				angular.forEach( navItems, function ( item ) {
					var navItem = {};
					navItem.heading = $interpolate( angular.element( item ).attr( 'heading' ) )();
					navItem.id = 'page' + ( pageId++ );
					scope.navItems.push( navItem );
				} );

				$timeout( function () {
					var pages = $( elem ).find( '[data-role="page"]' );

					angular.forEach( navItems, function ( item, i ) {
						var el = angular.element( item );
						$( pages[ i ] ).css( 'background-color', ( '#' + el.attr( 'color' ) ) )
							.append( el.contents() );
					} );

					$( pages[ 0 ] ).css( 'padding-top', 60 );
				}, 0 );

			} );

			scope.selectedTab = 0;

			scope.goToPage = function ( index ) {
				$( 'html, body' ).animate( {
		          scrollTop: $( '#page' + index ).offset().top - 60
		        }, 1000 );

		        scope.selectedTab = index;
			};

		};

		return {
			templateUrl: 'views/angullax.html',
			restrict: 'E',
			replace: true,
			transclude: true,
			link: postLinkFuc,
			scope: {}
		};

	} ] );