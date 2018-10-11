import $ from 'jquery';

const $modal = $('.modal-loader');
const $loading = $('.modal-loading');
$modal.prepend(`
<div class="modal-loading" style="display:none;">
  <div class="wrapper">
  <div class="lds-ellipsis">
    <div></div><div></div><div></div><div></div>
    </div>
  </div>
</div>`);

class ModalLoadingController {
  
  static end() {
    $loading.fadeOut(250);
  }
  
  static start() {
    $loading.fadeIn(250);
  }
};

export default ModalLoadingController;
