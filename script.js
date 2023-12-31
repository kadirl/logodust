// Create the logo component
function createLogoComponent() {
    // Create the main container
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-item');
  
    // Create the logo image
    const logoImage = document.createElement('img');
    logoImage.src = getRandomLogoSrc();
    logoImage.alt = '';
  
    // Create the buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');
  
    // Create the download button
    const downloadButton = createButton('assets/icons/download-01.svg', 'Download', 'download');
    downloadButton.classList.add('button');
    downloadButton.addEventListener('click', DownloadClickListener.bind(null, logoImage.src));
    buttonsContainer.appendChild(downloadButton);
  
    // Create the copy SVG button
    const copyButton = createButton('assets/icons/copy-05.svg', 'Copy SVG', 'copy-svg');
    copyButton.classList.add('button');
    copyButton.addEventListener('click',  CopyClickListener.bind(null, logoImage.src));
    buttonsContainer.appendChild(copyButton);
  
    // Append elements to the main container
    logoContainer.appendChild(logoImage);
    logoContainer.appendChild(buttonsContainer);
  
    // Append the logo component to the target element
    const targetElement = document.getElementById('logos');
    targetElement.appendChild(logoContainer);
}
  

// Create a button with an icon and text
function createButton(iconSrc, buttonText, buttonClass) {
    const button = document.createElement('button');
    button.classList.add(buttonClass);

    const icon = document.createElement('img');
    icon.src = iconSrc;
    icon.alt = '';

    button.appendChild(icon);
    button.appendChild(document.createTextNode(buttonText));

    return button;
}


// Get random logo src
function getRandomLogoSrc() {
    // Generate a random number between 1 and 9
    const randomNumber = Math.floor(Math.random() * 9) + 1;
  
    // Format the logo number with leading zeros
    const logoNumber = randomNumber.toString().padStart(2, '0');
  
    // Build the logo source path
    const logoSrc = `assets/logos/logo-${logoNumber}.svg`;
  
    return logoSrc;
}

// Download SVG click listener
function DownloadClickListener(src) {
    const link = document.createElement('a');
    link.href = src; // Replace with the actual path to your SVG file
    const parts = src.split('/');
    link.download = parts[parts.length - 1]; // Specify the desired filename for the downloaded file
    link.click();
}

// Copy SVG click listener
function CopyClickListener(svgFileURL) {
    fetch(svgFileURL)
        .then(response => response.text())
        .then(svgContent => {
            navigator.clipboard.writeText(svgContent).then(function() {
                console.log("Copying to clipboard was successful!");
            }, function(err) {
                console.error("Could not copy text: ", err);
            })
        })
}

// Insert 16 random logos
for (let i = 0; i < 24; i++) {
    createLogoComponent();
}
