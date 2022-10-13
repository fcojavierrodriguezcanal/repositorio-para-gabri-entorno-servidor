function isSimilar(arrX, arrY) {
  if (typeof arrX !== typeof arrY){
		return false;
	}
  if (Array.isArray(arrX) && arrX.length === arrY.length){
    return arrX.every((x, i) => isSimilar(x, arrY[i]));
	}
  else if (typeof arrX === "object" && isSimilar(Object.keys(arrX), Object.keys(arrY))){
    return Object.keys(arrX).every(k => isSimilar(arrX[k], arrY[k]));
	}
  else{
    return arrX === arrY;
	}
}