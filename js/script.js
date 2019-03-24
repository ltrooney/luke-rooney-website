jQuery(document).ready(function($) {
	// navbar effects
	$( '.navbar .navbar-nav .nav-link' ).on( 'click', function () {
		$( '.navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent().addClass( 'active' );
	});

	$(window).on("scroll", function() {
  		var currentPos = $(window).scrollTop();

	  	$('.navbar-nav li a').each(function() {
	    	var sectionLink = $(this);
	    	// capture the height of the navbar
	    	var navHeight = $('.navbar-nav').outerHeight() + 1;
	    	var section = $(sectionLink.attr('href'));

	    	// subtract the navbar height from the top of the section
	    	if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
	     		$('.navbar-nav .nav-item').removeClass('active');
	      		sectionLink.parent().addClass('active');
	    	} else {
	      		sectionLink.parent().removeClass('active');
	    	}
	  	});        
	});

	// work experience toggle
	var show_more = true;
	$('#toggle_button').click(function() {
		if(show_more) {
			// add divs
			$('.hide').addClass('show').removeClass('hide');
			document.getElementById("toggle_button").innerText = "Show Less";			
			show_more = false;
		} else {
			// remove div
			$('.show').addClass('hide').removeClass('show');
			document.getElementById("toggle_button").innerText = "Show More";
			show_more = true;
		}
	});

	

	var json = 
		{
			projects: [
				{
					enabled: true,
					id: "01",
					title: "Autonomous Quadcopter",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "https://graysonhobby.com/media/catalog/category/FPV-Drone-Racer.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/quadcopter",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "02",
					title: "Music Theory App",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "css/images/music.png"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/music_theory_app",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "03",
					title: "Hack Computer",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "https://onlinejpgtools.com/images/examples-onlinejpgtools/random-grid.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/hack-computer",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "04",
					title: "JAVA Physics Engine",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "css/images/physics.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/physics-engine",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "05",
					title: "Pacman AI Agent",
					preview: {
						dates: "January 2019",
						imgSrc: "https://androidapksfree.com/wp-content/uploads/2016/12/PAC-MAN-apk.png"
					},
					modal: {
						isPrivate: true,
						githubLink: null,
						skills: "Python, Approximate Q-Learning, A* Search, Dijkstra's Algorithm",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "06",
					title: "This Website",
					preview: {
						dates: "Dec 2018 - Mar 2019",
						imgSrc: "css/images/code.jpeg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/luke-rooney-website",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
			],
			experience: [
				{ 
					imgSrc: "css/images/jpl.jpg",
					imgAlt: "JPL Logo",
					institution: "Jet Propulsion Laboratory",
					jobTitle: "Electrical Systems Engineering",
					dates: "September 2016 - July 2018",
					description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
				},
				{ 
					imgSrc: "css/images/coc.png",
					imgAlt: "COC Logo",
					institution: "College of the Canyons",
					jobTitle: "College Assistant - Financial Aid",
					dates: "September 2016 - July 2018",
					description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
				}
			],
			faqs: [
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				},
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				},
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				},
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				}
			]
		};

	var modalsEnabled = true;
	var modalPrefix = "project-modal";

	// parse data for projects section
	var projectsJSON = json.projects;
  	projectsJSON.forEach(function(projectsData) {
  		var html = 
  		`<div class='single_portfolio_text mx-2'>
			<img src="${projectsData.preview.imgSrc}" />
			<div class='portfolio_images_overlay text-center my-auto'>
				<div class='space-header-wrapper d-flex align-items-center'>
					<h6 class='space-header gallery-text'>${projectsData.title}</h6>
				</div>
				<p class='dates'>${projectsData.preview.dates}</p>`;
				if (modalsEnabled) {
					html += `<button type='button' class='btn btn-dark btn-lg' data-toggle='modal' data-target='#${modalPrefix}-${projectsData.id}'>View</button>`;
				}
			html += `</div></div>"`;

  		$('#project-previews').append(html);

  		if (modalsEnabled) {
  			var modalData = projectsData.modal;
  			console.log(modalData);
	  		var modal_html = 
	  		`<div class="modal fade" id="${modalPrefix}-${projectsData.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        <div class="modal-dialog modal-dialog-centered" role="document">
		          <div class="modal-content">
		            <div class="modal-header">
		              <h5 class="modal-title" id="exampleModalLabel">${projectsData.title}</h5>
		              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		                <span aria-hidden="true">&times;</span>
		              </button>
		            </div>
		            <div class="modal-body">`

		            if (modalData.isPrivate) {
		            	modal_html += 
		            	`<div class="project-section">
			                <h6>Project Links</h6>
			            	<p>(Private Source)</p>
			             </div>`;
		            } else if (modalData.githubLink != null) {
		            	modal_html += 
		            	`<div class="project-section">
			                <h6>Project Links</h6>
			            	<a href="https://${modalData.githubLink}"><i class="fab fa-github mr-2"></i>${modalData.githubLink}</a>
			             </div>`;
		            }
		             
		            modal_html +=  
		              `<div class="project-section">
		                <h6>Skills</h6>
		                <p>${modalData.skills}</p>
		              </div>
		              <div class="project-section">
		                <h6>Description</h6>
		                <p>${modalData.description}</p>
		              </div>
		            </div>
		            <div class="modal-footer justify-content-centerw">
		              <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
		            </div>
		          </div>
		        </div>
		      </div>`;
	  		$('#projects').append(modal_html);
  		}
  	});

  	
  	json.experience.forEach(function(experienceData) {
  		var html = 
  		`<div class="row mb-4">
          <div class="col-lg-8 col-md-12 col-centered">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 mb-4 text-center">
                <img class="img-fluid" src="${experienceData.imgSrc}" alt="${experienceData.imgAlt}">
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12">
                <h4><strong>${experienceData.institution}</strong></h4>
                <h6>${experienceData.jobTitle}</h6>
                <i>${experienceData.dates}</i>
                <p class="mt-2">${experienceData.description}</p>
              </div>
            </div>
          </div>
        </div>`;
        $('#experiences').append(html);
  	});
  	

  	json.faqs.forEach(function(faq) {
  		var html =
  		`<div class="row">
	        <div class="col-lg-8 col-md-10 col-centered my-2">
	          <h6 class="font-weight-bold">Q: ${faq.question}</h6>
	          <h6>A: ${faq.answer}</h6> 
	        </div>
      	</div>`;
  		$('#faqs').append(html);
  	});

  	// slick carousel
	$('.center').slick({
		dots: true,
		slidesToShow: 7,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
		  breakpoint: 2000,
		  settings: {
		    centerMode: true,
		    slidesToShow: 5
		  }
		},
		{
		  breakpoint: 1600,
		  settings: {
		    slidesToShow: 4
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
		    arrows: true,
		    slidesToShow: 3
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		}
		]
	});
});

