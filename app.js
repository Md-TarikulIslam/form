
document.getElementById('btn').addEventListener('click', function(){

    const yourName = document.getElementById('name');
    const yourNameValue = yourName.value
    // console.log(yourNameValue);

    const nameHandle = document.getElementById('name-handle');
    const nameHandleInnerText = nameHandle.innerText;

    const totalName = nameHandleInnerText + " " + yourNameValue;

    nameHandle.innerText = totalName;
    yourName.value = '';




    const yourMail = document.getElementById('email');
    const yourMailValue = yourMail.value
    // console.log(yourMailValue);

    const mailHandle = document.getElementById('email-handle');
    const mailHandleInnerText = mailHandle.innerText;

    const totalMail = mailHandleInnerText + " "+ yourMailValue;

    mailHandle.innerText = totalMail;
    yourMail.value = '';



    const yourSubject = document.getElementById('subject');
    const yourSubjectValue = yourSubject.value;
    // console.log(yourSubjectValue);

    const yourSubjectHandle = document.getElementById('subject-handle');
    const yourSubjectHandleInnerText = yourSubjectHandle.innerText;

    const totalSubject = yourSubjectHandleInnerText + " " + yourSubjectValue;

    yourSubjectHandle.innerText = totalSubject;
    yourSubject.value = '';



    const yourPhone = document.getElementById('phone');
    const yourPhoneValue = yourPhone.value;
    // console.log(yourPhoneValue);

    const yourPhoneHandle = document.getElementById('phone-handle');
    const yourPhoneHandleInnerText= yourPhoneHandle.innerText;

    const totalPhone = yourPhoneHandleInnerText + " " + yourPhoneValue;

    yourPhoneHandle.innerText=totalPhone;
    yourPhone.value = '';





    const yourText = document.getElementById('text');
    const yourTextValue = yourText.value;
    // console.log(yourTextValue);

    const yourTextHandle = document.getElementById('text-handle');
    const yourTextHandleInnerText = yourTextHandle.innerText;

    const totalText = yourTextHandleInnerText + " " + yourTextValue;

    yourTextHandle.innerText = totalText;
    yourText.value = '';


    // POST section 

    const subject = 'website';
    const message = 'company.catchPhrase';

    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url, {
        method: 'POST',
        body:JSON.stringify({
            name: yourNameValue,
            email: yourMailValue,
            phone: yourPhoneValue,
            subject: yourSubjectValue,
            message: yourTextValue
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

})