function showPrice(selectElement, priceDisplayId,addcartcontainer) {
    // Get the price display element
    const priceDisplay = document.getElementById(priceDisplayId);
    
    const addCartContainer = document.getElementById(addcartcontainer);
    // images
    const imageContainer = document.getElementById('showimages');
   
    addCartContainer.innerHTML = '';
    imageContainer.innerHTML='';
   
        
    if (selectElement.value) {
        
        priceDisplay.innerHTML = `Price:<span style="color:green">$${selectElement.value}</span> `;
      
    
            
      // Create the Add to Cart button
      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'add-cart-button';
      addToCartButton.textContent = 'Add Cart';
    
      addCartContainer.appendChild(addToCartButton);
    //   images
    const selectedOption = selectElement.options[selectElement.selectedIndex];
            const imageSrc = selectedOption.getAttribute('data-images');

            // Create image element and add it to the container
            const image = document.createElement('img');
            image.src = imageSrc;
            image.alt = "Product Image";
            image.className = "product-image"; // Add class for styling
            
            // Append the image to the image container and display it
            imageContainer.appendChild(image);
            imageContainer.style.display = 'block'; 

         
     

      
        
     
    } else {
        priceDisplay.textContent = '';
        // images
        imageContainer.style.display = 'none';
       
       
    }
}

// Make the toggle buttons functional and ensure only one opens at a time
const toggles = document.querySelectorAll('.toggle');

toggles.forEach(button => {
    button.addEventListener('click', function () {
        // Close all other collapsible content
        toggles.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle the current content
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
