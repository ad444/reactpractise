const DataValidator = function(name, email, number, password){
        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattNumber = /^\d{10}$/;
        let pattPassword = /[A-z]{4,6}[0-9]{2,4}\W{1,2}/;
        
        if(pattName.test('Aman Dalal')){
           document.write('success');
        }
        if(pattEmail.test('aman_dalal@gmail.com')){
           document.write('email success');
        }
        if(pattNumber.test(9754700087)){
          document.write('number success');
        }
        if(pattPassword.test('amansa12#')){
          document.write('password success')
        }
}

export default DataValidator;