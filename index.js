class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() +string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g,"")
  }

  static titleize(string) {
    let stringArray = string.split(" ");
    //write an array method that capitalizes the first letter of words in 
    //a string excluding the following words:
    //the, a, an, but, of, and, for, at, by, and from
    let capStringArray = [];
    stringArray.forEach((word) => {
      switch (word) {
        case 'the':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'a':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'an':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'but':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'of':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'and':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'for':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'at':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'by':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        case 'from':
          if(stringArray[0] === word) {
            capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
          } else capStringArray.push(word);
          break;
        default:
          capStringArray.push(word.charAt(0).toUpperCase()+word.slice(1))
      }
    })
    /*stringArray.map(word => {
      if (word.toLowerCase() !== "the" || "a" || "an" || "but" || "of" || "for" || "and" || "at" || "by" || "from") {
        return word.charAt(0).toUpperCase()+word.slice(1)
      } else return word;*/
    //console.log(capStringArray)
    return capStringArray.join(" ")
  }
}