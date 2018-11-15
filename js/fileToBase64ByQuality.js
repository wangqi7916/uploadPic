import compressImage from '../js/compressImage'
export default function fileToBase64ByQuality(file, quality) {
    let fileReader = new FileReader()
    let type = file.type

    return new Promise((resolve, reject) => {
        if (window.URL || window.webkitURL) {
            resolve(compressImage(URL.createObjectURL(file), quality, type))
        } else {
            fileReader.onload = () => {
                resolve(compressImage(URL.createObjectURL(file), quality, type))
            }
            fileReader.onerror = (e) => {
                reject(e)
            }
            fileReader.readAsDataURL(file)
        }
    })
}