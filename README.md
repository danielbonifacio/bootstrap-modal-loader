# Custom Modal Loading

1. Importe os arquivo SCSS e JS para seu projeto;
2. Adicione a classe `modal-loader` para ao seu modal.
3. Utilize as funções `start()` e `end()` do controller, para controllar o loader.

Veja a [Demo](https://danielbonifacio.com.br/boostrap-modal-loader)

## Exemplo de uso

``` html
<div class="modal modal-loader" id="modal">
  <div class="modal-diadlog" role="document">
    <div class="modal-content">
      <div class="modal-header"></div>
      <div class="modal-body">
        <h3>Olha pra mim</h3>
        <p>Sou um modal muito supimpa e meu conteúdo vai ser dinâmico.</p>
      </div>
      <div class="modal-footer">
        <button 
          class="btn btn-secondary"
          data-dismiss="modal">
          Fechar
        </button>
        <button
          id="load"
          class="btn btn-primary">
          Salvar
        </button>
      </div>
    </div>
  </div>
</div>

<script>
  $('#load').on('click', function() {
    ModalLoadingController.start();
    axios.get('//api.com/batata')
      .finally(() => {
        ModalLoadingController.end();
      });
  });
</script>
```