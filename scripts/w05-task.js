/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create HTML <article> element
        const article = document.createElement('article');
        
        // Create HTML <h3> element
        const heading = document.createElement('h3');
        heading.textContent = temple.templeName;
        
        // Create HTML <img> element
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        
        // Append <h3> and <img> to <article>
        article.appendChild(heading);
        article.appendChild(image);
        
        // Append <article> to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templesData = await response.json();
    // Assign the temples data to the global templeList array variable
    templeList = templesData;
    // Call the displayTemples function and pass it the list of temples
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clears all <article> elements from templesElement
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Clear the output
    
    const filter = document.getElementById('filtered').value; // Get the value of the filter dropdown
    
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
        displayTemples(temples);
        break;
    }
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();