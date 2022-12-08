const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "eng", // default
    oem: 1,
    psm: 4,
    dpi: 300,

}

async function main() {
    let image = 'c.jpg'

    try {
        const text = await tesseract.recognize(image, config)
        let text1 = text.split("\n");
        console.log(text1);
        let ifsc = text1.filter((r) => r.includes('IFSC') || r.includes('IFC') || r.includes('IFS'));
        if (ifsc) {
            const data = ifsc[0].split(' ');
            const result = data.filter((r) => r.length === 11);
            console.log(result);
        }
        ifsc[0].replace('/', '');
        ifsc[0].replace(':', '')
        ifsc[0].replace(')', '')

        const accNo = text1.filter((r) => r.length === 13);
        console.log(accNo);




    } catch (error) {
        console.log(error.message)
    }
}

main()