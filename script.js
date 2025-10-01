function generateCard()
{
    //Accessing the name input and storing its value.

    const nameElement=document.getElementById("name");
    const nameValue=nameElement.value;

    //Assign the name value to the Generated Card Name

    const cardNameElement=document.getElementById("cardName");
    cardNameElement.innerHTML=nameValue;

    // Get input from college name and store its value
    const collegeNameValue=document.getElementById("collegeName").value;
  

    // assign  clg value to generated card value
   document.getElementById("cardCollegeName").innerHTML=collegeNameValue;

   //access the location element and get its input value
   const locationValue=document.getElementById("location").value;

   //assign the value to location name of generate card
   document.getElementById("cardLocation").innerHTML=locationValue;

   //Display the final generated card to the userr

   document.getElementById("collegeCard").style.display="block";

}