function phonenumber(phonenumber)
{
  var phoneno = /^\d{11}$/;
  if(phonenumber.value.match(phoneno))
  {
    return true;
  }
  else
  {
     alert("Your Phone Number must be 11 digits");
     return false;
  }
  }


    function ValidateEmail(inputText)
    {
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(inputText.value.match(mailformat))
    {
 
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    document.form1.text1.focus();
    return false;
    }
	
	
    }


    function myFunction(){
		if(document.form1.fname.value==="" || document.form1.lname.value==="" || document.form1.text2.value==="" || document.form1.text1.value==="" || document.form1.password.value==="" || document.form1.fname.value==="" || document.form1.adrs.value==="" || document.form1.gender.value==="")
        {
			alert("you must enter all fields");
		}
		else{
			
	    ValidateEmail(document.form1.text2); 
        onclick=phonenumber(document.form1.text1);
	
		}
    }
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
    function myFunction1() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }