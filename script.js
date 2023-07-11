// Selected and assigned our rating screen //
const firstContainer = document.querySelector(".first-container");
// Selected and assigned our rating result screen //
const secondContainer = document.querySelector(".second-container");
// Selected and assigned our rating buttons //
const ratingButtons = document.querySelectorAll(".rating-button");
// Selected and  assigned our submit button //
const submitButton = document.querySelector(".submit-button");
// Selected our span element for getting the rating result //
const result = document.getElementById("result");


ratingButtons.forEach((ratingButton) => {
    // When clicked any rating button, //
    ratingButton.addEventListener("click", () => {
        ratingButtons.forEach((anySelectedButton) => {
            // We first set default styles for the previously clicked button //
            anySelectedButton.classList.remove("clicked");
        });
        // And arrange the styles for the last clicked //  
        ratingButton.classList.add("clicked");
        // We assign the value of clicked button to the span element //
        result.innerHTML = ratingButton.innerHTML;
    });
});

// When clicked the submit button//
submitButton.addEventListener("click", () => {
    /* We remove the "hidden" status
    of our rating result screen so that it is visible. */
    secondContainer.classList.remove("hidden");
    // On the contrary, rating screen is not visible // 
    firstContainer.style.display = "none";
});