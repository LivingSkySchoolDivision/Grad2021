/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Cut Knife Community School";
var school_name_short  = "CKCS";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};


var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Cut Knife Community School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 430, 200 Arthur Street,</br>';
    footer_data += '  Cando, SK</br>';
    footer_data += '  S0M 0N0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)398-2333 Email: ckcs@lskysd.ca </br>';
    footer_data += '</address>';

var general_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
