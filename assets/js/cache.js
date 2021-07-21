// checks if one day has passed. 
function hasOneDayPassed(){
  // get today's date. eg: "7/37/2007"
  var date = new Date().toLocaleDateString();

  // if there's a date in localstorage and it's equal to the above: 
  // inferring a day has yet to pass since both dates are equal.
  if( localStorage.yourapp_date == date ) 
      return false;

  // this portion of logic occurs when a day has passed
  localStorage.yourapp_date = date;
  return true;
}


// some function which should run once a day
function runOncePerDay(){
  if( !hasOneDayPassed() ) return false;

  // your code below
  document.getElementById("movies").innerHTML = <script src="//rss.bloople.net/?url=https%3A%2F%2Fletterboxd.com%2Facsc%2Frss%2F&detail=25&limit=1&showtitle=false&showicon=true&type=js"></script>

  document.getElementById("music").innerHTML = <script src="//rss.bloople.net/?url=https%3A%2F%2Flfm.xiffy.nl%2Fssyps&detail=-1&limit=3&showtitle=false&type=js"></script>
}


runOncePerDay();
