// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    var array = []
    array.push(document.getElementById('moto'));
    array.push(document.getElementById('mainbuttons'));
    array.push(document.getElementById('partners'));
    array.push(document.getElementById('inbox'));
    array.push(document.getElementById('inbox2'));
    array.push(document.getElementById('carusell'));
    array.push(document.getElementById('leftcard'));
    array.push(document.getElementById('rightcard'));
    array.push(document.getElementById('advanceai'));
    array.push(document.getElementById('section3'));
    array.push(document.getElementById('section3inbox'));
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
        );
    }
    function checkVisibility() {
        array.forEach(element => {
            if (isInViewport(element)) {
                console.log("visible")
                element.classList.add('visible');

            }
            else{
                element.classList.remove('visible');
            }
        });
    }
    // Check visibility on scroll and resize events
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
    document.getElementById('logoname').classList.add('visible');
    document.getElementById('navbar').classList.add('visible');
});
