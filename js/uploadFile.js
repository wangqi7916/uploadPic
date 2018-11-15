export default function uploadFile(file) {
    var formData = new FormData()
    formData.append('imageUrl',file)
    formData.append('projectId', 376)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://top.yidianzixun.com/image/verify')
    xhr.onreadystatechange = () => {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const result = JSON.parse(this.responseText)
            console.log(result)              
        } else {
            reject(this.responseText)
        }
    }
    xhr.send(formData)
}