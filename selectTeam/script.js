const cardsSelectp1 = document.getElementById("p1")
const cardsSelectp2 = document.getElementById("p2")
const cardsSelectp3 = document.getElementById("p3")

const cardsSelectc1 = document.getElementById("c1")
const cardsSelectc2 = document.getElementById("c2")
const cardsSelectc3 = document.getElementById("c3")
fetch("/api/image")
.then(res => res.json())
.then(({imgUrl1,imgUrl2,imgUrl3,imgName1,imgName2,imgName3}) => {
    const newCard1 = document.createElement("div");
    newCard1.setAttribute("class", "card");
    newCard1.setAttribute("style", "width:18rem");
    newCard1.innerHTML = `<img src=${imgUrl1} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName1}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectp1.appendChild(newCard1);
   
    const newCard2 = document.createElement("div");
    newCard2.setAttribute("class", "card");
    newCard2.setAttribute("style", "width:18rem");
    newCard2.innerHTML = `<img src=${imgUrl2} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName2}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectp2.appendChild(newCard2);

    const newCard3 = document.createElement("div");
    newCard3.setAttribute("class", "card");
    newCard3.setAttribute("style", "width:18rem");
    newCard3.innerHTML = `<img src=${imgUrl3} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName3}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectp3.appendChild(newCard3);
})

fetch("/api/image")
.then(res => res.json())
.then(({imgUrl1,imgUrl2,imgUrl3,imgName1,imgName2,imgName3}) => {
    const newCard4 = document.createElement("div");
    newCard4.setAttribute("class", "card");
    newCard4.setAttribute("style", "width:18rem");
    newCard4.innerHTML = `<img src=${imgUrl1} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName1}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectc1.appendChild(newCard4);
   
    const newCard5 = document.createElement("div");
    newCard5.setAttribute("class", "card");
    newCard5.setAttribute("style", "width:18rem");
    newCard5.innerHTML = `<img src=${imgUrl2} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName2}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectc2.appendChild(newCard5);

    const newCard6 = document.createElement("div");
    newCard6.setAttribute("class", "card");
    newCard6.setAttribute("style", "width:18rem");
    newCard6.innerHTML = `<img src=${imgUrl3} alt="Avatar" class="card-img-top">
    <div class="card-body bg-secondary">
      <h4 class="card-title"><b>${imgName3}</b></h4>
      <a href="#" class="btn btn-danger center">Remove</a>
      <a href="#" class="btn btn-success center">Add To Team</a>
    </div>`
    cardsSelectc3.appendChild(newCard6);
    
})
