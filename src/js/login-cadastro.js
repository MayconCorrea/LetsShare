// import {user} from './user.js'
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#formLogin');
const submit = document.querySelector('#submit');
const URL = 'http://localhost:3000/user';
let user = '';
let me = '';

window.onload = async() =>{
    console.log('login-load');
    await fetch(URL)
        .then(res => res.json())
        .then(res => user = res)
        // .then(res => console.log(user))

}   

form.onsubmit = async (e) => {
    e.preventDefault()
    if( email.value.length == 0 || password.value.length == 0){
        alert('Os campos precisam ser preenchidos');
        return false;
    }

    let validate = await validateUserLogin({email: email.value, password: password.value})
    
    if(validate.success){
        localStorage.setItem('token', Math.floor(Math.random() * Date.now()))
        localStorage.setItem('me', JSON.stringify(me))
        window.location.href = 'http://127.0.0.1:5500/home.html'
    } else if (validate.error){
        alert('E-mail ou Senha inválidos')
    } else {
        newUser()
    }
        
    let validate = await validateUserLogin({email: email.value, password: password.value})
};

const validateUserLogin = async ({email, password}) => {
    let login = {};

    let validateEmail = user.find( value => {
        me = {
            id: value.id,
            name: value.name,
            email: value.email
        }

        return value.email == email
    })


    if(!validateEmail){
        return login = {
            notFound: true
        }
    }

    let validatePassword = validateEmail.senha == password ? true : false
    
    if(validatePassword){
        return login = {
            success: true
        };

    } else {
        return login = {
            error: true
        }
    }
}   

const newUser = () =>{
    let result = window.confirm('Você ainda não possui cadastro, quer se cadastrar?');
    
    if(result){
        window.location.href = 'cadastro.html';
    }

    email.value = '';
    password.value = '';
}
