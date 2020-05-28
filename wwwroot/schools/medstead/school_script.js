/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "Medstead Central School";

var school_short = function(){
	  if ( typeof school_name_short !== 'undefined') {
         document.write(school_name_short);
      }else{
         document.write(school_name);
      }
};

var footer_data = ' <p class="float-right"><a href="#">Back to top</a></p>';
    footer_data += '<p>Medstead Central School</p>';
    footer_data += '<br>';
    footer_data += '<address>';
    footer_data += '  Box 150, 219 2 Ave,</br>';
    footer_data += '  Medstead, SK</br>';
    footer_data += '  S0M 1W0  </br>';
    footer_data += '  </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306)342-4600 Email: medstead@lskysd.ca </br>';
    footer_data += '</address>';

var general_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
