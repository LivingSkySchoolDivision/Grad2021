/* ******************************************** */
/* * Editable values                          * */
/* ******************************************** */

// School name, as you would like it displayed
var school_name = "North Battleford Comprehensive High School";
var school_name_short  = "NBCHS";

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
    footer_data += '  1791 110th Street, </br>';
    footer_data += '  North Battleford, SK</br>';
    footer_data += '  S9A 2Y2  </br>';
    footer_data += '  </br>';
    footer_data += '  Jay Nichol, Principal </br>';
    footer_data += '  Carla Bernier, Vice-Principal </br>';
    footer_data += '  Lindy Bell-Gatzke, Vice-Principal </br>';
    footer_data += '  </br>';
    footer_data += '  Phone: (306) 445-6101 Email: nbchs@lskysd.ca </br>';
    footer_data += '</address>';

var general_school_grad_message = 'Here are graduates from '+school_name+' in the 2019-2020 school year.';
