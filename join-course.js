// 列表不同

// var config = {
//   method: 'get',
//   url: 'https://my-json-server.typicode.com/kisskie/fake-pet-json/classes',
// };

// axios(config)
//   .then(function (response) {
//     var classes = response.data;
//     for (let index = 0; index < classes.length; index++) {
//       var course = classes[index];
//       if (course.type === 'dog') {
//         $('.main').append(`
//               <div class="lesson">
//                   <span class="course_name">${course.name}</span>
//                   <p class="course_desc">${course.description}</p>
//               </div>
//           `);
//       } else if (course.type === 'cat') {
//         $('.main').append(`
//               <div class="lesson2">
//                   <span class="course_name">${course.name}</span>
//                   <p class="course_desc">${course.description}</p>
//               </div>
//           `);
//       } else {
//         $('.main').append(`
//               <div class="lesson3">
//                   <span class="course_name">${course.name}</span>
//                   <p class="course_desc">${course.description}</p>
//               </div>
//           `);
//       }
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

var config = {
  method: 'get',
  url: 'https://my-json-server.typicode.com/kisskie/fake-pet-json/classes',
};

axios(config)
  .then(function (response) {
    var classes = response.data;
    for (let index = 0; index < classes.length; index++) {
      var course = classes[index];
      var className = 'lesson';
      if (course.type === 'dog') {
        className = 'lesson';
      } else if (course.type === 'cat') {
        className = 'lesson2';
      } else {
        className = 'lesson3';
      }

      $('.main').append(`
                <div class="${className}">
                    <span class="course_name">${course.name}</span>
                    <p class="course_desc">${course.description}</p>
                </div>
            `);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
