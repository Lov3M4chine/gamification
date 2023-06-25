const characterPage = document.getElementById("character-page");
const rewardsPage = document.getElementById("rewards-page");
const storyPage = document.getElementById("story-page");
const promptsPage = document.getElementById("prompts-page");
const characterFooter = document.getElementById("character-footer");
const rewardsFooter = document.getElementById("rewards-footer");
const storyFooter = document.getElementById("story-footer");
const promptsFooter = document.getElementById("prompts-footer");
const pages = [characterPage, rewardsPage, storyPage, promptsPage];

function showPage (pageElement) {
    pages.forEach(function(page) {
        page.classList.add("hidden");
    });
    pageElement.classList.remove('hidden');
}

export function addFooterEventListeners () {
    characterFooter.addEventListener('click', () => {showPage(characterPage)});
    rewardsFooter.addEventListener('click', () => {showPage(rewardsPage)});
    storyFooter.addEventListener('click', () => {showPage(storyPage)});
    promptsFooter.addEventListener('click', () => {showPage(promptsPage)});
    console.log(`Footer event listeners added.`)
}