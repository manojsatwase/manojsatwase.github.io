var resultList = [
  {
    img: "https://randomuser.me/api/portraits/med/men/65.jpg",
    title: "web_development",
    instructor: "john doe",
    level: "Beginner",
    total_video: 50
  },
  {
    img: "https://randomuser.me/api/portraits/med/men/67.jpg",
    title: "javascript",
    instructor: "john doe",
    level: "Beginner",
    total_video: 40
  },
  {
    img: "https://randomuser.me/api/portraits/med/men/68.jpg",
    title: "React JS",
    instructor: "john doe",
    level: "Beginner",
    total_video: 30
  }
  // {
  //   img: "https://randomuser.me/api/portraits/med/men/69.jpg",
  //   title: "Node JS",
  //   instructor: "peter doe",
  //   level: "Beginner",
  //   total_video: 30
  // }
];

function NewResult(item) {
  const { title, instructor, level, total_video, img } = item;
  return `
								
        <div class="result">
        <h2>About Course Instructor</h2>
        <p>The Missing Computer Science and Coding Interview Bootcamp</p>
          <div class="thumnail"><img src=${img} /></div>
        <div class='title'><spna>Course</span> ${title} </div>
        <div class="instructor">Instructor: ${item.instructor} </div>
        <div class="level">Level: ${level} </div>
        <div class="totol-video">Total_Videos: ${total_video} </div>
        </div>

      `;
}

document.getElementById("app").innerHTML = resultList.map(NewResult).join("");
