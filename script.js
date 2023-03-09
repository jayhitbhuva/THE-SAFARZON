const form = document.getAnimationbyid('form');
const fname = document.getAnimationbyid('fname');
const lname = document.getAnimationbyid('lname');
const email = document.getAnimationbyid('email');
const pass1 = document.getAnimationbyid('pass1');
const pass2 = document.getAnimationbyid('pass2');
const number = document.getAnimationbyid('number');

form.addEventlistener('submit', e => {
    e.preventdefault();
    Validateinputs();
});
const seterror = (Element,message)=>{
    const inputcontrol = Element.parentelement;
    const errordisplay = inputcontrol.queryselecter('.error');
    errordisplay.innertext = message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success')

}

const sersuccess = element => {
    const inputcontrol = Element.parentelement;
    const errordisplay = inputcontrol.queryselect('.error');

    errordisplay.innertext ='';
    inputcontrol.classlist.add('success');
    inputcontrol.classlist.remove('error');
};


const Validateinputs = () => {
    const fnamevalue = fname.value.trim();
    const lnamevalue = lname.value.trim();
    const emailvalue = email.value.trim();
    const pass1value = pass1.value.trim();
    const pass2value = pass2.value.trim();
    const numbervalue = number.value.trim();
  
    if (fnamevalue === '') {
        seterror(fname, 'Frist Name Is Required');

}else{
  sersuccess(fname);

} 
if (lnamevalue === '') {
    seterror(lname, 'Last Name Is Required');

}else{
sersuccess(lname);

} 
};
if (emalivalue === '') {
    seterror(email, 'Email Is Required');

}else{
sersuccess(email);

} 
if (pass1value === '') {
    seterror(pass1, 'Password Is Required');

}else if (pass1value.length < 8) 
{
    seterror(pass1, 'Password Must Be at least 8 characters.')
}else {
sersuccess(pass1);

} 
if (pass2value === '') {
    seterror(pass2, 'Please Confirm Your Password');

} else if (pass2value !== pass1value) { 
    seterror(pass2, "Passwords doesn't match");
}
else{
sersuccess(pass2);

} 



