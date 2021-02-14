Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('date').value = new Date().toDateInputValue();

function showDetails() {
    
    var witnessCheckBox = document.getElementById("witness_checkbox");
    var witnessDetails = document.getElementsByClassName("witness_details");
    var attorneyCheckBox = document.getElementById("attorney_checkbox");
    var attorneyDetails = document.getElementsByClassName("attorney_details");
    if(witnessCheckBox.checked == true) {
        witnessDetails[0].style.display = "flex";
        witnessDetails[0].style.flexDirection = "column";
        witnessDetails[0].style.margin = "0.5rem 0 1rem 0"; 
    } else {
        witnessDetails[0].style.display = "none"
    };

    if(attorneyCheckBox.checked == true) {
        attorneyDetails[0].style.display = "flex";
        attorneyDetails[0].style.flexDirection = "column";
        attorneyDetails[0].style.margin = "0.5rem 0 1rem 0";
    } else {
        attorneyDetails[0].style.display = "none"
    };

}


// submit form 
let initialState = {}

function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value
    initialState = {...initialState, [key] : value};
    console.log(initialState)
}

const showData = document.getElementById("viewData")

function submitForm(e) {
    e.preventDefault();
    
    showData.innerHTML = `<h2>Customer Info</h2> <br/> Customer's Name: ${initialState.fName} ${initialState.lName} <br/> Customer's Address: ${initialState.address} ${initialState.city} ${initialState.state} ${initialState.zip} <br/> Customer's Contact Info: ${initialState.phone}, ${initialState.email}<br/> <h2>What Happened?</h2> <br/> Who? ${initialState.who} <br/> What? ${initialState.what} <br/> Where? City: ${initialState.whereCity} State: ${initialState.whereState} <br/> When? ${initialState.date}` 

    if(initialState.hasWitness == "on") {
        showData.innerHTML = `${showData.innerHTML} <br/> <h2>Customer Witness Details</h2> <br/> Witness Name: ${initialState.witness_fName} ${initialState.witness_lName} <br/> Witness Phone Number: ${initialState.witness_phone}`
    }

    if(initialState.hasAttorney == "on") {
        showData.innerHTML = `${showData.innerHTML} <br/> <h2>Customer Attorney Details</h2> <br/> Attorney Name: ${initialState.attorney_name} <br/> Practice: ${initialState.practice_name} <br/> Website ${initialState.attorney_website}`
    }

}




