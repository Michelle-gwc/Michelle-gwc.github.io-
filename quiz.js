let total = 0

const majors = [
    {
        field : "Business",
        majors : ["Business Administration", "Marketing", "International Business", 
                "Busniess Management", "Sales", "Accounting"],
        description : ""
    },
    {
        field : "STEM",
        majors : ["Computer Science", "Mathematics", "Natural Sciences", "Engineering"],
        description : ""
    },
    {
        field : "Social",
        majors : ["Social Work", "Education", "Sociology", "Psychology"],
        description : ""
    },
    {
        field : "Art",
        majors : ["Film", "Creative Writing", "Studio Art", "Music", "Digital Media"],
        description : ""
    }
]

const prompts = [
    {
        prompt: "I enjoy participating in group activities",
        weight: -1,
        class: "group0"
    },
    {
        prompt: "I enjoy helping people",
        weight: 1,
        class: "group1"
    },
    {
        prompt: "I gravitate towards leadership roles",
        weight: -1,
        class: "group2"
    },
    {
        prompt: "I struggle with deadlines",
        weight: 1,
        class: "group3"
    },
    {
        prompt: "I enjoy math and science",
        weight: 1,
        class: "group4"
    },
    {
        prompt: "I am artistic",
        weight: -1,
        class: "group5"
    },
    {
        prompt: "I like to work with my hands",
        weight: 1,
        class: "group6"
    },
    {
        prompt: "I consider myself a risk-taker",
        weight: -1,
        class: "group7"
    }
]

const prompt_values = [
    {
        value: 'Strongly Agree', 
        class: 'btn-default btn-strongly-agree',
        weight: 5
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        weight: 3,
    }, 
    {
        value: 'Neutral', 
        class: 'btn-default',
        weight: 0
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        weight: -3
    },
    { 
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        weight: -5
    }
]

function createPromptItems(){
    
    for(let i = 0; i < prompts.length; i++){
        let li = document.createElement('li')
        let h3 = document.createElement('h3')
        let prompt_text = document.createTextNode(prompts[i].prompt);

        li.setAttribute("class", "list-group-item prompt")
        h3.appendChild(prompt_text)
        li.appendChild(h3)

        document.getElementById('quiz').appendChild(li)

        console.log(prompt_text)

    }
}

function createValueButtons(){
    for(let i = 0; i < prompts.length; i++){
        let group = document.createElement('div')
        group.className = "btn-group btn-group-justified"

        for(let j = 0; j < prompt_values.length; j++){
            let btn_group = document.createElement('div')
            btn_group.className = "btn-group"

            let button = document.createElement('button')
            let button_text = document.createTextNode(prompt_values[j].value)

            button.className = 'group' + i + ' value-btn btn ' + prompt_values[j].class

            button.appendChild(button_text)

			btn_group.appendChild(button)
			group.appendChild(btn_group)

			document.getElementsByClassName('prompt')[i].appendChild(group)
        }
    }
}

function getPromptWeight(prompts, group){
    let weight = 0
    for(let i = 0; i < prompts.length; i++){
        if(prompts[i].class === group){
            weight = prompts[i].weight
        }
    }
    return weight
}

function getValueWeight(value){
    let weight = 0;
    console.log(value)
    switch(value) {
        case 'Strongly Agree':
            weight = 5
            break
        case 'Agree':
            weight = 3
            break
        case 'Disagree':
            weight = -3
            break
        case 'Strongly Disagree':
            weight = -5
            break
        default:
            weight = 0
    }
    console.log(weight)
    return weight
}

createPromptItems()
createValueButtons()

$(".value-btn").mousedown(function () {
    let classList = $(this).attr('class').split(" ")
    let thisGroup = classList[0]

    if($(this).hasClass('active')){
        $(this).removeClass('active')
        total -= getPromptWeight(prompts, thisGroup) * 
                getValueWeight($(this).text())

        } else {
            total -= (getPromptWeight(prompts, thisGroup) * 
                    getValueWeight( $('.'+thisGroup+'.active').text()));
		    $('.'+thisGroup).removeClass('active');

            $(this).addClass('active');
            total += (getPromptWeight(prompts, thisGroup) * 
                getValueWeight($(this).text()));
        }
    console.log("Total: " + total)
})

$("#submit-btn").click(function() {
    $('.results').removeClass('hide');
	$('.results').addClass('show');
    let result = 0
    console.log(total)

    if(total <= -10){
        result = 2
    } else if (total > -10 && total < 0){
        result = 3
    } else if (total >= 0 && total <= 10){
        result = 0
    } else {
        result = 1
    }

    document.getElementById('results').innerHTML = "<h3>You are best suited to " + 
        majors[result].field + " majors! </h3>"

    $('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})


$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})