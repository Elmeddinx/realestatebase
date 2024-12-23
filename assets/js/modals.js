// announcement modal

document.getElementById('createAnnouncement').addEventListener('click', () => {
    const announcementModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    announcementModal.show();
  })