let total = 0

const majors = [
    {
        field : "Computer Science",
        desc : `Computer science is a major for problem solvers who want to learn how 
        to use computers and computational processes to build websites, program robots, 
        mine data and more.`,
        image : "images/stem.jpg",
        htmlFile : "degreeTrees.html"
    },
    {
        field : "Business",
        desc : `Business administration majors learn the mechanics of business 
        through classes in fundamentals such as finance, accounting and 
        marketing and delve into more specialized topics. Students find ways 
        to solve problems using data, and they develop communication and managerial skills`,
        image : "images/business.jpg",
        htmlFile : "degreeTreeBusiness.html"
    },
    {
        field : "Journalism and Media Studies",
        desc : `The Journalism and Media Studies program encourages students 
        to develop a critical, ethical, and deliberative paradigm for the 
        practice of journalism as a public service. We seek to cultivate 
        proficiencies in storytelling across platforms and subject areas, 
        and inspire our students to embrace the potential for innovation 
        that exists in our media environment. `,
        image : "images/humanities.jpg",
        htmlFile : "degreeTreeJournalism.html"
        
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
        let h4 = document.createElement('h4')
        let prompt_text = document.createTextNode(prompts[i].prompt);

        li.setAttribute("class", "list-group-item prompt")
        h4.appendChild(prompt_text)
        li.appendChild(h4)

        document.getElementById('quiz').appendChild(li)

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

            //sets defaults response to neutral
            if(prompt_values[j].value === 'Neutral'){
                button.className += ' active'
            }

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
    let active
    for(let i = 0; i < 8; i++){
        active = false
        let group = Array.from(document.getElementsByClassName('group' + i))
        for(let j = 0; j < group.length; j++){
            
            if(group[j].classList.contains('active')){
                active = true
            }

        }
        if(active == false){
            $('.error').removeClass('hide')
            $('.error').addClass('show')
            return
        }
    }

    $('.results').removeClass('hide');
	$('.results').addClass('show');
    $('.error').removeClass('show');
    $('.error').addClass('hide');
    let result = 0

    if(total <= -6){
        result = 2
    } else if (total >= 6){
        result = 0
    } else {
        result = 1
    }

    document.getElementById('results').innerHTML = "<h3>You are best suited to " + 
        majors[result].field + "! </h3><br/>" + 
        "<img src=" + majors[result].image + " alt='Major image' width='500' height='300'/><br/>" +
        "<div class='course-desc'>" +
        "<p>" + majors[result].desc + "</p>" +
        "<a href='" + majors[result].htmlFile + "'>VIEW DEGREE</a>"

    $('#title').addClass('hide')
    $('#quiz').addClass('hide')
	$('#submit-btn').addClass('hide')
	$('#retake-btn').removeClass('hide')
})

$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide')
	$('#submit-btn').removeClass('hide')
    $('#title').removeClass('hide')
	$('#retake-btn').addClass('hide')

	$('.results').addClass('hide')
	$('.results').removeClass('show')
})