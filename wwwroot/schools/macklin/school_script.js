/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Macklin School";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Macklin School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Bag #1, 5001 Herald Street, </br>';
    footer_data += '  Macklin, SK</br>';
    footer_data += '  S0L 2C0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)753-2375 Email: macklin@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
