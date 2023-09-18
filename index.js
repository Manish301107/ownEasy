// let url = 'http://127.0.0.1:5500/test.js'
let url = 'https://test-001-8831.onrender.com/';
// const teamListBox = document.getElementById('teamListBox')
// if(teamListBox.innerHTML == " "){
//     teamListBox.innerHTML = `No Record Found!!`
// }
console.log("Jai Sai Baba")
document.getElementById('deleteForm').style.display = "none"

const postNewData = () => {
    document.getElementById('postForm').style.display = "block"
    document.getElementById('deleteForm').style.display = "none"

}
const deleteData = () => {
    document.getElementById('deleteForm').style.display = "block"
    document.getElementById('postForm').style.display = "none"
}

try {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then((data) => {
            console.log(data);
            const length = data.length;
            // console.log(document.getElementById('teamListBox').innerHTML)
            for (let i = 0; i < length; i++) {
                html = `<div id="teamMember" class="rounded-md py-4 px-5 w-45 m-auto mt-4 bg-gray-50 h-38 drop-shadow-xl">
      <img class="h-24 my-4 rounded-full float-right md:mx-4" src="teamPic${i}" alt="profile_photo" id="teamPic${i}">
      <div id="name${i}"><label class="text-lg"></label><span class="text-lg text-slate-900/100 font-bold" id="teamName${i}">Naveen Bansal</span><br></div>
      <div id="age${i}"><label class=""></label> • <span class="text-slate-900/100" id="teamAge${i}"> 24 yrs</span><br></div>
      <div id="post${i}"><label class=""></label> • <span class="text-slate-900/100" id="teamPost${i}"> Founder & CEO </span><br></div>
      <div id="company${i}"><label class=""></label> • <span class="text-slate-900/100" id="teamCompany${i}">Pragati.ai</span><br></div>
      <div id="salary${i}"><label class=""></label> • ₹<span class="text-slate-900/100" id="teamSalary${i}">15,23,000 /-</span><br></div>
    </div>`
                document.getElementById('teamListBox').innerHTML += html


                document.getElementById(`teamPic${i}`).src = data[i].imgUrl
                document.getElementById(`teamName${i}`).innerHTML = data[i].name
                document.getElementById(`teamAge${i}`).innerHTML = data[i].age
                document.getElementById(`teamPost${i}`).innerHTML = data[i].post
                document.getElementById(`teamCompany${i}`).innerHTML = data[i].company
                document.getElementById(`teamSalary${i}`).innerHTML = data[i].salary

                if (data[i].salary == undefined) {
                    document.getElementById(`salary${i}`).innerHTML = ""
                } else if (data[i].company == undefined) {
                    document.getElementById(`company${i}`).innerHTML = ""
                } else if (data[i].post == undefined) {
                    document.getElementById(`post${i}`).innerHTML = ""
                } else if (data[i].age == undefined) {
                    document.getElementById(`age${i}`).innerHTML = ""
                } else if (data[i].name == undefined) {
                    document.getElementById(`name${i}`).innerHTML = ""
                }

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

} catch (err) {
    console.log("error : " + err)
}

const form = document.getElementById('postNewData');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const team = new FormData(form);
    const data = Object.fromEntries(team.entries());

    fetch('http://localhost:3011/form-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log(result.message);
            // Perform any desired actions upon successful submission
        })
        .catch((err) => {
            console.error('Error:', err);
            // Handle the error appropriately
        });
});


const dropForm = document.getElementById('deleteData');
dropForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(dropForm);

  // Convert the FormData object to a plain object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('http://localhost:3011/form-data', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result); 
      // Perform any desired actions upon successful deletion
    })
    .catch((err) => {
      console.error('Error:', err);
      // Handle the error appropriately
    });
});
