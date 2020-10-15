let input = prompt( 'Введіть країну');
let inputLower = input.toLowerCase();
let cost = 0;
switch (inputLower) {
    case 'китай':
    cost = 100;
    break;

    case 'чиллі':
        cost = 250;
        break;

        case 'австралія':
            cost = 170;
            break;

            case 'індія':
                cost = 80;
                break;

                case 'ямайка':
                    cost = 120;
                    break;

                    defult:
                    alart ('У вашій країні доставка недоступна');
}

console.log (`Доставка в ${inputLower} буде коштувати ${cost} кредитів`)