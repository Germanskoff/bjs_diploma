"use strict";

const userLogin = new UserForm();

userLogin.loginFormCallback = (data) => {
    const checkLogin = ApiConnector.login((data), response => {
        if (response.success === true) {
            location.reload();
        }
        else {
            userForm.setLoginErrorMessage('Пользователь ${data.login} не найден');
        }
    });
};

userForm.registerFormCallback = (data) => {
    const checkLogin = ApiConnector.register((data), response => {
        if (response.success === true) {
            location.reload();
        }
        else {
            userForm.setRegisterErrorMessage('Неверные логин и\или пароль');
        }
    });
};