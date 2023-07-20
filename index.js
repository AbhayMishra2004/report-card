// INPUT DETAILS
const name = document.getElementById('name')  ; 
const roll = document.getElementById('roll')  ; 
const dob = document.getElementById('dob')  ; 
const standard = document.getElementById('standard')  ; 
const section = document.getElementById('section')  ; 
const contact = document.getElementById('contact')  ; 
const Fname = document.getElementById('Fname')  ; 
const Mname = document.getElementById('Mname')  ; 
const address = document.getElementById('address')  ;
const form = document.getElementById('form')  ;

// REULT DETAILS
const result = document.getElementById('result')  ;
const nameR = document.getElementById('nameR')  ; 
const rollR = document.getElementById('rollR')  ; 
const dobR = document.getElementById('dobR')  ; 
const standardR = document.getElementById('standardR')  ; 
const sectionR = document.getElementById('sectionR')  ; 
const contactR = document.getElementById('contactR')  ; 
const FnameR = document.getElementById('FnameR')  ; 
const MnameR = document.getElementById('MnameR')  ; 
const addressR = document.getElementById('addressR')  ;

// ENGLISH INPUT
const englishAnnualInput = document.getElementById('english')  ;
const englishMidInput = document.getElementById('englihM')  ;
const englishPracticalInput = document.getElementById('englishP')  ;

// HINDI INPUT 
const hindiAnnualInput = document.getElementById('hindi')  ;
const hindiMidInput = document.getElementById('hindiM')  ;
const hindiPracticalInput = document.getElementById('hindiP')  ;

// PHYSICS INPUT 
const physicsAnnualInput = document.getElementById('physics')  ;
const physicsMidInput = document.getElementById('physicsM')  ;
const physicsPracticalInput = document.getElementById('physicsP')  ;

// CHEMISTRY INPUT 
const chemistryAnnualInput = document.getElementById('chemistry')  ;
const chemistryMidInput = document.getElementById('chemistryM')  ;
const chemistryPracticalInput = document.getElementById('chemistryP')  ;

// MATHS INPUT 
const mathsAnnualInput = document.getElementById('maths')  ;
const mathsMidInput = document.getElementById('mathsM')  ;
const mathsPracticalInput = document.getElementById('mathsP')  ;


// ENGLISH RESULT 
const AnnualEnglish = document.getElementById('AnnualEnglish')  ;
const midEnglish = document.getElementById('midEnglish')  ;
const PracticalEnglish = document.getElementById('PracticalEnglish')  ;

// HINDI RESULT 
const AnnualHindi = document.getElementById('AnnualHindi')  ;
const midHindi = document.getElementById('midHindi')  ;
const PracticalHindi = document.getElementById('PracticalHindi')  ;

// PHYSICS RESULT 
const AnnualPhysics = document.getElementById('AnnualPhysics')  ;
const midPhysics = document.getElementById('midPhysics')  ;
const PracticalPhysics = document.getElementById('PracticalPhysics')  ;

// CHEMISTRY RESULT 
const AnnualChemistry = document.getElementById('AnnualChemistry')  ;
const midChemistry = document.getElementById('midChemistry')  ;
const PracticalChemistry = document.getElementById('PracticalChemistry')  ;

// MATHS RESULT 
const AnnualMaths = document.getElementById('AnnualMaths')  ;
const midMaths = document.getElementById('midMaths')  ;
const PracticalMaths = document.getElementById('PracticalMaths')  ;


// CGPA and rank and close button 
const updateCGPA = document.getElementById('cgpa')  ;
const updateRank = document.getElementById('rank')  ;
const closeButton = document.getElementById('close-button')  ;

// FOR THE PDF DOWNLOAD
// FOR DOWNLOAD
const cardDownload = document.getElementById('cardDownload') ;


/******************************** FOR DOWNLOADING THE RESULT ***************************************/
 cardDownload.addEventListener('click', () => {
    console.log('yes');

    const pdf = new jsPDF({

        orientation: 'portrait', // 'portrait' or 'landscape'
        unit: 'mm', // Measurement unit for dimensions
        format: 'a4' 
    }); // INSTANCE 


    pdf.addHTML(result, () => {
      pdf.save("result.pdf");
    });
});


/************************************************* FORM SUBMIT EVENT *********************************************************8*/
form.addEventListener('submit' , (event)=> {

    // FORM KE DEFAULT BEHAVIOUR KO BAND KARO 
    event.preventDefault();

    // FORM DISPLAY KO BAND KARO 
    form.style.display = 'none';

    // TAKE ALL THE STUDENT DETAILS OF FORM
    const nameValue = name.value ; 
    const rollValue = roll.value ; 
    const dobValue = dob.value ; 
    const standardValue = standard.value ; 
    const sectionValue = section.value ; 
    const contactValue = contact.value ; 
    const FnameValue = Fname.value ; 
    const MnameValue = Mname.value ; 
    const addressValue = address.value ; 

    // SHOW STUDNENT DETAILS IN THE UI 
    showUI(nameValue , nameR) ; 
    showUI(rollValue , rollR) ; 
    showUI(standardValue , standardR) ; 
    showUI(sectionValue , sectionR) ; 
    showUI(contactValue , contactR) ; 
    showUI(FnameValue , FnameR) ; 
    showUI(MnameValue , MnameR) ; 
    showUI(addressValue , addressR) ; 
    dateOfBirth(dobValue , dobR)

    console.log(dobR) ; 

    // TAKE ALL THE MARKS 
    const englishAnnualInputValue = englishAnnualInput.value ; 
    const englishMidInputValue = englishMidInput.value ; 
    const englishPracticalInpuValue = englishPracticalInput.value ; 

    const hindiAnnualInputValue = hindiAnnualInput.value ; 
    const hindiMidInputValue = hindiMidInput.value ; 
    const hindiPracticalInpuValue = hindiPracticalInput.value ; 

    const physicsAnnualInputValue = physicsAnnualInput.value ; 
    const physicsMidInputValue = physicsMidInput.value ; 
    const physicsPracticalInpuValue = physicsPracticalInput.value ; 

    const chemistryAnnualInputValue = chemistryAnnualInput.value ; 
    const chemistryMidInputValue = chemistryMidInput.value ; 
    const chemistryPracticalInpuValue = chemistryPracticalInput.value ; 

    const mathsAnnualInputValue = mathsAnnualInput.value ; 
    const mathsMidInputValue = mathsMidInput.value ; 
    const mathsPracticalInputValue = mathsPracticalInput.value ; 

    // UPDATE MARKS IN UI
    showUI(englishAnnualInputValue , AnnualEnglish) ; 
    showUI(englishMidInputValue , midEnglish) ; 
    showUI(englishPracticalInpuValue , PracticalEnglish) ; 
    
    showUI(hindiAnnualInputValue , AnnualHindi) ; 
    showUI(hindiMidInputValue , midHindi) ; 
    showUI(hindiPracticalInpuValue , PracticalHindi) ; 

    showUI(physicsAnnualInputValue , AnnualPhysics) ; 
    showUI(physicsMidInputValue , midPhysics) ; 
    showUI(physicsPracticalInpuValue , PracticalPhysics) ; 

    showUI(chemistryAnnualInputValue , AnnualChemistry) ; 
    showUI(chemistryMidInputValue , midChemistry) ; 
    showUI(chemistryPracticalInpuValue , PracticalChemistry) ; 
    
    showUI(mathsAnnualInputValue , AnnualMaths) ; 
    showUI(mathsMidInputValue , midMaths) ; 
    showUI(mathsPracticalInputValue , PracticalMaths) ; 

    // FIND CGPA AND UPDATE IN UI (Why it is coming NAN)
    cgpa(englishAnnualInputValue, englishMidInputValue , englishPracticalInpuValue ,  hindiAnnualInputValue, hindiMidInputValue , hindiPracticalInpuValue  , mathsAnnualInput, mathsMidInputValue , mathsPracticalInputValue , physicsAnnualInputValue , physicsMidInputValue , physicsPracticalInpuValue , chemistryAnnualInputValue, chemistryMidInputValue , chemistryPracticalInpuValue ) ; 

    // RANK
    rank(updateRank) ; 

    // RESULT DISPLAY ON KARO 
    result.style.display = 'block' ; 
    closeButton.style.display = 'block' ; 
})



/************************************************* UI INFO UPDATE **********************************************************/
function showUI(grabValue , showInValue)
{
    if(grabValue == '')
            return ; 

    showInValue.textContent = grabValue;
}

/************************************************* UI INFO UPDATE **********************************************************/
function cgpa() 
{
    var n = arguments.length;
    var total = 0;

    for (var i = 0; i < n; i++) 
    {
        total += parseInt(arguments[i]) ;
    }
  
    console.log("Total marks:", total);
}

/********************************  DATE UPDATE  **********************************************/
function dateOfBirth(byUpdate , toUpdate)
{
    if(byUpdate == '')
        return ; 
    
    const dateValue = new Date(byUpdate) ; 

    const year = dateValue.getFullYear();
    const month = dateValue.getMonth() + 1; // Adding 1 because months are zero-based
    const day = dateValue.getDate();

     toUpdate.textContent = `${day} / ${month} / ${year}` ; 
}


/************************************************* RANK UPDATE **********************************************************/
function rank(toUpdate)
{
    const curr = Math.ceil(Math.random() * (10));
    toUpdate.textContent = curr ; 
}


/************************************************* ON CLOSE BUTTON CLICK **********************************************************/
closeButton.addEventListener('click' , ()=> {

    form.style.display = 'block'
    result.style.display = 'none' ; 
    closeButton.style.display = 'none' ; 

})
