function readJSON(path) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.responseType = "blob";
    xhr.onload = function(e) {
        if(this.status = 200) {
            const file = new File([this.response], 'temp');
            const fileReader = new fileReader();
            fileReader.addEventListener('load', function() {

            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}