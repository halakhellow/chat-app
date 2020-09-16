let socket = io.connect("http://localhost:4000/");

let output = document.getElementById("output"),
  feedback = document.getElementById("feedback"),
  name = document.getElementById("name"),
  message = document.getElementById("message"),
  btn = document.getElementById("send");

btn.onclick = () => {
  socket.emit("chat", {
    name: name.value,
    message: message.value,
  });
};

socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML += `<p> <span>${data.name}</span> : ${data.message} </p>`;
});

message.onkeypress = () => {
  socket.emit("typing", name.value);
};

socket.on("typing", (data) => {
  feedback.innerHTML = `<p> <em>${data} is typing ...</em> </p>`;
});
