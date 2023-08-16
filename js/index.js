$(".singerOne").click(  function() {
    $(".pr1").slideToggle(1000)
    $(".pr2").slideUp(1000)
    $(".pr3").slideUp(1000)
    $(".pr4").slideUp(1000)
})
$(".singerTwo").click(function() {

    $(".pr1").slideUp(1000)
    $(".pr2").slideToggle(1000)
    $(".pr3").slideUp(1000)
    $(".pr4").slideUp(1000)
})

$(".singerThree").click(function() {
    $(".pr1").slideUp(1000)
    $(".pr2").slideUp(1000)
    $(".pr3").slideToggle(1000)
    $(".pr4").slideUp(1000)
})

$(".singerFour").click(function() {
    $(".pr1").slideUp(1000)
    $(".pr2").slideUp(1000)
    $(".pr3").slideUp(1000)
    $(".pr4").slideToggle(1000)
})

$(".exitMark").click(function() {
    $(".nav").slideUp(1000 , function(){
        $(".i-fixed").css("left",".5%")
      })
})

$(".i-fixed").click(function(){
    $(".i-fixed").css("left","15.5%")
    $(".nav").show(1000)
})


let countDownDate = new Date("Oct 24, 2023 00:00:00").getTime();
    let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 *60 *60 *24));
        let hours = Math.floor((distance % (1000 *60 *60 *24)) / (1000 * 60 * 60));
        let Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let Seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("Minutes").innerHTML = Minutes;
        document.getElementById("Seconds").innerHTML = Seconds;

},1000)


let counter = document.querySelector(".counter");
let progress = document.querySelector(".progress");
let textarea = document.querySelector("textarea");
let maxLength = textarea.getAttribute("maxLength");

counter.innerHTML = maxLength;

textarea.oninput = function(){
    counter.innerHTML = maxLength - this.value.length;
    counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero");

    progress.style.width = `${(this.value.length * 100) / maxLength}%`;

}