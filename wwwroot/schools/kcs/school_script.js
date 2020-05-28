/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Kerrobert Composite School";
var school_name_short  = "KCS";

var school_short = function(){
      if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Kerrobert Composite School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 258, 115 Alberta Avenue,</br>';
    footer_data += '  Kerrobert, SK</br>';
    footer_data += '  S0L 1R0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)834-2444 Email: kcs@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';

