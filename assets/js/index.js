var app = angular.module("psrApp", ["ui.router"]);
app.constant("DEBUG_MODE", true);
app.constant("DEPLOY_MODE", "DEVELOPER");
app.config([
    "$stateProvider",
    "$urlRouterProvider",
    "$compileProvider",
    "DEBUG_MODE",
    function($stateProvider, $urlRouterProvider, $compileProvider, DEBUG_MODE) {
        $stateProvider
            .state("home", {
                url: "/",
                params: {
                    id: null
                },
                templateUrl: "home.html",
                controller: function($scope, $rootScope, Page, $state, $window, $stateParams) {
                    Page.setTitle("Home Page");
                    $rootScope.bodyClass = "bg-purple";
                    $scope.sharingImage = '';
                    $scope.sharingText = '';
                    $scope.volume = false;
                    console.log("$stateParams", $stateParams);
                    if ($stateParams.id && $stateParams.id != '') {
                        var elem = $('#' + $stateParams.id);
                        if (Object.keys(elem).length) {
                            var elem_top = elem.offset().top;
                            window.scrollTo(0, elem_top);
                        } else {
                            window.scrollTo(0, 0);
                        }
                    } else {
                        window.scrollTo(0, 0);
                    }
                    // $rootScope.changeRoute = function (stateName) {
                    //     $state.go(stateName);
                    // }
                    $scope.setSharingInfo = function(data) {
                        if (window.location.origin === "https://codertoon.github.io") {
                            $scope.sharingImage = encodeURIComponent(window.location.origin + "/psr/" + data.src);
                        } else
                            $scope.sharingImage = encodeURIComponent(window.location.origin + "/" + data.src);
                        $scope.sharingText = encodeURIComponent(data.text + ' ' + window.location.href);
                        $('.bd-example-modal-sm').modal('show');
                        console.log(data);
                    }

                    $scope.muteToggler = function() {
                        $scope.volume = !$scope.volume;
                        var iclvideo = $('#visianicl_video')[0];
                        iclvideo.muted = !$scope.volume;
                    }

                    angular.element($window).bind("scroll", function(e) {
                        if ($('app-footer .m-cataract-bottom-footer').visible() === true) {
                            //setTimout(function() {
                            $('.pink-section').css('position', 'relative');
                            //})
                        } else {
                            $('.pink-section').css('position', 'initial');
                        }
                    });

                    $scope.allPsrServices = [{
                            icon: "images/cataract.svg",
                            heading: "Cataract Surgery",
                            description: "An outpatient procedure to treat clouding of the natural lens of the eye.",
                            state: "cataract.about"
                        },
                        {
                            icon: "images/lasik.svg",
                            heading: "Refractive Surgeries",
                            description: "A precise, safe, and popular method to vision correction.",
                            state: "refractive.prelex.procedure"
                        },
                        {
                            icon: "images/eyecareservices.svg",
                            heading: "Eye Care Services",
                            description: "Minor procedures to correct common eye problems.",
                            state: "eyecareservices"
                        }
                    ];

                    $scope.swipers = [{
                            src: "images/1-min.jpg",
                            text: `Dr. Siva Reddy with Shri B. D. Jatti, Acting President of India after receiving "Padma Bhushan" award at Rashtrapathi Bhavan (1977)`
                        },
                        {
                            src: "images/siva-indra-gandhi.jpg",
                            text: `Padma Bhusan Prof. Dr. P Seva Reddy with Mrs. Indra Gandhi and Akkineni Nageswara Rao.`
                        },
                        {
                            src: "images/2-min.jpg",
                            text: `On the initiative of Dr. Siva Reddy, a separate Children's Ward was constructed at the S. D. Eye Hospital. 
                    Seen in the picture is President Giri looking at a patient closely, with Dr. Siva Reddy and late Shri Khandubhai Desai. Governor (extreme left)`
                        },
                        {
                            src: "images/3-min.jpg",
                            text: `Dr.Siva Reddy with Sri.B.V. Subba Reddy, Deputy Chief Minister, A.P. at the Southern Regional Conference (1971)`
                        },
                        {
                            src: "images/4-min.jpg",
                            text: `Dr.Siva Reddy with Prof. Fyodorav in the Operation Theatre at the Eye Institute, Moscow.`
                        },
                        {
                            src: "images/5-min.jpg",
                            text: `Dr.Reddy sharing Information, Knowledge and Experience at All India Radio`
                        },
                        {
                            src: "images/6-min.jpg",
                            text: `Dr.Reddy at the Conference of Asia Pacific Academy of Opthalmology, Bali, Indonesia,1976`
                        },
                        {
                            src: "images/7-min.jpg",
                            text: `Dr.Siva Reddy with Sir John Wilson, President of the Royal Commonwealth Society for the Blind in London, 1978`
                        },
                        {
                            src: "images/8-min.jpg",
                            text: `Dr.Reddy receiving the Certificate for the Fellowship of Academy of Medical Sciences`
                        },
                        {
                            src: "images/9-min.jpg",
                            text: `It's the Memento Awarded to Dr.Reddy at the World Telugu Conference,1974`
                        },
                        {
                            src: "images/10-min.jpg",
                            text: `Dr.Reddy at the meeting of Asia-Pacific Academy of Ophthalmology at Melbourne, Australia`
                        },
                        {
                            src: "images/11-min.jpg",
                            text: `Dr.Reddy at the International Ophthalmic Conference at Munich,W-Germany`
                        },
                        {
                            src: "images/12-min.jpg",
                            text: `Dr.Reddy Receiving the Adenwalla Oration Gold Medal, 1974`
                        },
                        {
                            src: "images/13-min.jpg",
                            text: `Dr.Reddy with Prof.Leydhecker of West Germany at Sarojini Devi Hospital,Hyderabad,1969`
                        },
                        {
                            src: "images/14-min.jpg",
                            text: `Dr.Reddy and President Fakhruddin Ali Ahmed in a happy mood at Rashtrapathi Bhavan. He had been Honorary Surgeon to the President since 1969`
                        },
                        {
                            src: "images/15-min.jpg",
                            text: `Dr.P S Reddy's Charitable Rest House for Patients and Attendants at Sarojini Devi Eye Hospital,Hyderabad. Foundation Stone Laid by Shri V.V. Giri,President of India on 24-09-1971`
                        }
                    ];
                }
            })
            .state("milestones", {
                url: "/milestones",
                templateUrl: "milestones.html",
                controller: function($scope, $rootScope, Page) {
                    Page.setTitle("Milestones");
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "";

                    //$scope.$emit("MyEvent","pikachu");
                }
            })
            .state("cataract", {
                url: "/cataract",
                abstract: true,
                views: {
                    "": {
                        templateUrl: "cataract.html",
                        controller: function(
                            $scope,
                            $rootScope,
                            Page,
                            $timeout
                        ) {
                            window.scrollTo(0, 0);
                            Page.setTitle("Cataract");
                            $rootScope.bodyClass = "";
                            $scope.$on("$viewContentLoaded", function() {
                                //Here your view content is fully loaded !!
                                $timeout(function() {
                                    $("ul.m-lasik-content-headings li").each(
                                        function(index, eachValue) {
                                            var eachSpans = $(eachValue).find(
                                                "> div > span"
                                            );
                                            if (eachSpans && eachSpans.length) {
                                                var span = eachSpans[0];
                                                const eachSpanWidth =
                                                    span.attributes[
                                                        "data-width"
                                                    ].value;
                                                if (
                                                    eachValue.classList.contains(
                                                        "active"
                                                    )
                                                ) {
                                                    span.style.left =
                                                        "calc(100% - " +
                                                        eachSpanWidth +
                                                        "px)";
                                                } else {
                                                    span.style.left = "0px";
                                                }
                                            }
                                        }
                                    );
                                }, 100);
                            });
                        }
                    }
                }
            })
            .state("cataract.about", {
                url: "",
                views: {
                    "about@cataract": {
                        templateUrl: "directives/cataract/cataract-bottom-about.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("cataract.decisions", {
                url: "",
                views: {
                    "decisions@cataract": {
                        templateUrl: "directives/cataract/cataract-bottom-decisions.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("cataract.outcomes", {
                url: "",
                views: {
                    "outcomes@cataract": {
                        templateUrl: "directives/cataract/cataract-bottom-outcomes.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("cataract.stepbystep", {
                url: "",
                views: {
                    "stepbystep@cataract": {
                        templateUrl: "directives/cataract/cataract-bottom-stepbystep.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("cataract.postopcare", {
                url: "",
                views: {
                    "postopcare@cataract": {
                        templateUrl: "directives/cataract/cataract-bottom-postopcare.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("cataract.consult", {
                url: "",
                views: {
                    "consult@cataract": {
                        templateUrl: "directives/lasik/lasik-consult.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive", {
                url: "/refractive",
                abstract: true,
                templateUrl: "refractive.html",
                controller: function(
                    $scope,
                    $rootScope,
                    Page,
                    $timeout
                ) {
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "refractive-page";
                    Page.setTitle("Refractive Surgery");
                    $scope.volume = false;
                    $scope.$on("$viewContentLoaded", function() {
                        //Here your view content is fully loaded !!
                        $timeout(function() {
                            $("ul.m-lasik-content-headings li").each(
                                function(index, eachValue) {
                                    var eachSpans = $(eachValue).find(
                                        "> div > span"
                                    );
                                    if (eachSpans && eachSpans.length) {
                                        var span = eachSpans[0];
                                        const eachSpanWidth =
                                            span.attributes[
                                                "data-width"
                                            ].value;
                                        if (
                                            eachValue.classList.contains(
                                                "active"
                                            )
                                        ) {
                                            span.style.left =
                                                "calc(100% - " +
                                                eachSpanWidth +
                                                "px)";
                                        } else {
                                            span.style.left = "0px";
                                        }
                                    }
                                }
                            );
                        }, 100);
                    });
                    $scope.muteToggler = function() {
                        $scope.volume = !$scope.volume;
                        var iclvideo = $('#visianicl_video')[0];
                        iclvideo.muted = !$scope.volume;
                    }
                }
            })
            .state("refractive.prelex", {
                views: {
                    '': {
                        templateUrl: 'directives/refractive/prelex_partial.html',
                        controller: function($state) {}
                    }
                }
            })
            .state("refractive.prelex.procedure", {
                url: '',
                views: {
                    'procedure': {
                        templateUrl: "directives/prelex/prelex-procedure.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.prelex.benefits", {
                url: "",
                views: {
                    "benefits": {
                        templateUrl: "directives/prelex/prelex-benefits.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.prelex.recovery", {
                url: "",
                views: {
                    "recovery": {
                        templateUrl: "directives/prelex/prelex-recovery.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.prelex.consult", {
                url: "",
                views: {
                    "consult": {
                        templateUrl: "directives/lasik/lasik-consult.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.lasik2", {
                views: {
                    '': {
                        templateUrl: 'directives/refractive/lasik_partial.html',
                        controller: function($state) {}
                    }
                }
            })
            .state("refractive.lasik2.types", {
                url: '',
                views: {
                    'types': {
                        templateUrl: "directives/lasik/lasik-types.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.lasik2.outcomes", {
                url: "",
                views: {
                    "outcomes": {
                        templateUrl: "directives/lasik/lasik-outcomes.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.lasik2.postopcare", {
                url: "",
                views: {
                    "postopcare": {
                        templateUrl: "directives/lasik/lasik-postopcare.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.lasik2.stepbystep", {
                url: "",
                views: {
                    "stepbystep": {
                        templateUrl: "directives/lasik/lasik-stepbystep.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.lasik2.consult", {
                url: "",
                views: {
                    "consult": {
                        templateUrl: "directives/lasik/lasik-consult.html",
                        controller: function($scope) {}
                    }
                }
            })
            
            .state("refractive.visianicl", {
                views: {
                    '': {
                        templateUrl: 'directives/refractive/visianicl_partial.html',
                        controller: function($state) {}
                    }
                }
            })
            .state("refractive.visianicl.procedure", {
                url: '',
                views: {
                    'procedure': {
                        templateUrl: "directives/visianicl/visianicl-procedure.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.visianicl.benefits", {
                url: "",
                views: {
                    "benefits": {
                        templateUrl: "directives/visianicl/visianicl-benefits.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.visianicl.recovery", {
                url: "",
                views: {
                    "recovery": {
                        templateUrl: "directives/visianicl/visianicl-recovery.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("refractive.visianicl.consult", {
                url: "",
                views: {
                    "consult": {
                        templateUrl: "directives/lasik/lasik-consult.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("lasik", {
                url: "/lasik",
                abstract: true,
                views: {
                    "": {
                        templateUrl: "lasik.html",
                        controller: function(
                            $scope,
                            $rootScope,
                            Page,
                            $timeout
                        ) {
                            window.scrollTo(0, 0);
                            $rootScope.bodyClass = "";
                            Page.setTitle("Advanced Lasik Surgery");
                            $scope.$on("$viewContentLoaded", function() {
                                //Here your view content is fully loaded !!
                                $timeout(function() {
                                    $("ul.m-lasik-content-headings li").each(
                                        function(index, eachValue) {
                                            var eachSpans = $(eachValue).find(
                                                "> div > span"
                                            );
                                            if (eachSpans && eachSpans.length) {
                                                var span = eachSpans[0];
                                                const eachSpanWidth =
                                                    span.attributes[
                                                        "data-width"
                                                    ].value;
                                                if (
                                                    eachValue.classList.contains(
                                                        "active"
                                                    )
                                                ) {
                                                    span.style.left =
                                                        "calc(100% - " +
                                                        eachSpanWidth +
                                                        "px)";
                                                } else {
                                                    span.style.left = "0px";
                                                }
                                            }
                                        }
                                    );
                                }, 100);
                            });
                        }
                    }
                }
            })
            .state("lasik.types", {
                url: "",
                views: {
                    "types@lasik": {
                        templateUrl: "directives/lasik/lasik-types.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("lasik.outcomes", {
                url: "",
                views: {
                    "outcomes@lasik": {
                        templateUrl: "directives/lasik/lasik-outcomes.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("lasik.postopcare", {
                url: "",
                views: {
                    "postopcare@lasik": {
                        templateUrl: "directives/lasik/lasik-postopcare.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("lasik.stepbystep", {
                url: "",
                views: {
                    "stepbystep@lasik": {
                        templateUrl: "directives/lasik/lasik-stepbystep.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("lasik.consult", {
                url: "",
                views: {
                    "consult@lasik": {
                        templateUrl: "directives/lasik/lasik-consult.html",
                        controller: function($scope) {}
                    }
                }
            })
            .state("visiontest", {
                url: "/visiontest",
                abstract: true,
                views: {
                    "": {
                        templateUrl: "vision1.html",
                        controller: function(
                            $scope,
                            $rootScope,
                            Page,
                            $timeout
                        ) {
                            $rootScope.bodyClass = "";
                            window.scrollTo(0, 0);
                            Page.setTitle("Vision Test");
                        }
                    }
                }
            })
            .state("visiontest.main", {
                url: "",
                views: {
                    "main@visiontest": {
                        templateUrl: "directives/visiontest/main.html",
                        controller: function($scope, $state) {
                            $scope.goToTest = function(isAcceptedTnC) {
                                if (isAcceptedTnC) {
                                    $state.go("visiontest.testpage");
                                }
                            };
                        }
                    }
                }
            })
            .state("visiontest.testpage", {
                url: "",
                views: {
                    "testpage@visiontest": {
                        templateUrl: "directives/visiontest/testpage.html",
                        controller: function($scope) {
                            $scope.testpage = 1;

                            $scope.changePage = function(pageno) {
                                $scope.testpage = pageno;
                            };
                        }
                    }
                }
            })
            .state("appointment", {
                url: "/appointment",
                templateUrl: "appointment.html",
                controller: function($scope, $rootScope, Page) {
                    window.scrollTo(0, 0);
                    Page.setTitle("Appointment Booking");
                    $rootScope.bodyClass = "";
                }
            })
            .state("contactus", {
                url: "/contactus",
                templateUrl: "contactus.html",
                controller: function($scope, $rootScope) {
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "hide-scrollbar-x";
                }
            })
            .state("mediclaim", {
                url: "/mediclaim",
                templateUrl: "mediclaim.html",
                controller: function($scope, $rootScope) {
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "hide-scrollbar-x";
                }
            })
            .state("privacypolicy", {
                url: "/privacy-policy",
                templateUrl: "privacypolicy.html",
                controller: function($scope, $rootScope) {
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "hide-scrollbar-x";
                }
            })
            .state("faq", {
                url: "/faq",
                templateUrl: "faq.html",
                controller: function($scope, $rootScope) {
                    window.scrollTo(0, 0);
                    $rootScope.bodyClass = "";
                    $scope.cataractFAQ = [{
                            question: "I have cataracts in both eyes. Will the surgery be done on both eyes at the same time?",
                            answer: "No, only one eye will be operated on at a time. Typically, we will perform surgery on the second eye one or two weeks after the first eye. All patients are different and heal at different rates, so talk to our doctors about what is appropriate for you."
                        },
                        {
                            question: "Does the surgery hurt?",
                            answer: "Thanks to strong numbing drops and medications to help you relax, surgery involves minimal to no discomfort. It is normal to experience some soreness for the first 24-48 hours after surgery, but significant pain is rare and should be reported to your doctor right away."
                        },
                        {
                            question: "Will I be asleep for the surgery?",
                            answer: "Since this procedure does not take very long, it is unnecessary to put you to sleep with general anesthesia. A relaxing pill is available to ensure a stress free experience."
                        },
                        {
                            question: "Who performs the procedure?",
                            answer: "Dr. H. Siva Mohan Reddy, a national board certified opthalmologist, with 17 Years of Experience and performing more than 30,000 procedures in Cataract and refractive procedure will perform the procedure."
                        },
                        {
                            question: "How long will I be in surgery?",
                            answer: "The surgery itself is very quick and usually lasts less than 30 minutes. However, due to pre-operative preparation and brief post-op recovery, your entire stay in the surgical centre may be up to 2 hours."
                        },
                        {
                            question: "Can I drive myself to and from the surgical center on the day of surgery?",
                            answer: "No. Even if you elect not to take the relaxing medication before surgery, your vision may be blurry in the operative eye (due to dilation and anesthesia) and may not be suitable for driving. You must arrange for transportation to and from the surgical center."
                        },
                        {
                            question: "How long before I can see after the surgery?",
                            answer: "You will be able to see immediately after the surgery, but the vision may be still blurry. Every patient and eye is different, but patients commonly see well enough to drive one day after surgery."
                        },
                        {
                            question: "How long until I can return to normal activities?",
                            answer: "Most patients can resume normal basic activities like reading and watching TV by the next day, and return to work within a couple of days. However, results vary for different patients, so you should ask our doctors if you have questions about specific activities. We usually recommend that the patient avoid rubbing the eye, engaging in activities like sports where an object could hit the eye, getting dust, dirt or sand into the eye, swimming or wearing make up for up to two weeks after surgery. You may exercise if you avoid letting sweat run directly on your eyes."
                        },
                        {
                            question: "After surgery, will I be able to drive at night?",
                            answer: "Your ability to drive at night should be much enhanced once your cataract is removed. Patients with a multifocal lens implant may notice rings of light around headlights and other light sources. Most patients with any type of lens implant notice halos and starbursts around lights for the first few nights after surgery. These are typically mild, rarely bothersome, and tend to diminish with time."
                        },
                        {
                            question: "Will I need glasses after my cataract surgery?",
                            answer: "It depends on many factors. After standard cataract surgery, most patients need to wear glasses for distance, near or both. After Multifocal IOL implantation, you will be less dependent on glasses for all distances."
                        },
                        {
                            question: "If I need glasses after the surgery, how soon can I get a prescription?",
                            answer: "You can get a temporary prescription within days after surgery. The eye typically takes 3-4 weeks to stabilize after IOL implantation. It is recommended that you wait until then to have any permanent glasses made."
                        },
                        {
                            question: "If I elect to have LASIK after cataract surgery, how soon can I have it?",
                            answer: "We wait for a minimum of 3 months after your surgery to give the eye adequate time to heal before performing any additional surgery on it. Your eye doctor will be able to determine when you are ready for LASIK."
                        },
                        {
                            question: "Can my cataract come back?",
                            answer: "No, once a cataract has been removed it cannot return. However, with time, patients may complain that their vision has once again become cloudy. This fairly common condition is known as posterior capsular opacity or “PCO”. If the PCO becomes bothersome, the surgeon can clear it away with a simple laser procedure performed in the office."
                        },
                        {
                            question: "Does the lens implant ever need to be replaced?",
                            answer: "The lens implant is intended to be permanent and does not need to be replaced under normal circumstances. Although this would be unlikely, the lens implant can be replaced with a different one if needed."
                        },
                        {
                            question: "Who do I call if I have a problem?",
                            answer: "Contact our office immediately if you have any problem, especially if you experience decreased vision or pain. +91 8096 665 550   |   +91 8099 950 055   |   info@psreyehospital.com"
                        },
                        {
                            question: "Can I bathe after surgery?",
                            answer: "Yes you can. You can bathe from the neck down and wipe your face with the wet cloth from the first day itself. You just have to avoid splashing water into the operated eye."
                        },
                        {
                            question: "What’s the best season to get cataract surgery done?",
                            answer: "With advanced cataract removal technology and medication available at PSR (Dr. P Siva Reddy Eye Hospital) , cataract surgery is safe to be done in any season."
                        },
                        {
                            question: "Should cataract be allowed to ripen or mature for getting operated?",
                            answer: "With an advanced surgical technology available at PSR ( Dr. P Siva Reddy Hospital ), cataract can be diagonised and removed at any stage when it affects your daily activity. Waiting for it to mature can lead to complications."
                        },
                        {
                            question: "Can surgery be avoided to cure cataract?",
                            answer: "No. Currently, surgery is the only effective treatment for cataract."
                        },
                        {
                            question: "How much time does it take to recover from a cataract surgery?",
                            answer: "Just one day. Modern day cataract surgery is a day care procedure with fast recovery and with minimal impact on daily routine. You just have to follow the directions shared by the doctor."
                        },
                        {
                            question: "What will happen if cataract is left untreated?",
                            answer: "It may lead to blindness. It is advisable to remove cataract as soon as it affects your vision. If left untreated, it may lead to loss of vision."
                        },
                        {
                            question: "Can I get cataract surgery done with pre-existing conditions like hypertension or diabetes?",
                            answer: "With advanced properative planning, adherence to the instructions and post-operative medication, cataract surgery can be safely performed even in hypertensive and diabetic patients as long as it is well controlled."
                        }
                    ];
                    $scope.lasikFAQ = [{
                            question: "What is LASIK?",
                            answer: "LASIK is an outpatient surgical procedure that reshapes the curvature of the cornea. The name is an acronym for Laser In-Situ Keratomileusis."
                        },
                        {
                            question: "How long does the LASIK procedure take?",
                            answer: "The surgical process itself is very quick, usually under 15 minutes for each eye. The actual laser treatment time is only a matter of seconds. Including surgery preparations, you should plan to be at our LASIK center for approximately 2 hours."
                        },
                        {
                            question: "Can LASIK be performed on both eyes on the same day?",
                            answer: "Yes."
                        },
                        {
                            question: "Why do I need to stop wearing contact lenses prior to my LASIK preoperative testing?",
                            answer: "Contact lenses can change the shape of your cornea, similar to how a tight fitting watchband can make a skin imprint on your wrist. If you have your eyes checked too soon after taking out contacts, the cornea will not have enough time to relax to its natural shape. Several of the tests could give inaccurate results."
                        },
                        {
                            question: "If I am pregnant or nursing, how long must I wait to have High Definition LASIK?",
                            answer: "Six weeks not pregnant and/or not breast-feeding."
                        },
                        {
                            question: "Who is a LASIK candidate?",
                            answer: "The ideal LASIK candidates are persons over 18 years of age with healthy corneas and realistic expectations. People with certain medical conditions and women who are pregnant or nursing are not candidates for LASIK."
                        },
                        {
                            question: "How much work will I have to miss?",
                            answer: "Many patients return to work in approximately a week. It depends on the nature of your work and your healing process. Most patients resume normal activities the next day."
                        },
                        {
                            question: "Are my eyes patched following the LASIK procedure?",
                            answer: "No. You will be given post-LASIK instructions and an eye shields to wear when sleeping immediately following your LASIK procedure."
                        },
                        {
                            question: "When can I exercise after LASIK?",
                            answer: "5 days following your procedure. Do not let dirty sweat go on the surface of your eyes. A sweat band is suggested to avoid this."
                        },
                        {
                            question: "Why is bladeless LASIK considered “standard of care” at the PSR Hospital?",
                            answer: "Bladeless LASIK is considered by our surgeons to be a safer and more precise approach to vision correction surgery. This is a result of the superior precision of a computer controlled laser as compared to that of a hand-held bladed mechanical device. Bladeless LASIK accomplishes the flap procedure with a laser instead of a blade."
                        },
                        {
                            question: "Do you offer the SMILE procedure?",
                            answer: "Yes! The PSR Hospital offers its patients the newest laser vision correction procedure, “SMILE”. SMILE is an acronym that stands for “Small-Incision Lenticule Extraction” This procedure offers patients with myopia and slight astigmatism a flapless alternative to traditional LASIK."
                        }
                    ];
                    $scope.cataractActive = true;
                }
            })
            .state("eyecareservices", {
                url: '/services',
                templateUrl: 'eyecareservices.html',
                controller: function($rootScope, $scope, Page) {
                    window.scrollTo(0, 0);
                    Page.setTitle("Appointment Booking");
                    $rootScope.bodyClass = "";
                    $scope.windowWidth = window.innerWidth;

                    $scope.blank = '';
                    $scope.servicesObj = [{
                            pointNumber: "01",
                            serviceName: "Systemic Diseases' effects on eyes",
                            serviceDetails: "Systemic Diseases like Diabetis, Hypertension, Hormonal Related, Allergic like Sjogrens, Rheumatoid Diseases and their Effects in the Eye are Carefully Evaluated, Investigated with the Most Modern Equipment and Stringent Clinical Protocol.",
                            serviceImage: 'images/eyecareservices/sytemic-diseases-min.png',
                            smallSquare: 'bg-gold',
                            bigSquare: 'bg-skyblue',
                            isActive: true
                        },
                        {
                            pointNumber: "02",
                            serviceName: "Glaucoma Evaluation",
                            serviceDetails: "Glaucoma Evaluation to detect even the slightest fluctuation away from normal can be accurately detected, investigated and treated using the upto date trends in the ever changing field of ccular care.",
                            serviceImage: 'images/eyecareservices/glaucoma-min.jpg',
                            smallSquare: 'bg-lightgreen',
                            bigSquare: 'bg-royalblue',
                            isActive: false
                        },
                        {
                            pointNumber: "03",
                            serviceName: "Ocular Diagnostics",
                            serviceDetails: "Ocular diagnostics like immersion Biometry, Pachymetry, Keratometry, Applanation Tonometry, Visual Field Analysis, Fundus Angiography, Optical Coherence Tomography, Slit lamp, Corneal Topography(Sirius Topography) and Fundus Digital Imaging are avaiable to our patients",
                            serviceImage: 'images/eyecareservices/ocular-diagnostics-min.png',
                            smallSquare: 'bg-lightblue',
                            bigSquare: 'bg-cyan',
                            isActive: false
                        },
                        {
                            pointNumber: "04",
                            serviceName: "Oculoplasty Services",
                            serviceDetails: "Oculoplasty services like Lid repairs and Lacrimal surgeries are also undertaken here at our prestigious and world class eye care centre.",
                            serviceImage: 'images/eyecareservices/portrait-min.png',
                            smallSquare: 'bg-skyblue',
                            bigSquare: 'bg-gold',
                            isActive: false
                        },
                        {
                            pointNumber: "05",
                            serviceName: "Infant/Child Eye Care",
                            serviceDetails: "Paediatric eye evaluation ranging from neonates to children is available at our facility. Adequate education is imparted to the parents to enable them to take better preventive care of their child. Common problems like amblyopia, childhood squint and adult squint are also addressed here.",
                            serviceImage: 'images/eyecareservices/shutterstock_6417284260copy-min.jpg',
                            smallSquare: 'bg-gold',
                            bigSquare: 'bg-purple',
                            isActive: false
                        },
                    ];
                    $scope.currentService = $scope.servicesObj[0];
                    $scope.nextService = $scope.servicesObj[1];
                    $scope.bgImage = {
                        background: "url('" + $scope.currentService.serviceImage + "') center/cover no-repeat"
                    }
                    $scope.previousButtonClick = function() {
                        deActiveAll();
                        const index = $scope.servicesObj.findIndex(s => s.pointNumber === $scope.currentService.pointNumber);
                        const currentIndex = index === 0 ? 4 : index - 1;
                        $scope.servicesObj[currentIndex].isActive = true;
                        $scope.currentService = $scope.servicesObj[currentIndex];
                        $scope.nextService = $scope.servicesObj[index];
                    }

                    $scope.nextButtonClick = function() {
                        deActiveAll();
                        const index = $scope.servicesObj.findIndex(s => s.pointNumber === $scope.currentService.pointNumber);
                        const currentIndex = index === 4 ? 0 : index + 1;
                        $scope.servicesObj[currentIndex].isActive = true;
                        $scope.currentService = $scope.servicesObj[currentIndex];
                        $scope.nextService = index === 4 ? $scope.servicesObj[1] : (index === 3 ? $scope.servicesObj[0] : $scope.servicesObj[index + 2]);
                    }
                    $scope.openService = function(index) {
                        deActiveAll();
                        $scope.servicesObj[index].isActive = true;
                        $scope.currentService = $scope.servicesObj[index];
                        $scope.nextService = index === 4 ? $scope.servicesObj[0] : $scope.servicesObj[index + 1];
                    }
                    deActiveAll = function() {
                        for (var i = 0; i < $scope.servicesObj.length; i++) {
                            $scope.servicesObj[i].isActive = false;
                        };
                    }
                }
            });
        $compileProvider.debugInfoEnabled(DEBUG_MODE);
        $urlRouterProvider.otherwise("/");
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|whatsapp|tel):/);
    }
]);
app.run(["$rootScope", "$state", "Page","$timeout", function($rootScope, $state, Page,$timeout) {
	$rootScope.myView="about";
	var ch="about";
    $rootScope.go = function(state, selector, event) {
    	
        const currentTarget = event.currentTarget;
        $rootScope.myView=currentTarget.getAttribute("set-view");
        const closestUl = currentTarget.closest('ul');
        if (closestUl) {
            $(closestUl).find('li').each(function(i, eachLi) {
                eachLi.classList.remove('active');
                
            });
        }
        
      
        $state.go(state);
        if(screen.width>768){
        	$(currentTarget).addClass('active');
        	$('html, body').animate({
                scrollTop: $(selector).offset().top - 78
            }, 700);
    	}
        else{
        	
        	/*console.log("ch "+ch);
        	console.log("myview := "+$rootScope.myView);*/
        		$rootScope.myView=($rootScope.myView==ch)?matched():notMatched();
        		console.log("myview := "+$rootScope.myView);
        		function matched(){
        			$(currentTarget).removeClass('active');
        			console.log("matched");
        			ch='';
        			return "";
        		}
        		function notMatched(){
        			$(currentTarget).addClass('active');
        			console.log("not matched");
        			ch=currentTarget.getAttribute("set-view");
        			return $rootScope.myView;
        		}
        		console.log("after myview = "+$rootScope.myView);
        		$timeout(function(){
        			$('html, body').animate({
                        scrollTop: $(selector).offset().top+$(currentTarget).offset().top-85
                    }, 700);
        		},1000);
        		
        		console.log("ch "+ch);
        	
        }
    };

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        url = 'images/PSR Logo.png',
            description = 'A World Class Cataract & Lasik Surgical Centre'
        Page.setImage(url);
        Page.setDescription(description);
    });
}])
// app.run(["$rootScope", "$location", "$state", function($rootScope, $location, $state) {
//                 $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
//                     //window.scrollTo(0, 0);
//                     // $rootScope.previousState = fromState.name;
//                     // $rootScope.previousParams = fromParams;
//                     //    $rootScope.currentState = toState.name;
//                     //    $rootScope.currentParams = toParams;
//                     //     console.log("PREIVOUS",$rootScope.previousState,fromParams);
//                     //     if($rootScope.previousState == "visiontest")
//                     //      $rootScope.bodyClass = $rootScope.bodyClass.replace("hide-scrollbar");
//                 });
//             }]);
// $rootScope.goBack = function()
// {
//   if($rootScope.previousState)
//   {
//       var previousState = $rootScope.previousState;
//       var previousParams = $rootScope.previousParams;
//       if(previousParams)
//       {
//           var Obj = []
//           angular.forEach(previousParams,function(value,key)
//           {
//               Obj[key] = value;
//           })
//           $state.go(previousState,Obj);
//       }
//   }
//   else
//   {
//       $state.go('Home.Recommend');
//   }
// }
// }]);