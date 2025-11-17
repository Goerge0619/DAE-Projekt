//Update cart Tooltip
const buttons = document.querySelectorAll('.js-add-to-cart');
const cartToolTip = document.querySelector('.tool-tip');
const cartToolTipPadding = getComputedStyle(cartToolTip).padding;

buttons.forEach(button => {
  button.addEventListener('click', function(){
    let currentValue = Number(cartToolTip.textContent) || 0;
    cartToolTip.textContent = currentValue + 1;

    if(currentValue + 1 >= 10){
      cartToolTip.style.padding = '2px 2px';
    } else {
      cartToolTip.style.padding = '';
    }
  });
});


//Show the side bar
document.querySelector('.hamburger-menu').addEventListener('click', function(){

  const sideBar = document.querySelector('.side-bar');
  const mainContainer = document.querySelector('.main-container');
  const svgContainer = document.querySelectorAll('.svg');
  const optionsTab = document.querySelector('.options');

  const sideBarWidth = getComputedStyle(sideBar).width;
  const mainContainerMargin = getComputedStyle(mainContainer).margin;
  const optionsTabLeft = getComputedStyle(optionsTab).left;
  const optionsTabRight = getComputedStyle(optionsTab).right;

  if(sideBarWidth === '0px'){
    sideBar.style.width = '60px';
    mainContainer.style.margin = '105px 0px 0px 65px'
    svgContainer.forEach(svg => {
      svg.style.display = 'inline-flex';
    optionsTab.style.left = '95px';
    optionsTab.style.right = '40px';
    });
  } else {
    sideBar.style.width = '';
    mainContainer.style.margin = '';
    svgContainer.forEach(svg => {
      svg.style.display = 'none';
    optionsTab.style.left = '';
    optionsTab.style.right = '';
    });
  }
})

//Products Selectors 

function showOnly(className) {
  document.querySelectorAll('.product-container').forEach(el => { 
    el.style.display = el.classList.contains(className) ? 'grid' : 'none';
  });
}

document.querySelector('.js-show-helmets')
  .addEventListener('click', () => showOnly('helmet-container'));

  document.querySelector('.js-show-bikes')
  .addEventListener('click', () => showOnly('bike-container'));

  document.querySelector('.js-show-suspensions')
  .addEventListener('click', () => showOnly('suspensions-container'));

  document.querySelector('.js-show-shoes')
  .addEventListener('click', () => showOnly('shoes-container'));

  document.querySelector('.js-show-gloves')
  .addEventListener('click', () => showOnly('gloves-container'));

  document.querySelector('.js-show-protectors')
  .addEventListener('click', () => showOnly('protectors-container'));

document.querySelector('.js-show-jersey')
  .addEventListener('click', () => showOnly('jersey-container'));

document.querySelector('.js-show-all')
  .addEventListener('click', () => {
    document.querySelectorAll('.product-container')
      .forEach(el => el.style.display = 'grid');
  });

//Einkaufswagen

document.querySelectorAll('.js-add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-container');
    const name = product.querySelector('.name').textContent;
    const price = product.querySelector('.price').textContent;
    const img = product.querySelector('img').src;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, img });
    localStorage.setItem('cart', JSON.stringify(cart));
  });
});

