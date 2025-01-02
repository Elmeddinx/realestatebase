$(function () {
  var $fotorama = $('#fotorama').fotorama().data('fotorama');


  $('.fotorama').on('click', function () {
    $fotorama.requestFullScreen();
  });
});



// $(function () {
//   // Fotorama başlatılıyor
//   var $fotorama = $('#fotorama').fotorama({
//     nav: 'thumbs',          // Küçük resim navigasyonu
//     thumbmargin: 5,         // Küçük resimler arasındaki boşluk
//     maxheight: 300,         // Fotorama yüksekliği
//     allowfullscreen: true,  // Fullscreen moduna izin ver
//   }).data('fotorama');

//   // Küçük resim navigasyonunu güncelleyen bir fonksiyon
//   function updateThumbnails(fullscreenMode) {
//     const $nav = $('.fotorama__nav'); // Küçük resim navigasyonu
//     const $frames = $('.fotorama__nav__frame'); // Her bir küçük resim çerçevesi

//     if (fullscreenMode) {
//       // Fullscreen modunda tüm küçük resimleri göster ve kaydırmayı aktif et
//       $frames.show();
//       $nav.css('overflow', 'visible');
//     } else {
//       // Normal modda sadece ilk 6 küçük resmi göster ve kaydırmayı devre dışı bırak
//       $frames.each(function (index) {
//         if (index >= 6) {
//           $(this).hide(); // 6'dan sonrasını gizle
//         } else {
//           $(this).show(); // İlk 6 tanesini göster
//         }
//       });
//       $nav.css('overflow', 'hidden'); // Kaydırmayı devre dışı bırak
//     }
//   }

//   // Fullscreen moduna girildiğinde tüm küçük resimleri göster
//   $('.fotorama').on('fotorama:fullscreenenter', function () {
//     updateThumbnails(true);
//   });

//   // Fullscreen modundan çıkıldığında sadece 6 küçük resmi göster
//   $('.fotorama').on('fotorama:fullscreenexit', function () {
//     setTimeout(() => updateThumbnails(false), 0); // DOM tamamen güncellendikten sonra çalıştır
//   });

//   // Sayfa yüklendiğinde normal mod için küçük resimleri güncelle
//   updateThumbnails(false);
// });



