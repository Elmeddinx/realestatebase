const allContainers = document.querySelectorAll('.dial-button-mobile-container, .dial-button-container');

// allContainers.forEach((container) => {
//   const numberButton = container.querySelector('.numberButton');
//   const numberList = container.querySelector('.numberList');
//   const phoneNumbers = numberList.querySelectorAll('li');
//   const firstPhoneNumber = container.querySelector('.firstPhoneNumber');

//   let isNumberListVisible = false;

//   numberButton.addEventListener('click', function () {
//     if (isNumberListVisible) {
//       phoneNumbers.forEach((phone) => {
//         phone.style.display = 'none';
//       });
//       numberButton.classList.remove('hidden');
//     } else {
//       phoneNumbers.forEach((phone) => {
//         phone.style.display = 'block';
//       });
//       numberButton.classList.add('hidden');
//     }
//     isNumberListVisible = !isNumberListVisible;
//   });

//   phoneNumbers.forEach((phone) => {
//     phone.addEventListener('click', function () {
//       alert('Aranıyor: ' + phone.textContent);
//     });
//   });

//   if (firstPhoneNumber) {
//     firstPhoneNumber.classList.add('starred');
//   }

//   if (container.classList.contains('dial-button-mobile-container')) {
//     console.log('Bu bir mobil bileşen.');
//   } else if (container.classList.contains('dial-button-container')) {
//     console.log('Bu bir normal bileşen.');
//   }
// });


// scroll event listener
// window.addEventListener('scroll', function() {
//   const dialButtonContainer = document.querySelector('.dial-button-mobile-container');
//   const similarAnnouncements = document.querySelector('.similar-announcements');

//   // Similar announcements'ı almak ve onun konumunu kontrol etmek
//   const similarTop = similarAnnouncements.getBoundingClientRect().top;

//   if (similarTop <= dialButtonContainer.offsetHeight) {
//       dialButtonContainer.style.position = 'absolute';  // similar-announcements div'ine ulaşıldığında sabitliği kaldır
//   } else {
//       dialButtonContainer.style.position = 'sticky';  // normalde sticky yap
//   }
// });



const visibleNumber = document.getElementById('number-visible');
const hiddenNumber = document.getElementById('number-hidden');

hiddenNumber.addEventListener('click', ()=>{
  hiddenNumber.style.display = 'none'
  visibleNumber.style.display = 'flex'
})