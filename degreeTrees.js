const classes = [
    {
        name: "Intro to Programming",
		credits: "4 credits",
        desc: "Algorithms, computers and programs. Writing, debugging, and testing programs. " +
            "Loops and conditional control structures. Method definition and parameter passing. " +
            "Arrays, ArrayLists, and Strings. Sorting, searching and other basic algorithms. " +
            "Input and output. Programming applications selected from various disciplines. " +
            "History and basic concepts of computer science.",
		prereqs: "",
        id: 0
    },
    {
        name: "Object-Oriented Programming",
		credits: "4 credits",
        desc: "Programming techniques emphasizing reliability, maintainability, and reusability. "+
            "Multi-file programs. Abstract data types. Objects, classes, and object-oriented design. "+
            "Test suites, test drivers, and testing strategies; debugging, assertions, and an "+
            "introduction to formal techniques. Recursion, event-driven programming and threads, "+
            "GUI programming, and simple network programming ",
		prereqs: "Intro to Programming",	
        id: 1
    },
    {
        name: "Data Structures",
		credits: "4 credits",
        desc: "Container classes: their design, implementations, and applications. "+
            "Sequences: vectors, linked lists, stacks, queues, deques, lists. "+
            "Associative structures: sets, maps and their hash and tree underlying representations. "+
            "Sorting and searching techniques.",
		prereqs: "Object-Oriented Programming",	
        id: 2
    },
    {
        name: "Discrete Mathematics",
		credits: "3 credits",
        desc: "Elementary set theory, functions, relations, and Boolean algebra. " +
                "Switching circuits, gating networks. Definition and analysis of algorithms. " +
                "Applications of graph theory to computer science. Related algorithms. " +
                "Introduction to combinatorial computing and counting arguments. " +
                "Introduction to error analysis. ",
		prereqs: "Intro to Programming, Precalculus",		
        id: 3
    },
    {
        name: "Analysis of Algorithms",
		credits: "3 credits",
        desc: "Algorithms, data structures, and their analysis. Applications for and solution "+
        "to recurrence problems. Upper and lower bounds on complexities of various problems. "+
        "Classification by design structures. Sorting methods, graph and selection algorithms. "+
        "Pattern matching. Efficient computation of transitive closure and equivalences. NP-completeness. ",
		prereqs: "Data Structures, Discrete Structures, Calculus 1",
        id: 4
    },
    {
        name: "Computer Architecture",
		credits: "3 credits",
        desc: "Introduction to digital logic. Basic digital circuits. Boolean algebra and "+
        "combinational logic, data representation and transfer, digital arithmetic. Instruction sets. "+
        "Introduction to assembly languages: ALU and memory reference instructions, flow control, "+
        "subroutine linkage, arrays and structures. Memory. I/O systems. Performance. "+
        "Relationship between software and architecture. ",
		prereqs: "Intro to Programming, Discrete Structures",
        id: 5
    },
    {
        name: "Operating Systems",
		credits: "4 credits",
        desc: "Design and implementation of operating systems for large computers. Multiprogramming, "+
        "multiprocessing, time sharing. Resource allocation and scheduling. Communications, "+
        "conversational computing, computer networks. Memory protection, interrupts, segmentation, "+
        "paging, and virtual memories. ",
		prereqs: "Data Structures, Computer Architecture",
        id: 6
    },
	{
        name: "Artificial Intelligence",
		credits: "3 credits",
        desc: "Techniques for making computers exhibit intelligent behavior. Topics covered are "+
        "taken from the areas of problem solving, perception, game playing, knowledge representation, "+
        "natural language understanding, programs that learn (adaptive programs), expert systems, "+
        "and programming languages for work in artificial intelligence. ",
		prereqs: "Data Structures",
        id: 7
    },
    {
        name: "Computer Graphics",
		credits: "3 credits",
        desc: "Fundamentals of computer graphics programming. Graphics hardware and software standards. "+
        "2D geometric primitives and raster images. 3D object representations. Data structures, "+
        "algorithms, and the graphics pipeline. Graphical user interfaces. Underlying concepts in "+
        "computer graphics systems, including games, animation, modeling, rendering, and paint systems. ",
		prereqs: "Data Structures",
        id: 8
    },
    {
        name: "Game Programming",
		credits: "3 credits",
        desc: "Game programming techniques. 2D and 3D games. Data representations of virtual elements. "+
        "Visualizing the 3D game environment. Controlling motion and behaviors. Interaction control. "+
        "Game architectures, including multi-player games and message passing. Managing complexity. "+
        "Teamwork to create a 3D game using a 3D multi-player game engine. Interaction with game "+
        "development professionals regarding state-of-the-art hardware and software technology for "+
        "game creation and adaptation. ",
		prereqs: "Data Structures",
        id: 9
    },
    {
        name: "Theoretical Computer Science",
		credits: "3 credits",
        desc: "Overview of theoretical computer science. Formal language theory, computability theory. "+
        "Finite automata, context-free and regular grammars, push-down automata, and Turing machines. "+
        "Other models of computation, including recursive functions. Universal program and unsolvability. ",
		prereqs: "Discrete Structures, Data Structures, and Calculus 1",
        id: 10
    },
    {
        name: "Database Systems",
		credits: "3 credits",
        desc: "Introduction to database systems. Comparison to file processing systems. Data models. "+
        "Relational, hierarchical, and network systems. Database design. Normal forms. Study of "+
        "several real-world database management systems, with an emphasis on microcomputer "+
        "applications. Database recovery query and transaction processing, concurrency. "+
        "Distributed and object-oriented databases.",
		prereqs: "Data Structures",
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