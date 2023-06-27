//   my projects tab

var modalInfo = {
    1: {
      title: "Project 1",
      info: "...",
      link: "#",
      github: "#"
    },
    2: {
      title: "Project 2",
      info: "...",
      link: "#",
      github: "#"
    },
    3: {
      title: "Project 3",
      info: "...",
      link: "#",
      github: "#"
    },
    4: {
      title: "Project 4",
      info: "....",
      link: "#",
      github: "#"
    },
    5: {
      title: "Project 5",
      info: "...",
      link: "#",
      github: "#"
    },
    6: {
      title: "Project 6",
      info: "...",
      link: "#",
      github: "#"
    }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }





  // contact me

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Send the form data to the server (you need to implement the server-side code)
    // Example using fetch API
    fetch("/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then(function(response) {
      if (response.ok) {
        document.getElementById("success-message").textContent = "Message sent successfully!";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        document.getElementById("success-message").textContent = "Error sending message.";
      }
    })
    .catch(function(error) {
      document.getElementById("success-message").textContent = "Error sending message.";
    });
  });
  








// social media icons script

