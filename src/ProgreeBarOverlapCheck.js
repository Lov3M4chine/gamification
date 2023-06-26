// A function to check if two elements overlap.
// This function uses getBoundingClientRect which returns the size of an element 
// and its position relative to the viewport.
function isOverlapping(element1, element2) {
    // getBoundingClientRect returns an object with properties: 
    // top, right, bottom, left, width, and height.
    // These denote the element's position and size in pixels.
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    // We check if rect1 (element1) and rect2 (element2) overlap by checking if they do NOT miss each other in any direction.
    // If any of these conditions is true, it means they are missing each other on some side, hence they are NOT overlapping.
    // So, return the negation of this whole condition to get if they ARE overlapping.
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

// The main function for adding observers to progress bars.
export function hideProgressBarOnOverlap() {
    // Query all attributes, progress bars, and experience numbers from the DOM.
    const attributes = document.querySelectorAll('.attribute');
    const progressBars = document.querySelectorAll('.progress-bar');
    const experienceNumbers = document.querySelectorAll('.experience-numbers');

    // For each attribute, check if it overlaps with the corresponding progress bar.
    attributes.forEach((attribute, index) => {
        // If the attribute overlaps with the progress bar,
        // hide the progress bar and style the experience number.
        if (isOverlapping(attribute, progressBars[index])) {
            console.log("Progress bars are overlapping with attributes. Hiding element.");

            // Add the 'hidden' class to hide the progress bar.
            progressBars[index].classList.add("hidden");

            // Add classes to style the experience number. 
            experienceNumbers[index].classList.add("bg-primary", "text-primary-content", "rounded-xl", "m-1", "pl-1", "pr-1", "w-fit");
        }
    });
}
