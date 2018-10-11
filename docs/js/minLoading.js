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
