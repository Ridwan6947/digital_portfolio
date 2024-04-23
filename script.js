document.addEventListener('DOMContentLoaded', function () {
  const textToType = "Hello, I'm a Full stack developer and a Salesforce Administrator";
  const typingElement = document.getElementById('typing');

  function typeText(index) {
    typingElement.textContent = textToType.slice(0, index);

    if (index < textToType.length) {
      setTimeout(function () {
        typeText(index + 1);
      }, 80); // Adjust the typing speed here (milliseconds)
    } else {
      // Typing has reached the end, restart after a delay
      setTimeout(function () {
        typeText(0);
      }, 2000); // Adjust the delay before restarting (milliseconds)
    }
  }

  // Start the typing animation
  typeText(0);
});

function redirectToGoogleDrive() {
  // Replace 'YOUR_GOOGLE_DRIVE_LINK' with your actual Google Drive link
  var googleDriveLink = 'https://drive.google.com/file/d/1lZER0QgKi1uFhU534QLJuKHWwg4XF96F/view?usp=drive_link';
  
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
function redirectTocipherguard(){
  var cg = 'https://github.com/Ridwan6947/Password-checker-final-Project-'

  window.open(cg,'_blank')
}
function redirectTodd(){
  var dd = 'https://github.com/Ridwan6947/Drowsiness-Detection'

  window.open(dd,'_blank')
}
