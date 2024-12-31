const selectElements = document.querySelectorAll('.dynamic-select');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function updateOptionsVisibility(selectElement) {
    const selectedIndex = selectElement.selectedIndex;
    Array.from(selectElement.options).forEach((option, index) => {
        option.style.display = index === selectedIndex ? 'none' : 'block';
    });
}

function addListeners() {
    selectElements.forEach(selectElement => {
        updateOptionsVisibility(selectElement);
        if (!selectElement.hasAttribute('data-listener-added')) {
            selectElement.addEventListener('change', () => updateOptionsVisibility(selectElement));
            selectElement.setAttribute('data-listener-added', 'true');
        }
    });
}

function resetOptionsVisibility() {
    selectElements.forEach(selectElement => {
        Array.from(selectElement.options).forEach(option => {
            option.style.display = 'block';
        });
    });
}

function handleMediaQueryChange(e) {
    if (e.matches) {
        addListeners();
    } else {
        resetOptionsVisibility();
    }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQueryChange);