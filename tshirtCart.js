



function clk(newimg){
    let getImg = document.getElementById("imgs");
    getImg.src = newimg.src;  
      
}





    // ******** Image Click Functionality Explanation *********

//Is functionality ka kaam ye hai ke jab aap choti images par click karte hain, to wo image bari image ke jagah show hoti hai. Jab aap kisi image par click karte hain, onclick attribute ke zariye ek JavaScript function call hota hai jo us image ko parameter me pass karta hai (using this keyword). this automatically us image ko refer karta hai jisme click kiya gaya hota hai. Phir function wo image ka src (source) leti hai aur bari image ka src us clicked image se replace kar deti hai. Result me, bari image wahi image ban jati hai jisme aapne click kiya hota hai, aur aapko screen par bari size me wahi image dikhai deti hai jo choti thi.    

    //    ******** Mazeeed Detail ***********

    //    ******** HTML Code *******

// 1. <div class="img">

// Ye div ek container hai jisme choti images rakhi gayi hain.

// class="img": Ye class style aur JavaScript ke zariye style ko control karne ke liye use hoti hai.

// 2. <img src="images/hrithkImage.jpeg" alt="Image" onclick="clk(this)">: 

// <img>: HTML tag jo image ko display karta hai. 

// src="images/hrithkImage.jpeg": Ye attribute image ke file path ko specify karta hai. src ka matlab hai source. Ye browser ko batata hai ke image kahan se load karni hai.

// alt="Image": Ye attribute image ke load na hone ki situation me display hone wala text hai. alt ka matlab alternative text.

// onclick="clk(this)": Ye attribute batata hai ke jab user is image par click karega, to clk(this) function call hoga. this keyword current image ko refer karta hai jisme click kiya gaya hai.

// <br>: Ye HTML tag line break ke liye use hota hai. Har image ke baad ek new line create karne ke liye use hota hai.

// 3. <div class="left">:

// Ye div ek container hai jisme bari image rakhi gayi hai.

// class="left": Ye class style aur JavaScript ke zariye style ko control karne ke liye use hoti ha

// 4. <img src="images/hrithkImage.jpeg" alt="Main Image" id="imgs">:

// src="images/hrithkImage.jpeg": Ye attribute initial image ke file path ko specify karta hai.

// id="imgs": Ye attribute is image ko uniquely identify karne ke liye use hota hai. id ke zariye hum JavaScript se is image ko access kar sakte hain.

    //    ******** JavaScript Code *******

// 1. function clk(newimg){:

// function: JavaScript keyword jo ek function define karta hai.

// clk: Function ka naam hai.

// (newimg): Function ka parameter hai. newimg wo image hoti hai jisme click kiya gaya hai (passed via this keyword).

// 2. let getImg = document.getElementById("imgs");:

// let: JavaScript keyword jo ek variable declare karta hai.

// getImg: Variable ka naam hai jo bari image ko store karta hai.

// document.getElementById("imgs"): Ye JavaScript method HTML document se element ko uske id ke zariye select karta hai. "imgs" id wali image ko select karta hai.

// 3. getImg.src = newimg.src;:

// getImg.src: Ye property bari image ka source specify karti hai.

// newimg.src: Ye property clicked image ka source specify karti hai.

// =: Assignment operator jo right-hand side value ko left-hand side variable me assign karta hai.

// getImg.src = newimg.src;: Is line ka matlab hai ke bari image ka src attribute ko clicked image ke src se replace kar diya jaye.

    // ******** Summary ********

// HTML code: Choti images aur ek bari image ko display karta hai. Choti images pe click karne se onclick attribute ke zariye clk(this) function call hota hai.    

// JavaScript code: clk function clicked image ko newimg parameter ke zariye accept karta hai. Function bari image ko select karke uska src clicked image ke src se replace karta hai, jisse bari image update ho jati hai.