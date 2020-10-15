const ADMIN_PASSWORD = '0000000';
let message = prompt("ADMIN_PASSWORD");

if (message ===null){
message = 'скасовано користувачем';
} else if (message === "0000000") {
    message = 'Ласкаво просимо!';
} else {
    message = 'Доступ заборонений, невірний пароль!';
}
alert(message);