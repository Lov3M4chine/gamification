const characterPage = document.getElementById("character-page");
const rewardsPage = document.getElementById("rewards-page");
const storyPage = document.getElementById("story-page");
const promptsPage = document.getElementById("prompts-page");
const characterFooter = document.getElementById("character-footer");
const rewardsFooter = document.getElementById("rewards-footer");
const storyFooter = document.getElementById("story-footer");
const promptsFooter = document.getElementById("prompts-footer");
const pages = [characterPage, rewardsPage, storyPage, promptsPage];
const footers = [characterFooter, rewardsFooter, storyFooter ,promptsFooter]

function highlightFooterSelection (target) {
    footers.forEach(function(footer) {
        footer.classList.remove("bg-accent", "text-accent-content", "rounded");
    });
    target.classList.add("bg-accent", "text-accent-content", "rounded");
}

function showPage (pageElement) {
    pages.forEach(function(page) {
        page.classList.add("hidden");
    });
    pageElement.classList.remove('hidden');
}

function togglePageSelection(pageElement, event) {
    showPage(pageElement);
    highlightFooterSelection(event.target);
}

export function addFooterEventListeners () {
    characterFooter.addEventListener('click', (event) => {
        togglePageSelection(characterPage, event)});
    rewardsFooter.addEventListener('click', (event) => {togglePageSelection(rewardsPage, event)});
    storyFooter.addEventListener('click', (event) => {togglePageSelection(storyPage, event)});
    promptsFooter.addEventListener('click', (event) => {togglePageSelection(promptsPage, event)});
    console.log(`Footer event listeners added.`)
}