/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const studentItems = {
  studentsPerPage: 9,
  currentPage: 1,
};

const studentSearch = document.querySelector(".student-search");
const searchSpan = document.querySelector(".student-search span");
const search = document.querySelector("#search");
const header = document.querySelector(".header");
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");

const showPage = (list, page) => {
  studentItems.currentPage = page;
  studentList.innerHTML = "";
  let startIndex =
    (studentItems.currentPage - 1) * studentItems.studentsPerPage;
  let endIndex;

  if (startIndex + studentItems.studentsPerPage > list.length) {
    endIndex = list.length;
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

    let studentData = list[x];
    let student = {
      studentImg: studentData.picture.large,
      studentName: studentData.name,
      studentEmail: studentData.email,
      studentJoined: studentData.registered.date,
    };

    img.src = student.studentImg;
    h3.textContent = `${student.studentName.first} ${student.studentName.last} `;
    emailSpan.textContent = student.studentEmail;
    detailsDiv.appendChild(img);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(emailSpan);

    dateSpan.textContent = student.studentJoined;
    joinedDiv.appendChild(dateSpan);

    li.appendChild(detailsDiv);
    li.appendChild(joinedDiv);
    studentList.appendChild(li);
  }

  addPagination(list);
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
  let totalPages = Math.ceil(list.length / studentItems.studentsPerPage);
  linkList.innerHTML = "";

  for (let x = 0; x < totalPages; x++) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = x + 1;
    button.addEventListener("click", function () {
      showPage(list, x + 1);
    });
    x + 1 === studentItems.currentPage
      ? button.classList.add("active")
      : button.classList.remove("active");

    li.appendChild(button);
    linkList.appendChild(li);
  }
};

const noResults = () => {
  let h3 = document.createElement("h3");
  h3.textContent = "No results";

  studentList.appendChild(h3);
};

// search function
const searchStudents = () => {
  let txtValue;
  let h3 = document.querySelectorAll("h3");
  let filter = search.value.toUpperCase();
  let studentLi = document.querySelectorAll(".cf");

  let searchArray = [];

  for (let x = 0; x < data.length; x++) {
    txtValue = `${data[x].name.first} ${data[x].name.last}`;
    if ((txtValue = txtValue.toUpperCase().indexOf(filter) > -1)) {
      searchArray.push(data[x]);
    }
    showPage(searchArray, studentItems.currentPage);

    if (!txtValue) {
      noResults();
    }
  }
};

search.addEventListener("keyup", searchStudents);
studentSearch.addEventListener("click", searchStudents);

// Call functions

showPage(data, studentItems.currentPage);
