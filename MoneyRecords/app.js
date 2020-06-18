class UI{
    constructor(){
        this.expenseFeedback = document.querySelector('.expenseFeedback')
        this.personName = document.querySelector('#PersonName');
        this.title = document.querySelector('#title');
        this.amount = document.querySelector('#amount');
        this.year = document.querySelector('#dmy');
        this.list = document.querySelector('#RecoredList');
        this.RecoredForm = document.querySelector('#Record-Form');
        this.itemList = [];
        this.itemID = 0;
    }


     //   show Alert

     static showAlert(message,className){
         const div = document.createElement('div');
         div.classList = `alert alert-${className}`;
         div.appendChild(document.createTextNode(message));
        
         const card = document.querySelector('.card-title');
         card.insertBefore(div,this.RecoredForm);

         // Vanish in 3 seconds

         setTimeout(()=>{
             document.querySelector('.alert').remove();
         },3000)


     }

    // submit Record form
    submitRecoredForm(){
        const personName = this.personName.value;
        const title = this.title.value;
        const amount = this.amount.value;
        const year =this.year.value;
    

        if(personName=== '' || title==='' || amount<0 || year===''){
            UI.showAlert('Values cannot be empty or negative','danger')

            // another way to show item

            // this.expenseFeedback.classList.add('showItem');
            // this.expenseFeedback.innerHTML = `<p> values cannot be empty or negative </p>`;
            // const self = this;
            // setTimeout(function(){
               
            //    self.expenseFeedback.classList.remove('showItem')
            // },4000)
        }else{

            UI.showAlert('Recored Add','success')
            let amountvalue= parseInt(amount);
            this.personName.value ='';
            this.title.value = '';
            this.amount.value = '';
            this.year.value = '';
            let expense = {
                id:this.itemID,
                personName:personName,
                title:title,
                amount:amountvalue,
                year:year
            }
             
            
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
           
        }
        }
        addExpense(expense){
           
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${expense.personName}</td>
        <td>${expense.title}</td>
        <td>${expense.amount}</td>
        <td>${expense.year}</td>
        <td><a href="#" class="edit-icon mx-2" data-id="${expense.id}">
      <i class="fas fa-edit"></i>
     </a></td>
    <td> <a href="#" class="delete-icon" data-id="${expense.id}">
      <i class="fas fa-trash"></i>
     </a></td>
          
        `;
      
  		 this.list.appendChild(row)      

        }

        // edit recored
         // parameter element
        editRecored(element){
            let id = parseInt(element.dataset.id);
            let parent = element.parentElement.parentElement;
            // remove from dom
            this.list.removeChild(parent);
            // remove from the list
            
            // filter return new Array
            let listItems = this.itemList.filter(function(item){
                return item.id === id;
            
            })
            
            // show value
            this.personName.value = listItems[0].personName;
            this.title.value = listItems[0].title;
            this.amount.value = listItems[0].amount;
            this.year.value = listItems[0].year;

            // remove from list
            let tempList = this.itemList.filter(function(item){
                return item.id !=id;
            })
            this.itemList = tempList;
            
        }
        // remove from the list
        deleteRecored(element){
            UI.showAlert('successfull delete recored','success');
            let id = parseInt(element.dataset.id);
            let parent = element.parentElement.parentElement;
            // remove from dom
            this.list.removeChild(parent);
             // remove from list
             let tempList = this.itemList.filter(function(item){
                return item.id !=id;
            })
            this.itemList = tempList;
       

        }

    
    }





    // local storage 


    







function eventListeners(){
    const RecoredForm = document.querySelector('#Record-Form');
    const RecoredList = document.querySelector('#RecoredList');
     
    // new instance of UI classs

    const ui = new UI();


    // Record Form Submit
    RecoredForm.addEventListener('submit',function(event){
        event.preventDefault();
        ui.submitRecoredForm();
      
    })

      // expense click
      RecoredList.addEventListener('click',function(event){
        
        if(event.target.parentElement.classList.contains('edit-icon')){
                            // argument element
            ui.editRecored(event.target.parentElement);
        }
       else if(event.target.parentElement.classList.contains('delete-icon')){
            ui.deleteRecored(event.target.parentElement);
        }
        

      })




}

document.addEventListener('DOMContentLoaded',function(){
    eventListeners();

})












// Money Recored : 

// class Recored{
//     constructor(name,title,amount,year){
//         this.name = name;
//         this.title = title;
//         this.amount = amount;
//         this.year = year;
        
//     }
// }


// // UI Class : Handle UI tasks

// class UI{
//     static displayRecord(){
//         const StoreRecord = [
//             {
//             name:'manoj',
//             title:'pay electric bill',
//             amount:300,
//             year:"10/05/2019"
//             },
//             {
//                 name:'atul',
//                 title:'petrol ',
//                 amount:100,
//                 year:"27/05/2019"
//                 }
//         ];
//         const Record = StoreRecord;
//         Record.forEach((item)=>UI.addRecoredToList(item));
//     }
//     static addRecoredToList(item){
//         const list = document.querySelector('#RecoredList');
//         const row = document.createElement('tr');

//         row.innerHTML = `
//         <td>${item.name}</td>
//         <td>${item.title}</td>
//         <td>${item.amount}</td>
//         <td>${item.year}</td>
//         <td><a href="#" data-id="${item.id}"> <i class="fas fa-edit text-success update" title="edit"></i></a></td>
//         <td><a href="#" data-id="${item.id}> <i class="far fa-trash-alt text-warning delete" title="delete"></i> </a></td>
       
        
//         `;
//        list.appendChild(row);
//     }
    
//     static deleteRecored(el){
//         if(el.classList.contains('delete')){
//            console.log( el.parentElement.parentElement.parentElement.remove());
//         }    
//     }
//     static updateRecord(el){
//              if(el.classList.contains('update')){
//              console.log( el.parentElement.parentElement.parentElement.remove());
//            var child= el.parentElement.parentElement.parentElement.firstChild;
          
//      }   
         
//     }

//        // Clear input field
//      static clearFields(){
//         document.querySelector('#PersonName').value='';
//         document.querySelector('#title').value='';
//         document.querySelector('#amount').value='';
//         document.querySelector('#dmy').value='';
//     }

// }

// // Store class : handle Storage


// // Event : Display Recored
// document.addEventListener('DOMContentLoaded',UI.displayRecord);


// // Event : Add a Recored

// document.querySelector('#Record-Form').addEventListener('submit',(e)=>{
    
//     // Prevent actual submit
//     e.preventDefault();


//     // Get form Value
    
//     const name =document.querySelector('#PersonName').value;
//     const title =document.querySelector('#title').value;
//     const amount =document.querySelector('#amount').value;
//     const year =document.querySelector('#dmy').value;
   


//     // validate 

//     // pass declaration var Recored class

//     const listItem = new Recored(name,title,amount,year);
//     console.log (listItem);
    
//     // Add Book to UI
//     UI.addRecoredToList(listItem);

//     // Clear field

//     UI.clearFields();

// });



// // Event : Remove a Recored and update Recored

// document.querySelector('#RecoredList').addEventListener('click',(e)=>{

//    UI.updateRecord(e.target);
//    UI.deleteRecored(e.target);



// })