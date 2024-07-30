 document.addEventListener('DOMContentLoaded', function () {
    const addGoalButton = document.getElementById('addGoalButton');
    const goalInput = document.getElementById('goalInput');
    const goalsList = document.getElementById('goalsList');

    loadGoals();

    addGoalButton.addEventListener('click', function () {
        const goalText = goalInput.value;
        if (goalText.trim()) {
            addGoal(goalText);
            goalInput.value = '';
            saveGoals();
        }
    });

    function addGoal(goalText, checked = false) {
        const li = document.createElement('li');
        li.className = 'goal-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = checked;
        checkbox.addEventListener('change', saveGoals);

        const span = document.createElement('span');
        span.textContent = goalText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function () {
            goalsList.removeChild(li);
            saveGoals();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        goalsList.appendChild(li);
    }

    function saveGoals() {
        const goals = [];
        document.querySelectorAll('.goal-item').forEach(function (goalItem) {
            const goalText = goalItem.querySelector('span').textContent;
            const checked = goalItem.querySelector('.checkbox').checked;
            goals.push({ text: goalText, checked: checked });
        });
        localStorage.setItem('goals', JSON.stringify(goals));
    }

    function loadGoals() {
        const goals = JSON.parse(localStorage.getItem('goals')) || [];
        goals.forEach(function (goal) {
            addGoal(goal.text, goal.checked);
        });
    }
});
