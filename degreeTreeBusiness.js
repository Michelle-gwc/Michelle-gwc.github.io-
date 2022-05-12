const classes = [
    {
        name: "Macroeconomics",
		credits: "4 credits",
        desc: `Contemporary economic analysis of the operation of the United States economy. 
        Role of markets and the determination of the overall level of economic activity.
         Dynamic process of growth, inflation, and international trade. `,
		prereqs: "",
        id: 0
    },
    {
        name: "Microeconomics",
		credits: "4 credits",
        desc: `Basic laws and principles of economic science. Value, price, and distribution. 
        Preparation for more comprehensive studies involving application of the tools of analysis 
        to economic problems. `,
		prereqs: "",	
        id: 1
    },
    {
        name: "Financial Management",
		credits: "4 credits",
        desc: `
        Understanding the goal and principles of financial management. Time value of money, 
        bond valuation and stock valuation. Capital budgeting methods. Introduction to financial 
        statement analysis, risk and return, asset pricing and capital structure analysis. `,
		prereqs: "Accounting",	
        id: 2
    },
    {
        name: "Accounting",
		credits: "3 credits",
        desc: `Introduction to the concepts and principles of financial accounting. 
        Techniques of data accumulation. Nature and interpretation of financial statements. 
        Corporate accounting.`,
		prereqs: "",		
        id: 3
    },
    {
        name: "Statistics",
		credits: "3 credits",
        desc: `Sample spaces; combinatorial theory; elementary probability; random variables; 
        discrete and continuous probability distributions; confidence intervals; hypothesis testing.`,
		prereqs: "Precalculus",
        id: 4
    },
    {
        name: "Mathematical Economics",
		credits: "3 credits",
        desc: `Mathematical tools necessary for advanced study. 
        Application of differential calculus and matrix algebra to economic analysis.
        Consideration of static, comparative static, and optimization models `,
		prereqs: "Precalculus, Microeconomics, Macroeconomics",
        id: 5
    },
    {
        name: "Operations Management",
		credits: "4 credits",
        desc: `Study in managerial decision making to solve a wide range of operating 
        management problems. Topics covered include: planning, evaluating, and control of operations; 
        forecasting and inventory management; scheduling; project design and management; 
        resource allocation; queuing models; quality of the work environment; and technological change. 
        Design and implementation of management strategy will be emphasized through computer simulation, 
        problems, and cases. `,
		prereqs: "Microeconomics, Macroeconomics, Mathematical Economics",
        id: 6
    },
	{
        name: "Introductory Formal Logic",
		credits: "3 credits",
        desc: `An introduction to modern sentential and predicate logic. Among the topics are validity, 
        consistency and proof, formal analysis of sentences and arguments in natural language. `,
		prereqs: "",
        id: 7
    },
    {
        name: "E-Commerce",
		credits: "3 credits",
        desc: `The history, theory, and practice of new media in today's networked society and how 
        this affects the profit and not-for-profit sectors; the implications of the convergence of 
        technology and convergence of disciplines; Internet marketing; and the societal implications 
        of the new connectedness. The latest research on the impact of second generation web-based 
        media such as social networking, blogs, wikis, and virtual communities will be examined. 
        This course will focus on how the new media is being used and/or should be used by the corporate world. `,
		prereqs: "Data Structures",
        id: 8
    },
    {
        name: "Consumer Behavior",
		credits: "3 credits",
        desc: `Interdisciplinary approach to understanding consumer motivation and behavior. 
        The relationship of information processing and learning theory on buyer behavior, 
        importance and measurement of images and attitudes, theories of promotion and communication, 
        and models of consumer behavior. Consumerism. Application of theoretical principles to advertising, 
        positioning, segmentation, and product strategies`,
		prereqs: "Macroeconomics",
        id: 9
    },
    {
        name: "Advertising",
		credits: "3 credits",
        desc: `Examination of persuasive strategies that use the major mass media. 
        Advertising and the relationship of market, copy, and media variables. 
        Analytical and practical exercises implement theory. `,
		prereqs: "",
        id: 10
    },
    {
        name: "Ethics and Society",
		credits: "3 credits",
        desc: `Critical consideration of issues in social ethics. Discussion of such topics as 
        racism and sexism, economic justice, civil disobedience, capital punishment, environmental 
        pollution, nuclear power and weaponry, abortion, euthanasia, freedom of information, the 
        right to privacy. `,
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