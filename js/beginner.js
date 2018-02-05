/**
javaScript beginner
 ***/

var str = 'SAIFUL ISLAM';

/*** string reverse ***/

function reverse(str)
{
	var temp = "";
    for (var i = str.length - 1; i >= 0; i--)
    {
        temp += str[i];
    }
    return temp;

}

/*** input method *****/

function read()
{

    var scan="" ;
    scan= document.getElementById('scanner').value;
     var answer = reverse(scan);
    console.log(answer);
    scan="";
    answer="";

}

//console.log(scanner);
/**** palindrom check ****/
