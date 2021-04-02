const user_form = document.querySelector('form');
const user_input = document.querySelector('input');



user_form.addEventListener('submit', (event) => {
    
    event.preventDefault()
    renderUser(user_input.value);

})

function renderUser(username){

 const url = "https://api.github.com/users/" + username;
 fetch(url)
  .then(response =>{
    if(response.ok){
        return response.json()
    }else{
        document.querySelector('.gh_form').innerHTML = 'Something went Wrong :('
    }
    })
  .then(data => {
    console.log(data)
    document.querySelector('body').innerHTML=`
    <img class="bg_image" src="images/wall.jpeg" alt="">
    <div class="float1" style="opacity:1">
     <a href="https://github.com/SakshamDevelops/Frontend-101"><img src="images/git1.png"></a>
      </div>
      <div class="float2" style="opacity:1">
      <a href="https://github.com/SakshamDevelops/Frontend-101"><img src="images/git2.png" alt=""></a>
      </div>
     <div class="profile_card" style="opacity:1">
      <div class="photo_card">
         <div class="image_container">
             <img class="profile_img" src="${data.avatar_url}" alt="">
           </div>
          <h1>${data.name}</h1>
          <p>${data.bio}</p>
      </div>

      <div class="info_card">
       <p><strong>${data.followers}</strong> Followers</p>
       <p><strong>${data.following}</strong> Following</p>
       <p> <strong>${data.public_repos}</strong> Repos</p>
      </div>
    </div>
    `
})
  .catch(error => console.log(error));

}