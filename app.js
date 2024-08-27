let name = document.getElementById('name')
let fname = document.getElementById('fname')
let number = document.getElementById('number')
let email = document.getElementById('email')
let courses = document.getElementById('courses')
let gender = document.getElementById('gender')
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    const data = {
        name: name.value,
        fname: fname.value,
        number: number.value,
        email: email.value,
        courses: courses.value,
        gender: gender.value,
    }
    console.log(data);
})
