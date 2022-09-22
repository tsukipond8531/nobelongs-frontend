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


// 


document.addEventListener("DOMContentLoaded", () => {
    //   You can get different selectors (class, id, tags...)
        const button = document.querySelector('.button');
        const banner = document.querySelector('.banner');
        const button1 = document.querySelector('.button1');
        const banner1 = document.querySelector('.banner1');
    
        // Global open/close functions
        const open = () => {
            button.classList.add('open-button');
            banner.classList.add('open-banner');
        }
    
        const close = () => {
            button.classList.remove('open-button');
            banner.classList.remove('open-banner');
        }
    //button1
    const open1 = () => {
        button1.classList.add('open-button1');
        banner1.classList.add('open-banner1');
    }
    
    const close1 = () => {
        button1.classList.remove('open-button1');
        banner1.classList.remove('open-banner1');
    }
        // Check click on button
        button.addEventListener('mousedown',  () => {
     
            if (!button.classList.contains('open-button')) {
                open()
            }
            else {
                close()
            }
    
        });
    // Check click on button
    button1.addEventListener('mousedown',  () => {
     
        if (!button1.classList.contains('open-button1')) {
            open1()
        }
        else {
            close1()
        }
    
    });
    
        // Close when user click outside
        document.body.addEventListener('mousedown', (e) => {
    
            let isClickInsideButton = button.contains(e.target);
            let isClickInsideBanner = banner.contains(e.target);
    
            if (!isClickInsideButton && !isClickInsideBanner) {
                close ();
            }
        });
    
         // Close when user click outside
         document.body.addEventListener('mousedown', (e) => {
    
            let isClickInsideButton = button1.contains(e.target);
            let isClickInsideBanner = banner1.contains(e.target);
    
            if (!isClickInsideButton && !isClickInsideBanner) {
                close1 ();
            }
        });
    
    });


    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }
    
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");
    
    
    createYear = generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */
    
    document.getElementById("year").innerHTML = createYear;
    
    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');
    
    var months = "";
    var days = "";
    
    var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    if (lang == "en") {
        months = monthDefault;
        days = dayDefault;
    } else if (lang == "id") {
        months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    } else if (lang == "fr") {
        months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    } else {
        months = monthDefault;
        days = dayDefault;
    }
    
    
    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";
    
    //alert($dataHead);
    document.getElementById("thead-month").innerHTML = $dataHead;
    
    
    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);
    
    
    
    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }
    
    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }
    
    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }
    
    function showCalendar(month, year) {
    
        var firstDay = ( new Date( year, month ) ).getDay();
    
        tbl = document.getElementById("calendar-body");
    
        
        tbl.innerHTML = "";
    
        
        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;
    
        // creating all cells
        var date = 1;
        for ( var i = 0; i < 6; i++ ) {
            
            var row = document.createElement("tr");
    
            
            for ( var j = 0; j < 7; j++ ) {
                if ( i === 0 && j < firstDay ) {
                    cell = document.createElement( "td" );
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cell.setAttribute("data-date", date);
                    cell.setAttribute("data-month", month + 1);
                    cell.setAttribute("data-year", year);
                    cell.setAttribute("data-month_name", months[month]);
                    cell.className = "date-picker";
                    cell.innerHTML = "<span>" + date + "</span>";
    
                    if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                        cell.className = "date-picker selected";
                    }
                    row.appendChild(cell);
                    date++;
                }
    
    
            }
    
            tbl.appendChild(row);
        }
    
    }
    
    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
