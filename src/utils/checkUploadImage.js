const checkUploadImage = objToCheck => {
  return new Promise((resolve, reject) => {
    const { obj, type, size, height, width } = objToCheck;
    const result = { validImage: false, errorMessage: '' };
    if (obj?.size <= size * 1024) {
      if (type.includes(obj.type)) {
        let img = new Image();
        img.src = window.URL.createObjectURL(obj);
        img.onload = () => {
          let actualHeight = img.height;
          let actualWidth = img.width;
          window.URL.revokeObjectURL(img.src);
          console.log(actualHeight + ' * ' + actualWidth);
          console.log(actualHeight, height, actualWidth, width);
          result.validImage = actualHeight >= height && actualWidth >= width;
          result.validImage
            ? (result.errorMessage = '')
            : (result.errorMessage = 'Minimum size of photo 70x70px');
          resolve(result);
        };
        img.onerror = reject;
      } else {
        result.errorMessage = 'The photo format must be jpeg/jpg type';
        resolve(result);
      }
    } else {
      result.errorMessage = 'The photo size must not be greater than 5 Mb';
      resolve(result);
    }
  });
};

export default checkUploadImage;
