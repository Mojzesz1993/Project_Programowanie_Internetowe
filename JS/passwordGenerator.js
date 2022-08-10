function generatePassword(passwordLength)
{
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/?!@#$%^&*",
        passwd = "",
        output = document.getElementById("output");
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
        passwd += charset.charAt(Math.floor(Math.random() * n));
    }
    output.value = passwd;
    return passwd;
}

function copyPassword()
{
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
}

