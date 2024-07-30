
function displayProfile() {
    const username = localStorage.getItem('username');
    const age = localStorage.getItem('age');
    const weight = localStorage.getItem('weight');
    const gender = localStorage.getItem('gen');
    const bodyTypeGoal = localStorage.getItem('bodyTypeGoal');
    const height = localStorage.getItem('height');

    document.getElementById('profileUsername').textContent = username ? username : 'N/A';
    document.getElementById('profileAge').textContent = age ? age : 'N/A';
    document.getElementById('profileWeight').textContent = weight ? weight : 'N/A';
    document.getElementById('profileHeight').textContent = height ? height : 'N/A';
    document.getElementById('profileGender').textContent = gender ? gender : 'N/A';
    document.getElementById('profileBodyTypeGoal').textContent = bodyTypeGoal ? bodyTypeGoal : 'N/A';
}
