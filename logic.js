const button = document.querySelector('.btn');
const input = document.getElementById('input');
const copyIcon = document.querySelector('.fa-copy');

button.addEventListener("click",()=>{
createPassword()
});

copyIcon.addEventListener("click",()=>{
    copyPassword();
})

function createPassword(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
    const passLength = 16;
    let password = ""
    for (let index = 0; index < passLength; index++) {
        const randomPass = Math.floor(Math.random()  * chars.length);
        password += chars.substring(randomPass,randomPass + 1)
    }
input.value = password
}

function copyPassword(){
    input.select()
    input.setSelectionRange(0,9999)
    navigator.clipboard.writeText(input.value)
}