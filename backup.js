/*项目实战：回文检查器
如果给定的一个字符串是回文，那么返回true，否则返回false。

palindrome（回文），指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。

注意：
检查回文时，你需要先除去所有非字母数字的字符（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。

我们将会传入不同格式的字符串，例如："racecar"、"RaceCar"、"race CAR"等等。

我们也会传入一些包含特殊符号的字符串，例如"2A3*3a2"，"2A3 3a2"和"2_A3*3#A2"。
*/
function f(str){
    let arr = new Array();
    for(let char of str){
        if(/[a-zA-Z0-9]/.test(char)){arr.push(char.toLowerCase());}
    }

    while(arr[0]==arr[arr.length-1]){
        arr.shift();
        arr.pop();
        if(arr.length<1)break;
    }
    if(arr.length>0){return false;}else{
        return true; }
}
/*
项目实战：凯撒密码
世界上最简单、最著名的加密方法是凯撒密码，也叫移位密码。在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

ROT13 是一个被广泛使用的编码技术，明文中的所有字母都被移动 13 位。因此，'A' ↔ 'N', 'B' ↔ 'O' 等等。

请编写一个函数，用于解码一个被 ROT13 编码的字符串，然后返回解码后的结果。

所有解码后的字母都必须为字母大写。请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。
*/
function f(str){
    str=str.toUpperCase();
    let arr = [];
    for(let char of str){
        let charCode = char.charCodeAt();
        if(charCode>=78 && charCode<=90){
        char=String.fromCharCode(charCode-13);
        }else if(charCode<78 && charCode>=65){
        char=String.fromCharCode(charCode+13);
        }
        arr[arr.length]=char;
    }
    console.log(arr.join(""));
}
/*项目实战：电话号码验证器
如果传入的字符串是一个有效的美国电话号码格式，则返回true。

只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。以下是一些正确的例子（其他格式变形请参考以下例子）：

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
在这个挑战中，你将会看到例如800-692-7753或者8oo-six427676;laskdjf的号码。你的任务是根据上面不同的格式组合，判断它是否美国号码。区号是必须的。如果提供国家代码，则必须确认国家代码为1。如果这是有效的美国电话就返回true，否则返回false。*/
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