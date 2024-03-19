document.body.insertAdjacentHTML('beforeend', `
<div  id="loader">  
<div class="boxes">
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  </div>
`);

// Animatsiyani ishga tushirish
setTimeout(function() {
    loader.style.display = 'none'; // Loaderni yashirish
}, 2000); // 5 sekunddan so'ng