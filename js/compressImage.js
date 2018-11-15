import uploadPic from '../js/uploadPic'
export default function compressImage(base64, quality, mimeType) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas')
        const img = new Image();
        img.src = base64
        img.crossOrigin = 'anonymous'
        img.onload = () => {
            // 画布宽高
            const canvasWidth = document.documentElement.clientWidth * window.devicePixelRatio;
            const canvasHeight = document.documentElement.clientHeight * window.devicePixelRatio;
      
            // 计算缩放因子
            // 这里我取水平和垂直方向缩放因子较大的作为缩放因子，这样可以保证图片内容全部可见
            const scaleX = canvasWidth / img.width;
            const scaleY = canvasHeight / img.height;
            const scale = Math.min(scaleX, scaleY);

            // 将原始图片按缩放因子缩放后，绘制到画布上
            const ctx = canvas.getContext("2d");
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const imageWidth = img.width * scale;
            const imageHeight = img.height * scale;
            const dx = (canvasWidth - imageWidth) / 2;
            const dy = (canvasHeight - imageHeight) / 2;
            ctx.drawImage(img, dx, dy, imageWidth, imageHeight);
            let imageData = canvas.toDataURL(mimeType, quality / 100)
            document.querySelector('img.preview').src = imageData
            resolve(uploadPic(imageData, mimeType))
        }
        img.onerror = (e) => reject(e);
    })
}