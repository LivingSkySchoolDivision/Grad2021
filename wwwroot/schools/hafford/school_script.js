/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Hafford";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};


var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Hafford Central School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 97, 212 2nd Avenue East,</br>';
    footer_data += '  Hafford, SK</br>';
    footer_data += '  S0J 1A0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)549-2212 Email: hafford@lskysd.ca </br>';
    footer_data += '</address>';

var general_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
