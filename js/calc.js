const tillTotals = document.createElement("form");
tillTotals.id = "till_totals";
document.body.appendChild(tillTotals);
const faceValues = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
for (let faceValue of faceValues) {
    let fVTotal = document.createElement("div");
    fVTotal.setAttribute("class", "fv_total");
    let fVLabel = document.createElement("label");
    fVLabel.setAttribute("for", faceValue);
    let faceValueFormatted;
    if (faceValue >= 1) {
        faceValueFormatted = "€" + faceValue;
    } else {
        faceValueFormatted = faceValue * 100 + "c";
    }
    fVLabel.textContent = faceValueFormatted;
    let fVInput = document.createElement("input");
    fVInput.setAttribute("type", "number");
    fVInput.setAttribute("id", faceValue);
    fVInput.setAttribute("name", faceValue);
    fVInput.setAttribute("oninput", "calculate(this.id)");
    fVInput.setAttribute("pattern", "[0-9]*");
    fVInput.setAttribute("min", "0");
    fVInput.setAttribute("placeholder", faceValueFormatted);
    tillTotals.appendChild(fVTotal);
    let fVSubTotal = document.createElement("span");
    fVSubTotal.setAttribute("id", faceValue + "total");
    fVSubTotal.setAttribute("class", "subtotal");
    fVSubTotal.textContent = 0;
    fVTotal.append(fVLabel);
    fVTotal.append(fVInput);
    fVTotal.append(fVSubTotal);
}


function calculate(id) {
    let quantity = Number.parseFloat(document.getElementById(id).value);
    let fv = Number.parseFloat(id);
    if (fv < 1) {
        document.getElementById(id + "total").innerHTML = (fv * quantity).toFixed(2);
    } else {
        document.getElementById(id + "total").innerHTML = fv * quantity;
    }
    let subTotals = document.getElementsByClassName("subtotal");
    console.log(Number.parseFloat(subTotals[0].textContent));
    let total = 0;
    for(let subTotal of subTotals) {
        total += Number.parseFloat(subTotal.textContent);
    }
    //let totalsum = Number.parseInt(subTotals[0].textContent) + Number.parseInt(subTotals[1].textContent);
    document.getElementById("total").innerHTML = total.toFixed(2);
}
