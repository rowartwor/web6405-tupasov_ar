class UserData {
    constructor(login, password, agree) {
        this.login = login;
        this.password = password;
        this.agree = agree;
    }

    print() {
        console.log('Данные пользователя');
        console.log('Логин:  ', this.login);
        console.log('Пароль: ', this.password);
        console.log('Согласие:', this.agree);
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const user = new UserData(form.login.value, form.password.value, form.agree.checked);
    user.print();
    form.reset();
});