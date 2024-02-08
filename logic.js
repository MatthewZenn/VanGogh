document.getElementById("close").addEventListener('click', () => {
  window.close();
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
const realButton = document.getElementById("input");
const fakeButton = document.getElementById("selectImage");
const image = document.getElementById('image');

/**
 * Maps the button for selecting an image to include in the generated article.
 */
fakeButton.addEventListener("click", function() {
  realButton.click()
});


/**
* Handler for selecting an image to include in the generated article.
*/
realButton.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function() {
          image.setAttribute('src', this.result);
      });
      reader.readAsDataURL(file);
  }
});

image.addEventListener('load', e => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});