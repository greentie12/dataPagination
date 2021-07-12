/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const studentItems = {
  studentsPerPage: 9,
  currentPage: 1,
};

const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");

const showPage = (page) => {
  studentItems.currentPage = page;
  studentList.innerHTML = "";
  let startIndex =
    (studentItems.currentPage - 1) * studentItems.studentsPerPage;
  let endIndex;

  if (startIndex + studentItems.studentsPerPage > data.length) {
    endIndex = data.length;
  } else {
    endIndex = startIndex + studentItems.studentsPerPage;
  }

  for (let x = startIndex; x < endIndex; x++) {
    let li = document.createElement("li");
    li.classList.add("student-item", "cf");

    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("student-details");
    let img = document.createElement("img");
    img.classList.add("avatar");
    let h3 = document.createElement("h3");
    let emailSpan = document.createElement("span");
    emailSpan.classList.add("email");

    let joinedDiv = document.createElement("div");
    joinedDiv.classList.add("joined-details");
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");

    let studentData = data[x];
    let student = {
      studentImg: studentData.picture.large,
      studentName: studentData.name,
      studentEmail: studentData.email,
      studentJoined: studentData.registered.date,
    };

    img.src = student.studentImg;
    h3.innerHTML = `${student.studentName.first} ${student.studentName.last} `;
    emailSpan.innerHTML = student.studentEmail;
    detailsDiv.appendChild(img);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(emailSpan);

    dateSpan.innerHTML = student.studentJoined;
    joinedDiv.appendChild(dateSpan);

    li.appendChild(detailsDiv);
    li.appendChild(joinedDiv);
    studentList.appendChild(li);
  }

  showButtons();
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const showButtons = () => {
  let totalPages = Math.ceil(data.length / studentItems.studentsPerPage);
  linkList.innerHTML = "";

  for (let x = 0; x < totalPages; x++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = x + 1;
    button.addEventListener("click", function () {
      showPage(x + 1);
    });
    li.appendChild(button);
    linkList.appendChild(li);
  }
};

// Call functions

showPage(studentItems.currentPage);
