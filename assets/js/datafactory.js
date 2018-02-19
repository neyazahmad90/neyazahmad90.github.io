app.factory('Page',function () {
	title = 'Home',
	seperator = ' | ',
	suffix = 'PSR Eye Hospital',
	imgUrl = 'images/PSR Logo.png',
    description = 'A World Class Cataract & Lasik Surgical Centre'
	return {
		title : function () {
			return title;
		},
		setTitle: function (newTitle) {
			title = newTitle + seperator + suffix;
		},
		image : function () {
            return imgUrl;
        },
        setImage: function (newUrl) {
            imgUrl = newUrl
        },
        description: function() {
            return description;
        },
        setDescription: function (newDescription) {
            description = newDescription
        },
        url: function() {
        	return window.location.href;
        }
	}
})
// .factory('CataractDataFactory', function () {
// 	var ABOUT = {
// 		index: 1,
// 		name: 'About',
// 		paraContent: {
// 			left: [`Many people in their 50s, 60s and 70s realize their vision is changing without recognizing that cataracts may be the cause. Cataracts develop slowly and painlessly so that your vision and lifestyle can be affected without your realizing.`,
// 						`Modern cataract surgery is a routine procedure with extraordinary benefits. Not surprisingly, most patients are very satisfied after cataract `,
// 						``],
// 			right: `surgery. Most patients experience little or no pain and return to their normal activities the day after surgery.
// 			 		And now, thanks to advances in technology, cataract treatment can even correct other conditions, including near sightedness, farsightedness, astigmatism and presbyopia and reduce your dependence on glasses or contact lenses`
// 		},
// 		subheading: `Modern cataract surgery is a routine procedure with extraordinary benefits.<br> Most patients experience little or no pain and return to their normal<br> activites the day after surgery.`,
// 		mainContent: {
// 			[{
// 				headingTitle: 'Symptoms',
// 				contentItems: ["Feel unsafe driving because it's hard to read street signs or due to glare from lights at night.",
// 								"Having trouble doing things they do at work or at home.",
// 								"Can't do all the things they enjoy, like reading, sewing and playing golf.",
// 								"Many bump into things, stumble or fall.",
// 								"Feel less independent than they would like."],
// 				src: ''
// 			 },
// 			 {
// 				headingTitle: 'Benefits of Cataract Surgery',
// 				contentItems: ["Feel unsafe driving because it's hard to read street signs or due to glare from lights at night.",
// 								"Having trouble doing things they do at work or at home.",
// 								"Can't do all the things they enjoy, like reading, sewing and playing golf.",
// 								"Many bump into things, stumble or fall.",
// 								"Feel less independent than they would like."],
// 				src: ''
// 			 },
// 			 {
// 				headingTitle: 'Symptoms',
// 				contentItems: ["Feel unsafe driving because it's hard to read street signs or due to glare from lights at night.",
// 								"Having trouble doing things they do at work or at home.",
// 								"Can't do all the things they enjoy, like reading, sewing and playing golf.",
// 								"Many bump into things, stumble or fall.",
// 								"Feel less independent than they would like."],
// 				src: ''
// 			 },
// 			 {
// 				headingTitle: 'Symptoms',
// 				contentItems: ["Feel unsafe driving because it's hard to read street signs or due to glare from lights at night.",
// 								"Having trouble doing things they do at work or at home.",
// 								"Can't do all the things they enjoy, like reading, sewing and playing golf.",
// 								"Many bump into things, stumble or fall.",
// 								"Feel less independent than they would like."],
// 				src: ''
// 			 }]
// 		}

// 	};
// 	return {
// 		getMe : function() {
// 			console.log('hahha');
// 		}
// 	}
// })