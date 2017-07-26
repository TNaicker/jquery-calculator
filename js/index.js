var myButtons = $('.buttons');
var myScreen = $('#screen');
myScreen.text(value);
var ansScreen = $('#screen-container');
var value = '';

console.log(myButtons.children().text());

myButtons.on('click', function(event) {
  console.log($(event.target));
  if($(event.target) == $('<div>'))
  {
    console.log("Does nothing");
  } else {
    myScreen.append($(event.target).text());
    if($(event.target).text() == 'C')
    {
      myScreen.empty();
      value = '';
    }
    else if($(event.target).text() == '÷')
    {
      value += myScreen.text();
      value = value.slice(0, -1);
      value += "/";
      myScreen.empty();
    }
    else if($(event.target).text() == 'x')
    {
      value += myScreen.text();
      value = value.slice(0, -1);
      value += "*";
      myScreen.empty();
    }
    else if($(event.target).text() == '-')
    {
      value += myScreen.text();
      myScreen.empty();
    }
    else if($(event.target).text() == '+')
    {
      value += myScreen.text();
      console.log(value);
      myScreen.empty();
    }
    if($(event.target).text() == '=')
    {
      value += myScreen.text();
      value = value.slice(0, -1);
      console.log(value);
      var holder = eval(value);
      myScreen.empty();

      if (value === NaN || value === null || value === undefined || value === Infinity || value === -Infinity)
      {
        myScreen.text("Error!")
        value = '';
      }
      else
      {
        myScreen.text(holder.toString());
        value = '';
      }
    }
  }
});
