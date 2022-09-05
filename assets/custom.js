/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */



if (window.matchMedia("(max-width: 768px)").matches) {
  	window.onscroll = function() {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
          btn = document.getElementById('scrollToTop');
      if (btn) btn.style.display = pageOffset > 1200 ? 'block' : 'none';
	}
} 

function parcelamento() {
  var preco = $('.product-form__info-item .price.price--highlight, .price.precocheio').text().split('                  ')[0].replace('R$ ','').replace(',', '.').split(' ')[0].split('-')[0].trim()
  var compare = $('.product-form__info-item .price--compare').text().replace('R$ ', '').replace(',','.')
  var compare = parseFloat(compare)
  var precompare = (compare - preco).toFixed(2).replace('.', ',')
  $('.product-label.product-label--on-sale span').text('R$ '+ precompare)
  var porcent = ((compare - preco) * 100 / compare).toFixed(2).split('.')[0]
  $('.precocheio .product-label.product-label--on-sale').empty()
  $('.price--highlight .product-label.product-label--on-sale').append('-' + porcent + '% OFF')    
  var preco = parseFloat(preco);
  var calculo = ((preco + 0) * 1.0) / 12;
  var calculo = calculo.toFixed(2).replace('.', ',');
  var calculo = ('R$ ' + calculo);
  $('.parcelamento').html('<span>em até 12x de <b>' + calculo + '</b></span>');
  console.log('teste')
}


$(".block-swatch__radio, .variant-swatch__radio").change(function () {
  setTimeout(function () { parcelamento(); }, 150);
});

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

