const simpleSort = document.getElementById("simpleSort");
const advancedSort = document.getElementById("advancedSort");

simpleSort.addEventListener('click', () => {
  var array = new Uint8Array(ctx.getImageData(0, 0, 500, 500).data.buffer);
  console.log(array);
});

advancedSort.addEventListener('click', () => {
  var imageData = ctx.createImageData(500, 500);
  var k = 0;
// Iterate through every pixel
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i + 0] = k; // R value
    imageData.data[i + 1] = k; // G value
    imageData.data[i + 2] = k; // B value
    imageData.data[i + 3] = 255; // A value
    k += 0.001;
  }
  console.log(imageData);
  ctx.putImageData(imageData, 0, 0);
});
