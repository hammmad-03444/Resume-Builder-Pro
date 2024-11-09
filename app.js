// Function to enable editing
function enableEditing() {
    var resumeFields = document.querySelectorAll('[contenteditable="true"]');
    resumeFields.forEach(function (field) {
        field.setAttribute('contenteditable', 'true');
    });
    alert('You can now edit your resume');
}
// Function to print the resume
function printResume() {
    var _a, _b;
    // Hide buttons for printing
    (_a = document.querySelector('.button-container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    // Print the resume
    window.print();
    // Show buttons after printing
    (_b = document.querySelector('.button-container')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
}
// / Function to add a new education entry
function addEducation() {
    // Get the education list container
    var educationList = document.getElementById('education-list');
    // Check if the education list exists
    if (!educationList) {
        console.error("Education list element not found!");
        return;
    }
    // Create a new div for the education entry
    var newEducation = document.createElement('div');
    newEducation.classList.add('education-entry'); // Add a class for styling if needed
    newEducation.setAttribute('contenteditable', 'true');
    // Set a placeholder for the new education entry
    newEducation.innerHTML = "\n            <p><strong>Year</strong> - Degree<br>From University/Institute</p>\n        ";
    // Add the new entry to the education list
    educationList.appendChild(newEducation);
    // Set focus on the new education entry to prompt editing
    newEducation.focus();
}
//  // Function to add a new skill item to the skills list
//  function addSkill() {
//     // Create a new list item element
//     const newSkillItem = document.createElement('li');
//     // Make the new skill item editable by the user
//     newSkillItem.contentEditable = "true";
//     newSkillItem.textContent = "New Skill"; // Placeholder text for new skill
//     // Append the new list item to the skills list
//     const skillsList = document.getElementById('skills-list');
//     skillsList.appendChild(newSkillItem);
//     // Set focus on the new skill item to prompt immediate editing
//     newSkillItem.focus();
// }
function addSkill() {
    // Select the skills list element
    var skillsList = document.getElementById('skills-list');
    // Check if the skills list element exists
    if (!skillsList) {
        console.error("Skills list element not found!");
        return;
    }
    // Create a new list item element
    var newSkillItem = document.createElement('li');
    // Make the new skill item editable by the user
    newSkillItem.contentEditable = "true";
    newSkillItem.textContent = "New Skill"; // Placeholder text for new skill
    // Append the new list item to the skills list
    skillsList.appendChild(newSkillItem);
    // Set focus on the new skill item to prompt immediate editing
    newSkillItem.focus();
}
