/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Unity Composite High School";
var school_name_short  = "UCHS";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>North Battleford Comprehensive High School</p>';
    footer_data += '<p>"FROM POSSIBILITY TO ACTUALITY"</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 1000, 3rd Avenue East, </br>';
    footer_data += '  Unity, SK </br>';
    footer_data += '  S0K 4L0  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306) 228-2657 Email: uchs@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
