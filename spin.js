// Στοιχεία της σελίδας
const spinButton = document.querySelector('.wheel-cursor');
const wheel = document.querySelector('.wheel-img');
const resultWrapper = document.querySelector('.spin-result-wrapper');
const popupWindow = document.querySelector('.pop-up-window');
const popupButton = document.querySelector('.pop-up-button');
const orderBlock = document.querySelector('.order_block');
const spinWrapper = document.querySelector('.spin-wrapper ')
const closePopup = document.querySelector('.close-popup')

let isWheelSpinning = false;
let currentDiscount = null;

// Μέθοδος για την περιστροφή του τροχού
function spinWheel() {
  if (!isWheelSpinning) {
    isWheelSpinning = true;
    wheel.classList.add('super-rotation');

    // Προσομοίωση τυχαίας περιστροφής
    const discounts = ['50%', '25%', '10%'];
    
    currentDiscount = discounts[0];

    // Μετά από 9 δευτερόλεπτα, σταματάει ο τροχός και εμφανίζεται το αποτέλεσμα
    setTimeout(() => {
      wheel.classList.remove('super-rotation');
      resultWrapper.style.display = 'block';
      popupWindow.querySelector('.pop-up-text').textContent = `Έχετε έκπτωση -${currentDiscount} στο GunTitan!`;
      isWheelSpinning = false;
      
    }, 9000);
    
  }
}


spinButton.addEventListener('click', () => {
  spinButton.disabled = true;
  spinWheel();
});


popupButton.addEventListener('click', () => {
  resultWrapper.style.display = 'none';
  spinWrapper.style.display='none'
  orderBlock.style.display = 'block';
});
closePopup.addEventListener('click', () => {
  resultWrapper.style.display = 'none';
  spinWrapper.style.display='none'
  orderBlock.style.display = 'block';
});