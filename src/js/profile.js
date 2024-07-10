const profileEdit = document.querySelector('.profile__button__edit');
const profileDone = document.querySelector('.profile__button__done');

function goEditPage() {
  location.href = '/pages/profilesForEdit.html';
}
function goSelectPage() {
  location.href = '/pages/profiles';
}

if (profileEdit) {
  profileEdit.addEventListener('click', goEditPage);
}

if (profileDone) {
  profileDone.addEventListener('click', goSelectPage);
}
