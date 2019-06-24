/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
     

//  NAME: PRECIOUS C. CHUKWUEMEKA


// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing





// I added Two global variables:  
// Used querySelectorAll method to get the list of elements to be manipulated, and created a variable for the number of items per page.

  const studentList = document.querySelectorAll('.student-item'); 

  const itemsPerPage = 10;                                        





 
// I created the showPage function to hide all of the items in the list except for the ten i want to show.

  const showPage = (studentList, page) => { 

    let startindex = (page * itemsPerPage) - itemsPerPage;        
    let endindex = (page * itemsPerPage);                          

    for ( let i = 0; i < studentList.length; i++) {                
       if(i >= startindex && i < endindex) {                      
          studentList[i].style.display = 'block';   // Show               
       } else {
          studentList[i].style.display = 'none';    //  Hide          

   }
 };

}
    




// I created the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.


 const appendPageLinks = (studentList) => {   

   let pages = Math.ceil(studentList.length/itemsPerPage);   // I used the Maths.ceil method to deteremine number of pages 
   let divElement = document.createElement('div');           // Created div element.  
   let ulElement = document.createElement('ul');             //  Created ul element.
   let pageClass = document.querySelector('.page');            
   
  
   divElement.className = 'pagination';                   
   pageClass.appendChild(divElement);                     // appended the pageclass to 'divelement' and 'divelement' to ul element respctively.
   divElement.appendChild(ulElement);  

   for (let i = 1; i <= pages; i++) {
      let liElement = document.createElement('li');
      let aTag = document.createElement('a');
      ulElement.appendChild(liElement); 
      liElement.appendChild(aTag).setAttribute("href",'#');
      aTag.innerHTML = i;
      document.querySelector('.pagination a:first-child').className = "active";


      aTag.addEventListener('click', (event) => {            // I added a 'Click' event to each 'a' Tag.
         let page = document.querySelectorAll('li a');
         let button = event.target.textContent;
         showPage (studentList, button);

       
         for(i = 0; i < page.length; i++) {          // Looped over pagination links to remove active class from all links.
        
          page[i].classList.remove("active");
         }

         event.target.className = "active";
     
      });
   
   
   }
 
 
 }

   showPage(studentList, 1);           // I called the showPage function to display the appropriate page.
   appendPageLinks(studentList);       // Called the appendpage links to display the buttons