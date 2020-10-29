

var a = +prompt('введите первое число'),
    b = +prompt('введите второе число'),
    c = +prompt('введите третье число');



    if(a > b && a < c || a < b && a > c){
        alert(' среднее число ' + a )
    }else if(b > a && b < c || b < a && b > c){
        alert(' среднее число ' + b)
    }else if(c > a && c < b || c < a && c > b){
        alert(' среднее число ' + c)
    }else{
        alert('Ошибка')
    }