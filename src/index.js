import api from '../js/change'
import fileToBase64ByQuality from '../js/fileToBase64ByQuality'
api.addEventListener('change', onFileChange);

function onFileChange(e) {
    const files = Array.prototype.slice.call(e.target.files);
    const file = files[0]
    fileToBase64ByQuality(file, 80)
}