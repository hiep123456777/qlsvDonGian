


var studentName             = document.getElementById('fullname');
var emailAddress         = document.getElementById('emailaddress');
var phoneNumber          = document.getElementById('phonenumber');
var homeTown             = document.getElementById('hometown');
var aGe = document.getElementById('age');

var Gender = document.getElementById('gender');
    
    
var studentList  = [];

		var count = 0
		function addStudent() {
			var index = document.getElementById('index').value
			var studentName = document.getElementById('studentname').value
			var homeTown = document.getElementById('hometown').value
			var phoneNumber = document.getElementById('phonenumber').value
			var emailAddress = document.getElementById('emailaddress').value
			var aGe = document.getElementById('age').value
			var Gender = document.getElementById('gender').value
			var student = {
				'studentName': studentName,
				'homeTown': homeTown,
				'phoneNumber': phoneNumber,
				'emailAddress': emailAddress,
				'aGe': aGe,
				'Gender': Gender
			}

			if(index !='') {
				studentList[index] = student
				showStudent()
				return;
			}

			studentList.push(student)

			document.getElementById('result').innerHTML += `<tr>
			
						<td>${++count}</td>
						<td>${studentName}</td>
						<td>${homeTown}</td>
						<td>${phoneNumber}</td>
						<td>${emailAddress}</td>
						<td>${aGe}</td>
						<td>${Gender}</td>
						<td><button class="btn btn-warning" onclick="editStudent(${count - 1})">Edit</button></td>
						<td><button class="btn btn-danger" onclick="deleteStudent(${count - 1})">Delete</button></td>
					</tr>`
            
		}

		function deleteStudent(index) {
			console.log(index)
			studentList.splice(index, 1)
			showStudent();
		}

		function showStudent() {
			document.getElementById('result').innerHTML = ''

			for (var i = 0; i < studentList.length; i++) {
				document.getElementById('result').innerHTML += `<tr>
						<td>${i+1}</td>
						<td>${studentList[i].studentName}</td>
						<td>${studentList[i].homeTown}</td>
						<td>${studentList[i].phoneNumber}</td>
						<td>${studentList[i].emailAddress}</td>
						<td>${studentList[i].aGe}</td>
						<td>${studentList[i].Gender}</td>
						<td><button class="btn btn-warning" onclick="editStudent(${i})">Edit</button></td>
						<td><button class="btn btn-danger" onclick="deletestudent(${i})">Delete</button></td>
					</tr>`
			}
		}

		function editStudent(index) {
			var student = studentList[index]
			console.log(student)
			document.getElementById('index').value =index 
		     document.getElementById('studentname').value = student.studentName
             document.getElementById('hometown').value = student.homeTown 
			document.getElementById('phonenumber').value = student.phoneNumber 
			 document.getElementById('emailaddress').value = student.emailAddress 
			 document.getElementById('age').value =student.aGe 
			 document.getElementById('gender').value =student.Gender 
		}
