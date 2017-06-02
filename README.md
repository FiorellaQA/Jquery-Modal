# Modal Jquery

Implementación de un modal básico utilizando la librería de Jquery.

```javascript
$(function() {
    $("#openModal-js").on('click',function(e) {
        e.preventDefault();
        $('.bodyModal').show();
    });

    $("#closeModal-js").on('click',function(e){
        e.preventDefault();
        $('.bodyModal').hide();
    })
});
```

