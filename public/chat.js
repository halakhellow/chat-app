let socket = io.connect("http://localhost:4000/");

let output = document.getElementById("output"),
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
  output.innerHTML += `<p> <span>${data.name}</span> : ${data.message} </p>`;
});
