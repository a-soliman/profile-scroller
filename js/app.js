const nextBtn = document.getElementById('next');
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 36,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Los Angles CA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

// ADD EVENT LISTENER TO NEXT BUTTON
nextBtn.addEventListener('click', nextProfile);

// PROFILE ITERATOR
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } :
            { done: true };
        }
    };
}

// INSTENSE OF PROFILEITERATOER
const profiles = profileIterator(data);

// NEXT PROFILE => IMBEDS THE NEXT PROFILE INTO THE UI
function nextProfile() {
    const profile = profiles.next().value;
    const imageContainer = document.getElementById('imageDisplay');
    const profileContainer = document.getElementById('profileDisplay');

    if ( !profile ) { 
        disableNextBtn();
        return; 
    }

    profileContainer.innerHTML = `
        <ul class='list-group'>
            <li class='list-group-item'>Name: ${profile.name}<li>
            <li class='list-group-item'>Age: ${profile.age}<li>
            <li class='list-group-item'>Gender: ${profile.gender}<li>
            <li class='list-group-item'>Looking For: ${profile.lookingfor}<li>
            <li class='list-group-item'>Location: ${profile.location}<li>
        </ul>
    `;

    imageContainer.innerHTML = `
        <img class='image-fluid' src='${profile.image}'>
    `;
}

// DISABLES THE NEXT BUTTON
function disableNextBtn() {
    nextBtn.setAttribute('disabled', 'true');
}