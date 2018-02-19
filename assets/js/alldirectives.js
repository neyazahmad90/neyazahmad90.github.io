app
	.directive("topNavigation", [
		"$timeout",
		"$state",
		function($timeout, $state) {
			return {
				restrict: "E",
				templateUrl: "directives/topNavigation.html",
				link: function($scope, ele, attr) {
					$scope.allMenuItems = [
						{
							name: "Cataract",
							state: "cataract.about"
						},
						{
							name: "Lasik",
							state: "lasik.types"
						},
						{
							name: "Refractive Surgeries",
							state: "refractive.prelex.procedure"
						},
						{
							name: "Eye Care Services",
							state: "eyecareservices"
						},
						{
							name: "Book Appointment",
							state: "appointment"
						},
						// {
						// 	name: "65 Years of Expertise",
						// 	state: "milestones"
						// },
						// {
						// 	name: "Online Vision Test",
						// 	state: "visiontest.main"
						// },
						{
							name: "Mediclaim / Insurance",
							state: "mediclaim"
						},
						// {
						// 	name: "About Us",
						// 	state: null
						// },
						// {
						// 	name: "Media & Press",
						// 	state: null
						// },
						{
							name: "Testimonials",
							state: "testimonials"
						},
						{
							name: "FAQs",
							state: "faq"
						},
						{
							name: "Contact Us",
							state: "contactus"
						}
					];

					$scope.showhideFunc = function() {
						$timeout(function() {
							$scope.showFromScope = !$scope.showFromScope;
						}, 1600);
					};

					$scope.topNavGoToPage = function(state) {
						$scope.showBurgerMenu = false;
						$scope.hideFunc();
	                    window.scrollTo(0, 0);
						$state.go(state);
					};

					$scope.hideFunc = function() {
						$timeout(function() {
							$scope.showFromScope = false;
						}, 1600);
					}

					$scope.gotoPage = function(state) {
						$scope.showBurgerMenu = !$scope.showBurgerMenu;
						$scope.showhideFunc();
						if (state === "milestones" || state === "testimonials") {
							const _id = state === "milestones" ? 'years65' : 'reviews';
							if ($state.current.name === "name") {
								var elem = $('#'+_id);
								if (Object.keys(elem).length) {
								    var elem_top = elem.offset().top;
								    window.scrollTo(0, elem_top);
								} else {
								    window.scrollTo(0, 0);
								}
							} else {
								$state.go('home', { id: _id });
							}
						} else {
							window.scrollTo(0, 0);
							$state.go(state);
						}
					};
				}
			};
		}
	])
	.directive("swiperBottom", [
		function() {
			return {
				templateUrl: "directives/swiper-bottom.html",
				scope: {
					content: "=",
					swiperData: "=",
					sharingFunction: "&"
				}
			};
		}
	])
	.directive("mySwiperRepeat", [
		"$timeout",
		function($timeout) {
			return {
				link: function(scope, ele, att) {
					// if(scope.$last) {
					// 	var swiper = new Swiper('.swiper-container', {
					// 	    nextButton: '.swiper-button-next',
					// 	    prevButton: '.swiper-button-prev',
					// 	    slidesPerView: 2,
					// 	    centeredSlides: true,
					// 	    paginationClickable: true,
					// 	    spaceBetween: 50,
					// 	    initialSlide: 0,
					// 	    loop: true
					// 	});
					// }
				}
			};
		}
	])
	.directive("psrServices", ["$state",
		function($state) {
			return {
				templateUrl: "directives/homepage-services-card.html",
				replace: true,
				scope: {
					psrServiceData: "="
				},
				link: function(scope, attr, ele) {
					scope.service = scope.psrServiceData;
					console.log(scope.service);
					scope.openPage = function(stateName) {
						$state.go(stateName);
					}
				}
			};
		}
	])
	.directive("googleReviews", [
		"PlacesApi",
		function(PlacesApi) {
			return {
				restrict: "E",
				replace: true,
				scope: {},
				templateUrl: "directives/google-reviews.partial.html",
				link: function($scope, ele, attr) {
					PlacesApi.init();
					$scope.me = {
						name: "343"
					};
					var d = PlacesApi.search("ChIJ_3G-cduZyzsRatQsCXlBSsE");
					d.then(function(response) {
						console.log("resall ", response);
						$scope.details = response;
						$scope.reviews = $scope.details.reviews.filter(function(
							review
						) {
							return review.rating >= 4;
						});
					});
				}
			};
		}
	])
	.directive("userReview", [
		function() {
			return {
				restrict: "E",
				replace: true,
				scope: {
					reviewData: "="
				},
				templateUrl: "directives/user-review.partial.html",
				link: function(scope, attr, ele) {
					//scope.reviewData;
				}
			};
		}
	])
	.directive("ratingStars", [
		function() {
			return {
				restrict: "E",
				//replace: true,
				scope: {
					rating: "@"
				},
				templateUrl: "directives/rating-stars.partial.html",
				link: function($scope, ele, attr) {
					//$scope.ratingObj = scope.rating;
					converting = function(stringNum) {
						if (stringNum && stringNum.length) {
							var ratingNum = Math.round(stringNum);
							var ratingObj = [];
							for (var i = 1; i <= 5; i++) {
								if (i <= ratingNum)
									ratingObj.push({ star: true });
								else ratingObj.push({ star: false });
							}
							return ratingObj;
						} else return [];
					};
					//$scope.$watch(attr.rating,function(oldv,newv) {
					//if(oldv != newv)
					$scope.ratingData = converting($scope.rating);
					//	console.log(oldv,newv)
					//})
					//$scope.rating = parseInt($scope.rating);
					// $scope.getNumber = function(num) {
					// 	if(num && num.length) {
					// 		num = parseInt(num);
					// 		return new Array(num);
					// 	}
					//     else return new Array();
					// }
				}
			};
		}
	])
	.directive("myAccordian", [
		function() {
			return {
				templateUrl: "directives/accordians.html",
				scope: {
					faqList: "="
				},
				link: function(scope, ele, attr) {
					scope.accordionClick = function(name) {
						if (!$(name).hasClass("open")) {
							$(".card").removeClass("card-shadow");
							var openedAccords = $("[id^='collapse'].open");
							openedAccords.slideToggle();
							openedAccords.removeClass("open");
							$(name).slideToggle();
							$(name).addClass("open");
							$(name)
								.closest(".card")
								.addClass("card-shadow");
						}
					};
				}
			};
		}
	])
	.directive("appFooter", ["$state",
		function($state) {
			return {
				templateUrl: "directives/footer.html",
				scope: {},
				link: function($scope) {
					$scope.navigateToPage = function(state) {
						if (state === "milestones" || state === "testimonials") {
							const _id = state === "milestones" ? 'years65' : 'reviews';
							if ($state.current.name === "name") {
								var elem = $('#'+_id);
								if (Object.keys(elem).length) {
								    var elem_top = elem.offset().top;
								    window.scrollTo(0, elem_top);
								} else {
								    window.scrollTo(0, 0);
								}
							} else {
								$state.go('home', { id: _id});
							}
						} else {
							$state.go(state);
						}
					};
				}
			};
		}
	]);
