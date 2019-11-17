var a0=["tên môn học","mã học phần","ca thi","phòng thi","số lượng","thao tác"];

var a1=[["phát triển ứng dụng web","INT2206","8h-11h","103-G2","80"],["trí tuệ nhân tạo","INT2203","8h-11h","306-GĐ2","60"],["thiết kế giao diên wed","INT2202","7h-9h","206-G2","80"],["truyền thông đa phương tiện","INT2207","8h-10h","308-G2","60"]];


  //body reference 
  var main = document.getElementById("main");

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");
    for (var i = 0; i <= 5; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("th");
      var cellText = document.createTextNode(a0[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //row added to end of table body
    tblBody.appendChild(row);
 
  // cells creation
  for (var j = 0; j <= 3; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 5; i++) {
    	
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      if (i<5) {
      var cell = document.createElement("td");
      
      var cellText = document.createTextNode(a1[j][i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      }
      if (i==5) {
        var cell = document.createElement("td");

      	button=document.createElement("input");
      	button.setAttribute("type", "button");
      	button.setAttribute("value", "thêm");
      	button.setAttribute("class", "add");
        cell.appendChild(button);
      	row.appendChild(cell);
      }
    }
    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  main.appendChild(tbl);
 
tbl.setAttribute("id","data");


//body reference 2
  var main2 = document.getElementById("main2");

  // create elements <table> and a <tbody>
  var tbl2 = document.createElement("table");
  var tblBody2 = document.createElement("tbody");

    var row = document.createElement("tr");
    for (var i = 0; i <= 5; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("th");
      var cellText = document.createTextNode(a0[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //row added to end of table body
    tblBody2.appendChild(row);
 
  // cells creation
  for (var j = 0; j <= 3; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 4; i++) {
    	
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
     
      var cell = document.createElement("td");
      row.appendChild(cell);
      
    }
    //row added to end of table body
    tblBody2.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl2.appendChild(tblBody2);
  // put <table> in the <body>
  main2.appendChild(tbl2);
 
tbl2.setAttribute("id","data2");

//add
var tt=0;
var c=1;
var data=document.getElementById("data");
var data2=document.getElementById("data2");
var addRows=document.getElementsByClassName("add");
  
  for (var i = 0; i < addRows.length; i++) {
   addRows[i].onclick= function() {
  
  var rows=data2.rows;
  
  for(;c<5;c++){
    if (rows[c].cells[1].innerHTML=="")
      break;
  }
   add(this.parentElement.parentElement,rows,c);
  
}
  }

function add(rows1,rows2,c) {
	
	for(var i=0;i<5;i++){
		rows2[c].cells[i].innerHTML=rows1.cells[i].innerHTML;
	}
		buttonDele=document.createElement("input");
      	buttonDele.setAttribute("type", "button");
      	buttonDele.setAttribute("value", "xóa");
      	button.setAttribute("class", "dele");
      	rows2[c].appendChild(buttonDele);
      
     	
}


var deleRows=document.getElementsByClassName("dele");
	deleRows[0].onclick=function() {
		
		data2.row[1].remove();
	}
console.log(deleRows[0]);
