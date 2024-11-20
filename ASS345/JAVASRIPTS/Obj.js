let filterarray = [];

let galleryarray = [
  {
    id: 1,
    name: "Spagetti",
    price: "4600",
    tag: "golenpenny1",
  },
  {
    id: 2,
    name: "Indomie",
    price: "5400",
    tag: "goldpenny8",
  },
  {
    id: 7,
    name: "Beans",
    price: "1600",
    tag: "tasty1",
  },
  {
    id: 5,
    name: "Rice",
    price: "4000",
    tag: "gole1",
  },
];

showgallery(galleryarray);

function showgallery(currarray) {
  for (var i = 0; i < currarray.length; i++) {
    document.getElementById("card").innerHTML += `
    <div class="col-md-4 mt-3">
    <div class="card p-3 ps-5 pe-5">
    <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
    <p class="mt-2">${currarray[i].price}</p>
    <button class="btn-primary w-100 mx-auto">More</button>
    </div>
    </div>
    
    
    `;
  }
}
