function telephoneCheck(str) {
    let pattern1 =/(1\s)?([0-9]{3}-){2}[0-9]{4}/;
       let pattern2 = /(1\s)?\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
       let pattern3 =/(1\s)?([0-9]{3}(\s)?){2}[0-9]{4}/;
       let pattern4 =/(1\s)?\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;

   if(pattern1.test(str)||pattern2.test(str)||pattern3.test(str)||pattern4.test(str))
   return true;
   else return false;
}


console.log(telephoneCheck("555-5555"));