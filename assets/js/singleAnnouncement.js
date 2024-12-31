//  const numberButton = document.getElementById('numberButton');
//  const numberList = document.getElementById('numberList');
//  const phoneNumbers = numberList.getElementsByTagName('li');
//  const firstPhoneNumber = document.getElementById('firstPhoneNumber');

//  let isNumberListVisible = false;

//  numberButton.addEventListener('click', function() {
//      if (isNumberListVisible) {
//          // Numara listesi görünüyorsa, gizle
//          for (let i = 0; i < phoneNumbers.length; i++) {
//              phoneNumbers[i].style.display = 'none';
//          }
//          numberButton.classList.remove('hidden'); // Butonu tekrar göster
//      } else {
//          // Numara listesi gizli ise, göster
//          for (let i = 0; i < phoneNumbers.length; i++) {
//              phoneNumbers[i].style.display = 'block';
//          }
//          numberButton.classList.add('hidden'); // Butonu gizle
//      }
//      // Numara listesi görünürlük durumunu değiştir
//      isNumberListVisible = !isNumberListVisible;
//  });

//  for (let i = 0; i < phoneNumbers.length; i++) {
//      phoneNumbers[i].addEventListener('click', function() {
//          // Arama yapılacak numarayı göster
//          alert('Aranıyor: ' + phoneNumbers[i].textContent);
//      });
//  }

//  firstPhoneNumber.classList.add('starred');


// Hem "mobile" hem de "normal" bileşenleri seçiyoruz
const allContainers = document.querySelectorAll('.dial-button-mobile-container, .dial-button-container');

allContainers.forEach((container) => {
  // Ortak yapıdaki öğeleri seçiyoruz
  const numberButton = container.querySelector('.numberButton');
  const numberList = container.querySelector('.numberList');
  const phoneNumbers = numberList.querySelectorAll('li');
  const firstPhoneNumber = container.querySelector('.firstPhoneNumber');

  let isNumberListVisible = false;

  // "Nömrəni göstər" düğmesine tıklama işlevi
  numberButton.addEventListener('click', function () {
    if (isNumberListVisible) {
      phoneNumbers.forEach((phone) => {
        phone.style.display = 'none';
      });
      numberButton.classList.remove('hidden');
    } else {
      phoneNumbers.forEach((phone) => {
        phone.style.display = 'block';
      });
      numberButton.classList.add('hidden');
    }
    isNumberListVisible = !isNumberListVisible;
  });

  // Telefon numaralarına tıklama işlevi
  phoneNumbers.forEach((phone) => {
    phone.addEventListener('click', function () {
      alert('Aranıyor: ' + phone.textContent);
    });
  });

  // İlk telefon numarasına ek sınıf ekleme
  if (firstPhoneNumber) {
    firstPhoneNumber.classList.add('starred');
  }

  // Mobil ve normal bileşenler için özel işlem
  if (container.classList.contains('dial-button-mobile-container')) {
    console.log('Bu bir mobil bileşen.');
    // Mobil bileşenlere özel işlemler buraya eklenebilir
  } else if (container.classList.contains('dial-button-container')) {
    console.log('Bu bir normal bileşen.');
    // Normal bileşenlere özel işlemler buraya eklenebilir
  }
});


 