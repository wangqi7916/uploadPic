import uploadFile from '../js/uploadFile'
export default function uploadPic(base64, mimeType) {
    return new Promise((resolve, reject) => {
        let bytes = window.atob(base64.split(',')[1])
        let ab = new ArrayBuffer(bytes.length)
        console.log(ab.byteLength)
        let ia = new Uint8Array(ab)
        console.log(ia)
        for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i)
        }
        let _blob = new Blob([ab], { type: mimeType })
        console.log(_blob)

        var formData = new FormData()
        formData.append('file', _blob)
        console.log(formData.get('file'))
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://top.yidianzixun.com/tool/public/file/upload')
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const result = JSON.parse(this.responseText)
                console.log(result)
                resolve(uploadFile(result.url[0]))                
            } else {
            reject(this.responseText)
            }
        }
        xhr.send(formData)
    })
}