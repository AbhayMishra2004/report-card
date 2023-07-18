const name = document.getElementById('Name');
const email = document.getElementById('email') ; 
const emailTag = document.getElementById('emailTag') ; 
const phone = document.getElementById('phone') ; 
const dob = document.getElementById('dob') ; 
const insitute = document.getElementById('insitute') ; 
const role = document.getElementById('role') ; 
const IName = document.getElementById('IName') ; 
const linkdin = document.getElementById('linkdin') ; 
const twitter = document.getElementById('twitter') ; 
const github = document.getElementById('github') ; 
const profilePic = document.getElementById('image') ;


// OUTPUT 
const cardProfilePic = document.getElementById('cardProfilePic') ;
const cardName = document.getElementById('cardName') ;
const cardRole = document.getElementById('cardRole') ; 
const cardEmail = document.getElementById('cardEmail') ;
const cardPhone = document.getElementById('cardPhone') ;
const cardDate = document.getElementById('cardDate') ;
const cardInstituteType = document.getElementById('cardInstituteType') ;
const cardInstituteName = document.getElementById('cardInstituteName') ;
const cardLinkedin = document.getElementById('cardLinkedin') ;
const cardTwitter = document.getElementById('cardTwitter') ;
const cardGithub = document.getElementById('cardGithub') ;

// FOR DOWNLOAD
const cardDownload = document.getElementById('cardDownload') ;
const mainIdentityCard = document.getElementById('mainIdentityCard') ;

console.log(emailTag) ;


/******************************** FOR DOWNLOADING THE CARD ***************************************/
 cardDownload.addEventListener('click', () => {
    console.log('yes');

    const pdf = new jsPDF(); // INSTANCE 

    pdf.addHTML(mainIdentityCard, () => {
      pdf.save("profileCard.pdf");
    });
});



/********************************  IN THE CHANGING OF THE PROFILE PIC ***************************************/
profilePic.addEventListener('change' , () => {

    // GET THE IMAGE AND GET IT'S SRC LINK . 
    const selectedFile = profilePic.files[0] ; 
    const imageSrc = URL.createObjectURL(selectedFile) ; 

    console.log(imageSrc) ; 
    cardProfilePic.style.backgroundImage = `url(${imageSrc})` ;
})



/********************************  IN THE CHANGING OF THE NAME **********************************************/
name.addEventListener('input' , () => {

    var nameValue = name.value ;
    console.log(nameValue); 
    cardName.textContent = nameValue ;
    
    // AGAER 0 LENGTH KA HO JAYE INPUT TO .
    if(nameValue.length == 0)
    {
        cardName.textContent = "Your Name";
    }
}) 


/********************************  IN THE CHANGING OF THE Role **********************************************/
role.addEventListener('input' , () => {

    var roleValue = role.value ;
    console.log(roleValue) ; 
    cardRole.textContent = roleValue ;
    
    // AGAER 0 LENGTH KA HO JAYE INPUT TO .
    if(roleValue.length == 0)
    {
        cardRole.textContent = "Role";
    }
}) 

/********************************  IN THE CHANGING OF THE EMAIL **********************************************/
email.addEventListener('input' , () => {

    var emailValue = email.value ;
    console.log(emailValue , emailValue.length); 
    cardEmail.textContent = emailValue ;
    
    // AGAER 0 LENGTH KA HO JAYE INPUT TO .
    if(emailValue.length == 0)
    {
        cardEmail.textContent = "gmail.com";
    }

    // AGAER 0 LENGTH KA HO JAYE INPUT TO .
    if(emailValue.length >= 15)
    {
        cardEmail.style.fontSize = '0.9rem' ; 
        emailTag.style.fontSize = '0.9rem' ; 
        emailTag.style.paddingRight = '0.25rem' ; 
        // cardEmail.style.overflow = 'scroll';
        // cardEmail.classList.add('hide-scrollbar');
    }

    else
    {
        cardEmail.style.fontSize = '1.5rem' ; 
        emailTag.style.fontSize = '1.5rem' ; 
    }
}) 

/********************************  IN THE CHANGING OF THE EMAIL **********************************************/
phone.addEventListener('input' , () => {

    var phoneValue = phone.value ;
    console.log(phoneValue); 
    cardPhone.textContent = phoneValue ;
    
    // AGAER 0 LENGTH KA HO JAYE INPUT TO .
    if(phoneValue.length == 0)
    {
        cardPhone.textContent = "88567XXXXX";
    }

    // AGAR LENGTH JYADA HO JAYE 10 SE TO , NAHI LENA HAI 
    if(phoneValue.length > 10)
    {
        cardPhone.textContent = "88567XXXXX";
    }
}) 


/********************************  IN THE CHANGING OF THE DATE **********************************************/
dob.addEventListener('input' , ()=> {

    const dateValue = new Date(dob.value) ; 

    const year = dateValue.getFullYear();
    const month = dateValue.getMonth() + 1; // Adding 1 because months are zero-based
    const day = dateValue.getDate();

     cardDate.textContent = `${day} / ${month} / ${year}` ; 
})


/********************************  IN THE SELECTION OF THE INSTITUTE TYPE **********************************************/

insitute.addEventListener('change'  , () => {

    const selectedValue = insitute.value ; 
    cardInstituteType.textContent = `${selectedValue} : `;
    cardInstituteType.style.textTransform = uppercase ;  
})


/********************************  IN THE CHANGING OF THE INSTITUTE NAME **********************************************/
IName.addEventListener('input' , ()=> {

    var instName = IName.value ;
    cardInstituteName.textContent = instName ; 

    if(instName.length == 0)
    {
        cardInstituteName.textContent = "XYZ"; 
    }
})


/********************************  ADD LINK TO THE ALL THE SOCIAL MEDIA  **********************************************/


// MAIN FUNCTION TO CHANGE THE VALUE OF ALL THE ATTRIBUTES 

function updateInDOM(platform , value)
{
    platform.href = '' ; 
    platform.href = value ; 
}


// FOR LINKEDIN
linkdin.addEventListener('input' , ()=> {

    const linkdinValue = linkdin.value ; 
    updateInDOM(cardLinkedin , linkdinValue) ; 
})


// FOR TWITTER
twitter.addEventListener('input' , ()=> {

    const twitterValue = linkdin.value ; 
    updateInDOM(cardTwitter , twitterValue) ; 

    console.log(cardTwitter.href) ; 
})

// FOR GITHUB
github.addEventListener('input' , ()=> {

    const githubValue = github.value ; 
    updateInDOM(cardGithub , githubValue) ; 

    console.log(github.href) ; 
})