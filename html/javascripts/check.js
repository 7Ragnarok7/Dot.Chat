var check = () => {
    if (document.getElementById('pwd').value) {
        if (document.getElementById('pwd').value ==
            document.getElementById('confirm_pwd').value) {
            document.getElementById('message').style.color = 'lawngreen';
            document.getElementById('message').innerHTML = 'Password Matching';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Password Not Matching';
        }
    }
}
