let section = document.querySelector("section"),
    input = document.querySelector("input"),
    start = document.querySelector("button"),
    counter = document.querySelector("text.percentage"),
    counter_circle = document.querySelector(".flex-wrapper"),
    filler = document.querySelector("path.circle"),
    number, orginalSeconds;


start.addEventListener("click", function () {
    if(input.value.search("-") != -1) {
        alert("لطفا اعداد مثبت را وارد کنید");
        return
    }

    counter_circle.style.display= "flex";
    section.style.display= "none";
    filler.style.strokeDasharray = "100, 100";

    orginalSeconds = number = input.value;
    counter.textContent = number;
    interval = setInterval(countDown, 1000);

});

let countDown = () => {
    if(number <= 0) {
        clearInterval(interval);
        counter_circle.style.display= "none";
        section.style.display= "block";
    }
    number -= 1;
    counter.textContent = number;

    let percent = `${Math.abs(Math.floor((((orginalSeconds - number) / orginalSeconds) * 100) - 100 ))}`;
    filler.style.strokeDasharray = `${percent}, 100`;
    console.log(`${percent}, 100`)
}
