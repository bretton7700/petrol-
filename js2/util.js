function enable_quantity() {
 
    var manual_submit = document.getElementById("manual_submit");
    var quantity = document.getElementById("quantity");
    var prize = document.getElementById("prize");
    var form_name = "run_draw";
    
     if (prize.value < 4 ) {
          quantity.disabled = false;
          quantity.value = "";
     }else{
          manual_submit.checked = false;
          alert("Manual confirmation not allowed for this prize");
         
     }

}

function get_quantity() {
    var draw = document.getElementById("prize");
    var form_name = "run_draw";
	
    if (draw.value != "none") {
        document.forms[form_name].submit();		
    }
}

function post_quantity() {
    var quantity = document.getElementById("quantity");
    var manual_confirmation = document.getElementById("manual_submit");
    var submit_draw = document.getElementById("submit_draw");
	var draw_validated = document.getElementById("draw_validated");
    var prize = document.getElementById("prize");
    var form_name = "run_draw";

    if (manual_confirmation.checked) {
      if (prize.value < 4) {
         //if (prize.value >0 ) {
            quantity.disabled = false;
            draw_validated.value = 1;
            document.forms[form_name].submit();
        }
        else {
            alert("Manual confirmation not allowed for this prize");
        }
    }
    else {
        if (prize.value < 4) {
          //if (prize.value >0 ) {
            alert("Please use manual confirmation for this prize");
        }
        else {
            quantity.disabled = false;
            draw_validated.value = 1;
            document.forms[form_name].submit();
        }
    }
}

function post_region() {
    var prize = document.getElementById("prize");
    var draw = document.getElementById("draw");
    var form_name = "run_draw";
	
    if (prize.value != "none" && draw.value != "none") {
        document.forms[form_name].submit();
    }
}

function post_draw_type() {
    var draw_type = document.getElementById("draw_type");
    var form_name = "run_draw";

    if (draw_type.value != "none") {
        document.forms[form_name].submit();
    }
}

//function to display a pretty cool pop up calendar
function display_calendar(input_field, button_name) {
    Calendar.setup(
        {
            inputField : input_field, // ID of the input field
           // ifFormat : "%d-%B-%Y", // the date format
		      ifFormat :"%Y:%m:%d %H:%M", // the date format
			//ifFormat:"YYYY-MM-DDTHH:MM:SS",
            button : button_name // ID of the button
        }
    );
}

function confirm_winners() {
	var checkbox_id = "";
    var array_checkboxes = document.getElementsByName("record_id");
	var draw_confirmed = document.getElementById("draw_confirmed");
    var counter = array_checkboxes.length;
    var i;
	var j;
    var temp;
    var total_count = 0;
	var post_data = 1;

	//clear confirmations value
	document.draw_results.confirmed_winners.value = "";	
	counter = array_checkboxes.length;
	total_count = 0;	
		
	for (i = 0; i < counter; i++) {
		if (array_checkboxes[i].checked) {
			total_count++;
			temp = ";";
			temp += array_checkboxes[i].value;
			document.draw_results.confirmed_winners.value += ";"+array_checkboxes[i].value;
		}
	}

	//alert(document.draw_results.confirmed_winners.value);

	//no_of_winners selected
	var winners_selected = document.getElementById("confirmations");
	winners_selected.value = total_count;
	
	if (total_count > 0) {
		alert(winners_selected.value + " WINNERS CONFIRMED");
	}
	
	//check max allowed
	var check_max_confirmed = document.getElementById("max_qty");
	//alert("MAX ALLOWED: " + check_max_confirmed.value);

	if (winners_selected.value > check_max_confirmed.value) {
		alert("TOO MANY WINNERS SELECTED!! MAX ALLOWED: " + check_max_confirmed.value + "; SELECTED: " + winners_selected.value);
		
		post_data = 0;
	}

	
	if (post_data == 1) {
		var confirm_results = document.getElementById("confirm_draw");
		confirm_results.value = "true";
		draw_confirmed.value = 1;
		document.forms["draw_results"].submit();	
	}
}

function confirm_winners_later() {
	var array_checkboxes = document.getElementsByName("record_id");
	var counter = array_checkboxes.length;
	var i;
	var temp;
	var total_count = 0;

	//clear confirmations value
	document.draw_results.confirmed_winners.value = "";
	for (i = 0; i < counter; i++) {
		if (array_checkboxes[i].checked) {
			total_count++;
			temp = ";";
			temp += array_checkboxes[i].value;
			document.draw_results.confirmed_winners.value += ";"+array_checkboxes[i].value;
		}
	}
	//alert(document.draw_results.confirmed_winners.value);

	//no_of_winners selected
	var winners_selected = document.getElementById("confirmations");
	winners_selected.value = total_count;
	alert(winners_selected.value + " WINNERS CONFIRMED");

	//check max allowed
	var check_max_confirmed = document.getElementById("max_qty");
	alert("MAX ALLOWED: " + check_max_confirmed.value);
	if (winners_selected.value > check_max_confirmed.value) {
		alert("TOO MANY WINNERS SELECTED!! MAX ALLOWED: " + check_max_confirmed.value + "; SELECTED: " + winners_selected.value);
	}
	else {
            var confirm_results = document.getElementById("confirm_draw");
            confirm_results.value = "true";
            document.forms["draw_results"].submit();
	}

}

function confirm_deletion(form_name) {
	var array_checkboxes = document.getElementsByName("record_id");
	var counter = array_checkboxes.length;
	var i;
	var temp;
	var total_count = 0;

	for (i = 0; i < counter; i++) {
		if (array_checkboxes[i].checked) {
			total_count++;
			temp = ";";
			temp += array_checkboxes[i].value;
			document.forms[form_name].confirm_deletion.value += ";"+array_checkboxes[i].value;
		}
	}
	//alert(document.draw_results.confirmed_winners.value);
	
	//no_of_records selected for deletion
	if (total_count == 1)
		var affirm = confirm("Are you sure you want to delete this record?");
	else if (total_count > 1)
		var affirm = confirm("Are you sure you want to delete these " + total_count + " records?");
	else if (total_count == 0) {
		alert("You have not selected any records for deletion.");
		var affirm = false;
	}
		
	if (affirm == true)
	{
	  	document.forms[form_name].submit();
	  	//display number of records deleted
	  	if (total_count > 1) {
			alert(total_count + " RECORDS DELETED");
		}
		else {
			alert("1 RECORD DELETED");
		}
	}
	else
	{
		//clear the hidden text box
		document.forms[form_name].confirm_deletion.value = "";
	}
}