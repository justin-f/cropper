$(document).ready(function () {
$uploadCrop = $('#upload-demo').croppie({
    enableExif: true,
    viewport: {
        width: 216,
        height: 216,
        type: 'circle'
    },
    boundary: {
        width: 300,
        height: 300
    }
}});