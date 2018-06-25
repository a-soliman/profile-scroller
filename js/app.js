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

// Profile Iterator
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

const profiles = profileIterator(data);

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextProfile);


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

function disableNextBtn() {
    nextBtn.setAttribute('disabled', 'true');
}