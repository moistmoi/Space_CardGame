$(document).ready(function () {
    const wrapper = $('#wrapper');
    rocketData.forEach(rocket => {
        const imageName = rocket.name.toLowerCase().replace(/\s+/g, '_') + '.png'; // Example: "Voyager 1" becomes "voyager_1.png" naming convention like the name in the data "name" in the JSON data only lowercase and spaces with "_".
        const imageUrl = `images/${imageName}`;

        const card =
            $(`<div class="card">
        <div class="card-content">
            <div class="card-number">${rocket.group_letter}${rocket.number}</div>
            <div class="card-title">
                <div class="card-name">${rocket.name}</div>
                <div class="card-group">${rocket.group}</div>
            </div>
    
            <div class="rocket-image">
                <img src="${imageUrl}" alt="${rocket.name}">
            </div>
            <div class="goal-icon"><img src="images/mission_goal.png" alt="goal-icon"></div>
            <div class="rocket-info">${rocket.mission_goal}</div>
    
            <div class="stat-icon"><img src="images/year_built.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.year_built}</div>
    
            <div class="stat-icon"><img src="images/mission_duration.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.mission_duration}</div>
    
            <div class="stat-icon"><img src="images/max_speed.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.max_speed}</div>
    
            <div class="stat-icon"><img src="images/max_earth_distance.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.max_earth_distance}</div>
    
            <div class="stat-icon"><img src="images/development_cost.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.development_cost}</div>
    
            <div class="stat-icon"><img src="images/rocket.weight.png" alt="goal-icon"></div>
            <div class="stat-value">${rocket.weight}</div>
    
        </div>
    </div>`);
        wrapper.append(card);
    });
});