//it is used when check correspondind id error
var all = ["errorFirst", "errorLast", "errorEmail", "errorUid", "errorPassword", "errorConfirm"];
var all2 = ["First Name", "Last Name", "Email", "User ID", "Password", "Confirm Password"];
var check;
var array1 = [];  // to check length that's why declare here 
function validate() {
    array1[0] = document.getElementById('firstN').value;
    array1[1] = document.getElementById('lastN').value;
    array1[2] = document.getElementById('email').value;
    array1[3] = document.getElementById('uid').value;
    array1[4] = document.getElementById('password').value;
    array1[5] = document.getElementById('confirm').value;

    //declare inhtml page or without use of array i can also decribbe here with use of array........

    // Name/LastName/UserId... for empty value checking.............

    for (var i = 0; i < array1.length; i++) {

        if (array1[i].length == "") {  // if text input is empty then print invalid corresponding error 
            document.getElementById(all[i]).innerHTML = "Invalid " + all2[i] + "";
            check = true;
            return false;
        }

    // Email checking.............
    else if (i == 2) {
        var atpos = array1[i].indexOf("@");
        var dotpos = array1[i].lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= array1[i].length) {
            document.getElementById('errorEmail').innerHTML = "Invlid Email";
            check = true;
        }
        else {
            document.getElementById('errorEmail').innerHTML = "";
            check = false;
            finalValidate(); //no need to call again !

        }
    }
    // checking confirm password .................................
    else if (i == 5) {
        var first = document.getElementById('password').value;
        var second = document.getElementById('confirm').value;
        if (second != first) {
            document.getElementById('errorConfirm').innerHTML = "Please Enter Confirm Password";
            check = true;
            finalValidate();
        }
        else {
            document.getElementById('errorConfirm').innerHTML = "";
            finalValidate();

        }
    }

    else {
        document.getElementById(all[i]).innerHTML = "";
        finalValidate();// no need to call again !
    }
}
}
// for enabling and desabling the submit buttom after checking all error in the text area 

function finalValidate() {
    for (var j = 0; j < array1.length; j++) {
        if (array1[j] == "") {
            check = true;
        }
        else {
            count = false;
        }
    }
    if (check != true) {
        document.getElementById('sub').disabled = false;
    }
    else {
        document.getElementById('sub').disabled = true;
    }
}
//=========================

let timeoutId;

const search = (searchTerm) => {
    // reset the previous timer
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // set up a new timer
    timeoutId = setTimeout(async () => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
            const response = await fetch(url);
            const searchResults = await response.json();

            // show the search result in the console
            console.log({
                'term': searchTerm,
                'results': searchResults.query.search
            });
        } catch (error) {
            console.log(error);
        }
    }, 500);
};