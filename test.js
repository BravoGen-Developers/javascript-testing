//the alphabet
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var encrypt =  
{
  simple: function(string) 
  {
    for(let i = 0; i<27; i++)
    {
     string = string.replace(letters[i+1], letters[i+2]);
          if(i == 26)
          {
            document.write(string);
          }
     }
  }
};
//bruh
