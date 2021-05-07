//the alphabet
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var encrypt =  
{
  simple: function(string) 
  {
    var str;
    for(let i = 1; i<27; i++)
    {
     str = string.replace("h", "a");
     }
    alert(str);
  }
};
