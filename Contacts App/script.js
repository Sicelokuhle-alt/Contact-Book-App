//Global variables
let apiKey = '';
const rootPath = 'https://mysite.itvarsity.org/api/ContactBook/';

// Check API key exists when page loads
function checkApi() {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey){
        apiKey = storedApiKey;
        // Show contacts page
        showContacts();
        // Get contacts (API call)
        getContacts();
    }
}

// Set the API Key and store it
function setApiKey() {
    const inputKey = document.getElementById('apiKeyInput').value.trim();
    
    if (!inputApiKey){
        alert('Please enter an API key');
        return;
    } 
    // Validate API key first
    fetch(rootPath + "controller/api-key/?apikey=" + inputApiKey)
        .then(function (response) {
            return response.text();
        })
        .then(function(data) {
            if (data == "1"){
                apiKey = inputApiKey;
                localStorage.setItem("apiKey", apiKey);
                apiKey = inputApiKey;
                localStorage.setItem("apiKey", apiKey);
                showContacts();
                getContacts();
            } else {
                alert("Invalid API key entered!");
            }
        })
        .catch(function(error) {
            alert('Error validating your API key. Please try again.');
        });
}
// Show different pages
function showPages(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classlist.remove('active'));
    
    // Show selected pages
    document.getElementById(pageId).classlist.add(.'active');
}

function showContacts() {
    showPage('contactsPage');
}

function showAddContacts() {
    showPage('addContactPage');
    // Clear the form
    document.getElementById('addContactForm').reset();
}

function ShowEditContacts(contactId) {
    showPage('editContactPage')
(    // Load contact data for editing
    loadContactForEdit(contactId);
}
