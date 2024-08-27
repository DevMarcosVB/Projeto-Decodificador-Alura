let option = "";

function encode(text)
{
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
}

function decode(text)
{
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}

function get_option(value)
{
    option = value;
    let result = "";
    const textElement = document.getElementById("text");
    const resultElement = document.getElementById("result");

    if (/^[a-z\s]+$/.test(textElement.value)) {
        console.log("The value is valid.");
        const text = textElement.value.toLowerCase();
        
        if (option === "encode") {
            result = encode(text);
        } else if (option === "decode") {
            result = decode(text);
        }
        
        resultElement.value = result;
    } else {
        console.log("The value is invalid.");
        result = "Digite um texto válido :(";
        resultElement.value = result;
    }
}

function copy_text()
{
    let text_copied = document.getElementById("result");
    text_copied.select();
    text_copied.setSelectionRange(0, 99999)
    document.execCommand("copy");
}