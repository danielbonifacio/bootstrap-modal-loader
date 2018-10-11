var $modals = $('.modal-loader');
var template = '<div class="modal-loading" style="display:none;"><div class="wrapper"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div></div>';

$modals.find('.modal-body').prepend(template);

var ModalLoadingController= {
  start() {
    $('.modal-loading').fadeIn(250);
  },

  end() {
    $('.modal-loading').fadeOut(250);
  }
};

$('#close').on('click', function() {
  event.preventDefault();
  ModalLoadingController.start();
  setTimeout(() => {
    ModalLoadingController.end();
  }, 3000);
});