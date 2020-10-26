//d3.select("body").append("h1").text("hello, world");

var num1 = [];

d3.select("#one").on("click", function(){
    storeNum("1");
})

d3.select("#two").on("click", function(){
    storeNum("2");
})

d3.select("#three").on("click", function(){
    storeNum("3");
})

d3.select("#four").on("click", function(){
    storeNum("4");
})

d3.select("#five").on("click", function(){
    storeNum("5");
})

d3.select("#six").on("click", function(){
    storeNum("6");
})

d3.select("#seven").on("click", function(){
    storeNum("7");
})

d3.select("#eight").on("click", function(){
    storeNum("8");
})

d3.select("#nine").on("click", function(){
    storeNum("9");
})

d3.select("#square").on("click", function(){
    var finalNum = num1[0];
    for(var i=1, n=num1.length; i<n; i++)
    {
        finalNum= finalNum + num1[i];
    }
    var int = Number(finalNum);
    var answer = int*int;
    var answerMessage = " ^2 = " + answer;
    d3.select(".cal").append("span").text(answerMessage);
})

var storeNum = function(num){
    d3.select(".cal")
    .append("span").text(num);
    num1.push(num);
}
    
//.append("span").text()