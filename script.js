
function updateProduct(isincreasing,price,product){
    const productInput = document.getElementById(  product+ "-number");
    let  productNumber = productInput.value;
   const productFloat = parseInt(productNumber);
   // 1 kore barate hole input er value er sathe parseint kora new value ke 1 kore plus korte hobe..
  if(isincreasing === true){
    productNumber = productFloat +  1;

  }
  else if( productNumber >0){

   productNumber = productFloat -  1;
  }
//   direct number value take case number e convert korci
  productInput.value = productNumber;
  let productprice = document.getElementById(  product+ "-total");
// casetotal ta innertxt e cilo take number e convert kore casenumber er sathe price ta multipy..
const productAmount = productNumber * price
  productprice.innerText = productAmount;
//  total ammount calling
const totalAmount = calculate();
const subTotal = document.getElementById("sub-total")
subTotal.innerText = totalAmount;

// tax 

const tax = totalAmount *5/100
const subtax = document.getElementById("tax-amount");
subtax.innerText = tax;

// total ammount in last line

const lastTotal = tax + totalAmount;
document.getElementById("total-price").innerText = lastTotal;

}
// increase
document.getElementById("case-plus").addEventListener("click",function(){

//    calling functioin by function name and parameter..parameter dile function kontar jonno call hocce seta cheek korbe..........
updateProduct(true,59,"case");
})
//  decrese

document.getElementById("case-minus").addEventListener("click",function(){

  updateProduct(false,59,"case")
})
//  phone 
document.getElementById("phone-plus").addEventListener("click",function(){

    updateProduct(true,1219,"phone")
})

document.getElementById("phone-minus").addEventListener("click",function(){

    updateProduct(false,1219,"phone")
})


function input(product){

  const producTotal = document.getElementById(  product +"-number");
  const productValue = producTotal.value;
  return productValue;
}

function calculate(){

  const phoneTotal = input("phone") * 1219
  const caseTotal = input("case") * 59
  const totalPrice = phoneTotal + caseTotal;
  return totalPrice;
}