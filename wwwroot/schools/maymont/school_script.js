/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Maymont Central School";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Maymont Central School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 129, 200 1st Street East, </br>';
    footer_data += '  Maymont, SK</br>';
    footer_data += '  S0M 1T0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)389-2045 Email: maymont@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
