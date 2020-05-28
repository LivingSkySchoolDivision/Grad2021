/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Spiritwood High School";
var school_name_short  = "SHS";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Spiritwood High School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 280, 216 4th Street West,  </br>';
    footer_data += '  Spiritwood, SK, </br>';
    footer_data += '  S0J 2M0  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306) 883-2282 Email: shs@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';