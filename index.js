const onClick = () => {
    const inputElement = document.getElementById("urlInput");
    if (inputElement.value === "") {
        alert("空のURLは指定できません");
    } else {
        window.location.href = `https://kaneka.site/?url=${inputElement.value}`;
    }
}
const getParam = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const initFunc = () => {
    const qUrl = getParam("url", window.location.href);
    if (qUrl !== null) {
        const qrInputElement = document.getElementById("qrInputArea");
        qrInputElement.innerHTML =
            `<a href="${qUrl}" target="_blank">送金先
            ${qUrl.indexOf("paypay") !== -1 ? "(PayPay)" : ""}
            </a><div id="qrcode"></div><p>返すかわからん</p>`;
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qUrl,
            width: 300,
            height: 300,
            colorDark : "#ffffff",
            colorLight : "#000000",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}

initFunc();