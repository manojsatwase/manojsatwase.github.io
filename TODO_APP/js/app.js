(function(){
	           
		class UI{
		constructor(){
			this.inputItem=document.querySelector('#item');
			this.itemButton=document.querySelector('#addButton');
			this.ul=document.querySelector('.list');
		}

    // add button logic
		// displayItem(){
		// 	var inputItem=document.getElementById('item');
		// 	console.log(inputItem.value);
		// 	this.inputItem.value="";
		// }

	 // input keyup logic

		addItem(inputItem){

			var item = inputItem.value;
		//nahi to yeh fuction execute karega
			if(item === ""){
			 const feedback = document.querySelector('.feedback');
			 feedback.classList.add('show');
			 feedback.innerHTML="<p>please fill the invalid input!!!<p>";
			setTimeout(function(){
				feedback.classList.remove("show");
				feedback.innerHTML="";
			},4000)
			}else{

			var list=document.querySelector('.list');
			// create new element li
			var tr = document.createElement('tr');
			tr.appendChild(document.createTextNode(item));
			list.appendChild(tr) // list is parent of child
			inputItem.value="";

			tr.onclick=function(e){
				var list=document.querySelector('.list');
				list.removeChild(e.target);
			}
					} // item false mean empty or zero hai to return kuch nhi karega
				
				}
				
	}
	


	function eventListener(){
		const ui=new UI();
		const addButton=document.getElementById('addButton');
		addButton.addEventListener('click',()=>{	
			ui.addItem(inputItem);
		})

	   var inputItem=document.getElementById('item');	
		inputItem.onkeyup=function(e){
			if(e.keyCode==13){
				ui.addItem(inputItem);	
			}
		}
	}

	document.addEventListener('DOMContentLoaded',()=>{
		eventListener();
	})

  }()); //Immediately Invoked Function Expressions

	

