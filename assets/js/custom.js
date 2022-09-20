$(document).ready(function() {
  var ctx = document.getElementById('bar-js1');
const myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['', '', '', '', '', '','', '', '', '', '', ''],
    datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,],
        backgroundColor: ['#999DCE'],
    }]
},
options: {
    scales: {
        
        y: {
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        x: {
            borderWidth: 0,
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        yAxes:[{
           offset: true,
          }],
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 0
            }
        },
        
     } 
}
});

var ctx = document.getElementById('bar-js2');
const myChart2 = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['', '', '', '', '', '','', '', '', '', '', ''],
    datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,],
        backgroundColor: ['#999DCE'],
    }]
},
options: {
    scales: {
        
        y: {
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        x: {
            borderWidth: 0,
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        yAxes:[{
           offset: true,
          }],
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 0
            }
        },
        
     } 
}
});

var ctx = document.getElementById('bar-js3');
const myChart3 = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['', '', '', '', '', '','', '', '', '', '', ''],
    datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,],
        backgroundColor: ['#999DCE'],
    }]
},
options: {
    scales: {
        
        y: {
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        x: {
            borderWidth: 0,
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        yAxes:[{
           offset: true,
          }],
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 0
            }
        },
        
     } 
}
});

var ctx = document.getElementById('bar-js4');
const myChart4 = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['', '', '', '', '', '','', '', '', '', '', ''],
    datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,],
        backgroundColor: ['#999DCE'],
    }]
},
options: {
    scales: {
        
        y: {
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        x: {
            borderWidth: 0,
            grid: {
                display: false,
                borderWidth: 0,
            }
        },
        yAxes:[{
           offset: true,
          }],
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 0
            }
        },
        
     } 
}
});

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function() {
    readURL(this);
});

$('.btn-toggle').click(function() {
	$('.silde-bar-menu--wrapper').toggleClass('active');
	$('.toggle-backgroung').toggleClass('active');
});

$('.image-close').click(function() {
	$('.silde-bar-menu--wrapper').removeClass('active');
	$('.toggle-backgroung').removeClass('active');
});

$('.read-more').click(function() {
	$(this).prev().find('.show-more').slideToggle();
  $(this).toggleClass('on');
});



// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);


$(document).ready(function() {
  $(".accordion-set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".accordion-set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".accordion-set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".accordion-set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});

$('.switch-all-table').click(function() {
  $(this).toggleClass('active');
});

// tab menu 1
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
// tab menu 2
$(document).ready(function(){
	
	$('ul.tabs-two li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-two li').removeClass('current');
		$('.tab-content-two').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

