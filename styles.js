
////                  Prallax Scrolling                 /////

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let front_scene = document.getElementById('front_scene');
let middle_scene = document.getElementById('middle_scene');
let mountainsandsky = document.getElementById('mountainsandsky');
let text = document.getElementById('text');
let birds = document.getElementById('birds');
let lake = document.getElementById('lake');
let button = document.getElementById('button');


window.addEventListener('scroll',function(){
    let value = window.scrollY;
    lake.style.left = value * 0.01 + 'px';
    lake.style.top = value * 0.08 + 'px';
    mountainsandsky.style.top = value * 0.25 + 'px';
    
    birds.style.left = value * 0.05 + 'px';
    birds.style.top = value * -0.05 + 'px';
    stars.style.left = value + 'px';
    moon.style.top = value * 0.25 + 'px';
    back_mountains.style.top = value * 0.5 + 'px';
    text.style.top = value * 5 + 'px';
    button.style.marginTop = value * 2 + 'px';

    if(value == '100px'){
        
    }
})

////                 Contact Me Form                 /////

(function () {
    //to be changed
    emailjs.init("user_aELb48Z5FRDrg2Rllk93A");
})();
function sendMail() {
    let email, message, Fname, Lname, phone, name;
    Fname = document.getElementById("inputFname").value;
    Lname = document.getElementById("inputLname").value;
    email = document.getElementById("inputEmail").value;
    phone = document.getElementById("inputPhone").value;
    message = document.getElementById("inputMessage").value;
    name = Fname + " " + Lname;
    console.log(Fname, Lname, email, phone, message, name);
    var contactParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "OSA CLUB JIIT",
        phone_no: phone,
        reply_to: email,
    };
    
    
    if (!Fname || !Lname || !email || !phone || !message) {
        alert("Please check your entries");
        return false;
    } else {
        console.log(contactParams);
        emailjs
        .send("service_6pdqo77", "template_l4og9ea", contactParams)
        .then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Mail sent successfully");
            },
            function (error) {
                console.log("FAILED...", error);
                alert("Failed to connect");
            }
            );
        }
        document.getElementById("inputFname").value='';
        document.getElementById("inputLname").value='';
        document.getElementById("inputEmail").value='';
        document.getElementById("inputPhone").value='';
        document.getElementById("inputMessage").value='';
    }

////                  Custom Scrollbar                 /////
    $(document).ready(function () {
        if (!$.browser.webkit) {
            $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
        }
    });