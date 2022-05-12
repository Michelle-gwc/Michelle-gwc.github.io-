const classes = [
    {
        name: "Mass Media",
		credits: "4 credits",
        desc: `Survey of the history, industry practices, and controversies involved in the media 
        of mass communication. Mainstream mass media of books, newspapers, magazines, film, radio, 
        recordings, television, and the Internet. Analysis of news, entertainment, advertising, 
        and public strategies, as well as media impact, legal issues, and ethics. `,
		prereqs: "",
        id: 0
    },
    {
        name: "Funamentals of Storytelling",
		credits: "4 credits",
        desc: `Fundamental principles of multi-platform journalism and media literacy. 
        Writing for the web, creation of basic audio and visual texts, introduction to 
        the tools of multi-platform journalism in both theory and practice. `,
		prereqs: "",	
        id: 1
    },
    {
        name: "News Writing and Reporting",
		credits: "4 credits",
        desc: `Introduction to news writing and reporting across media platforms. 
        Developing journalistic judgment. `,
		prereqs: "Mass Media",	
        id: 2
    },
    {
        name: "Audio Storytelling",
		credits: "3 credits",
        desc: `Fundamental principles of identifying, recording, editing, and writing for audio 
        across a variety of platforms. Covers techniques of field and studio story production.`,
		prereqs: "",		
        id: 3
    },
    {
        name: "Ethics in Media",
		credits: "3 credits",
        desc: `Analysis and discussion of ethical issues related to television, Radio and Emerging Media. 
        Case histories and role playing provide value judgments concerning entertainment, information, 
        and advertising functions of mass media. `,
		prereqs: "Philosophy 1",
        id: 4
    },
    {
        name: "Advanced News Writing and Reporting",
		credits: "3 credits",
        desc: `Advanced techniques for news writing and reporting across media platforms. 
        Developing journalistic judgment.`,
		prereqs: "Mass Media, News Writing",
        id: 5
    },
    {
        name: "Data Journalism",
		credits: "4 credits",
        desc: `Fundamental principles of data journalism ? finding, gathering, analyzing and 
        querying datasets; creation of static and interactive infographics to tell journalistic 
        stories. Practical and theoretical considerations about use of data and the creation of 
        data journalism in the converged media environment. `,
		prereqs: "Mass Media, News Writing",
        id: 6
    },
	{
        name: "Multi-Camera Television Production",
		credits: "3 credits",
        desc: `Aspects of television studio operation that contribute to the aesthetics of production. 
        Laboratory practice with cameras, microphones, sound effects, properties, lighting instruments 
        and control, audio console, and switcher-fader. `,
		prereqs: "Multimedia Design and Production",
        id: 7
    },
    {
        name: "Multimedia Design and Production",
		credits: "3 credits",
        desc: `Multimedia storytelling and design for cross-platform distribution. 
        Integration of video, audio, text, and graphic elements for compelling storytelling 
        and best aesthetic effect. Interface design and navigational considerations of interactive content. `,
		prereqs: "Data Structures",
        id: 8
    },
    {
        name: "Information Curation and Verification",
		credits: "3 credits",
        desc: `Theoretical consideration of and practical experience in information selection, verification 
        and fact-checking. Examination of data and content ?curation? in an online environment.
         Consideration of the ethical, political, social, technological and representational 
         implications of information organization and dissemination in a socially networked world.`,
		prereqs: "Macroeconomics",
        id: 9
    },
    {
        name: "Investigative Journalism",
		credits: "3 credits",
        desc: `Study of advanced reporting techniques with the aim of producing an in-depth 
        or investigative story using multiple media platforms. `,
		prereqs: "",
        id: 10
    },
    {
        name: "Video Storytelling",
		credits: "3 credits",
        desc: `Fundamental principles of identifying, recording, editing, and writing for video 
        across a variety of platforms. Covers techniques of field and studio story production. `,
		prereqs: "",
        id: 11
    }
]


function displayCourse(i){
	const div = document.getElementById('course-desc');

	div.innerHTML = '<h2>' + classes[i].name + '</h2><br>\
			<p>' + classes[i].credits + '</p><br>\
			<p>' + classes[i].desc + '\
			</p><p>Prerequisites: ' + classes[i].prereqs + '</p>';
}

//Add toggle function to course names
let courseNames = document.querySelectorAll('.course')

for(let i = 0; i < courseNames.length; i++){
    let button1 = courseNames[i]

    button1.addEventListener('click', function(event){
        for(let j = 0; j < courseNames.length; j++){
            console.log(j)
            let button2 = courseNames[j]
            button2.classList.remove('clicked')
        }
        this.classList.toggle('clicked')
    })
}