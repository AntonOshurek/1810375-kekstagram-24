export default function addPicture() {
  const body = document.querySelector('body');
  const uploadFile = document.querySelector('#upload-file');
  const imageUpload = document.querySelector('.img-upload__overlay');
  const imageUploadCancel = document.querySelector('.img-upload__cancel');

  const onUploadEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      uploadModalClose();
    }
  };

  const onCancelClick = () => {
    uploadModalClose();
  };

  function uploadModalOpen () {
    imageUpload.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.addEventListener('click', onCancelClick);
  }

  function uploadModalClose () {
    imageUpload.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onCancelClick);
    imageUploadCancel.removeEventListener('click', onCancelClick);
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
  });
}
