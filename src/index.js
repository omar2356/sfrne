import "bootstrap/dist/js/bootstrap.min.js";
import { CountUp } from 'countup.js';
import "jquery/dist/jquery.min";
import $ from "jquery";
import 'jquery-validation/dist/jquery.validate'
import "jquery-validation/dist/localization/messages_ar";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './sass/index.scss'
import '@fortawesome/fontawesome-free/js/all.min'
import './sass/travel.scss'
import './sass/Sign-up.scss'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddeElements = document.querySelectorAll('.hidden');
hiddeElements.forEach((el)=> observer.observe(el))


document.getElementById('year').innerHTML = new Date().getFullYear()


window.onload = function(){   
    let sfrne = new CountUp('numper-1',700,0,0,2.5)
    sfrne.start()

    let sfrne2 = new CountUp('numper-2',900,0,0,2.5)
    sfrne2.start()

}

$(document).ready(function(){
    $(function(){
        $('#form').validate();
    })
})