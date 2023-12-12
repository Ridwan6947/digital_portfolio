document.addEventListener('DOMContentLoaded', function () {
  const textToType = "Hello, I'm a Full stack developer and a Salesforce Administrator";
  const typingElement = document.getElementById('typing');

  function typeText(index) {
      typingElement.textContent = textToType.slice(0, index);

      if (index < textToType.length) {
          setTimeout(function () {
              typeText(index + 1);
          }, 100); // Adjust the typing speed here (milliseconds)
      }
  }

  typeText(0);
});
function redirectToGoogleDrive() {
  // Replace 'YOUR_GOOGLE_DRIVE_LINK' with your actual Google Drive link
  var googleDriveLink = 'https://drive.google.com/file/d/16zb7TetVlVqe44J4MvXP4UxRa_drbgoT/view?usp=drive_link';
  
  // Open the link in a new tab
  window.open(googleDriveLink, '_blank');
}

function redirectToUni(){
  var uni = 'https://coursera.org/share/36e94d396431a932751f2a9894edc891'

  window.open(uni , '_blank')
}
function redirectTonass(){
  var nass = 'https://drive.google.com/file/d/1ODsbSnXDsATxOiZ0uB85ndy3OQ2_Yp2u/view?usp=drive_link'

  window.open(nass , '_blank')
}
function redirectToleeps(){
  var leeps = 'https://drive.google.com/file/d/1AaVYEG3yIH9kcFN8Z0gnnutyL9LgbMCw/view?usp=drive_link'

  window.open(leeps , '_blank')
}