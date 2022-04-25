const prerequisites = [
    {
        name: "Intro to Programming",
        desc: "Algorithms, computers and programs. Writing, debugging, and testing programs. " +
            "Loops and conditional control structures. Method definition and parameter passing. " +
            "Arrays, ArrayLists, and Strings. Sorting, searching and other basic algorithms. " +
            "Input and output. Programming applications selected from various disciplines. " +
            "History and basic concepts of computer science.",
        id: 0
    },
    {
        name: "Object-Oriented Programming",
        desc: "Programming techniques emphasizing reliability, maintainability, and reusability. "+
            "Multi-file programs. Abstract data types. Objects, classes, and object-oriented design. "+
            "Test suites, test drivers, and testing strategies; debugging, assertions, and an "+
            "introduction to formal techniques. Recursion, event-driven programming and threads, "+
            "GUI programming, and simple network programming ",
        id: 1
    },
    {
        name: "Data Structures",
        desc: "Container classes: their design, implementations, and applications. "+
            "Sequences: vectors, linked lists, stacks, queues, deques, lists. "+
            "Associative structures: sets, maps and their hash and tree underlying representations. "+
            "Sorting and searching techniques.",
        id: 2
    },
    {
        name: "Discrete Mathematics",
        desc: "Elementary set theory, functions, relations, and Boolean algebra. " +
                "Switching circuits, gating networks. Definition and analysis of algorithms. " +
                "Applications of graph theory to computer science. Related algorithms. " +
                "Introduction to combinatorial computing and counting arguments. " +
                "Introduction to error analysis. ",
        id: 3
    },
    {
        name: "Analysis of Algorithms",
        desc: "Algorithms, data structures, and their analysis. Applications for and solution "+
        "to recurrence problems. Upper and lower bounds on complexities of various problems. "+
        "Classification by design structures. Sorting methods, graph and selection algorithms. "+
        "Pattern matching. Efficient computation of transitive closure and equivalences. NP-completeness. ",
        id: 4
    },
    {
        name: "Computer Architecture",
        desc: "Introduction to digital logic. Basic digital circuits. Boolean algebra and "+
        "combinational logic, data representation and transfer, digital arithmetic. Instruction sets. "+
        "Introduction to assembly languages: ALU and memory reference instructions, flow control, "+
        "subroutine linkage, arrays and structures. Memory. I/O systems. Performance. "+
        "Relationship between software and architecture. ",
        id: 5
    },
    {
        name: "Operating Systems",
        desc: "Design and implementation of operating systems for large computers. Multiprogramming, "+
        "multiprocessing, time sharing. Resource allocation and scheduling. Communications, "+
        "conversational computing, computer networks. Memory protection, interrupts, segmentation, "+
        "paging, and virtual memories. ",
        id: 6
    }
]

const electives = [
    {
        name: "Artificial Intelligence",
        desc: "Techniques for making computers exhibit intelligent behavior. Topics covered are "+
        "taken from the areas of problem solving, perception, game playing, knowledge representation, "+
        "natural language understanding, programs that learn (adaptive programs), expert systems, "+
        "and programming languages for work in artificial intelligence. ",
        id: 0
    },
    {
        name: "Computer Graphics",
        desc: "Fundamentals of computer graphics programming. Graphics hardware and software standards. "+
        "2D geometric primitives and raster images. 3D object representations. Data structures, "+
        "algorithms, and the graphics pipeline. Graphical user interfaces. Underlying concepts in "+
        "computer graphics systems, including games, animation, modeling, rendering, and paint systems. ",
        id: 1
    },
    {
        name: "Game Programming",
        desc: "Game programming techniques. 2D and 3D games. Data representations of virtual elements. "+
        "Visualizing the 3D game environment. Controlling motion and behaviors. Interaction control. "+
        "Game architectures, including multi-player games and message passing. Managing complexity. "+
        "Teamwork to create a 3D game using a 3D multi-player game engine. Interaction with game "+
        "development professionals regarding state-of-the-art hardware and software technology for "+
        "game creation and adaptation. ",
        id: 2
    },
    {
        name: "Theoretical Computer Science",
        desc: "Overview of theoretical computer science. Formal language theory, computability theory. "+
        "Finite automata, context-free and regular grammars, push-down automata, and Turing machines. "+
        "Other models of computation, including recursive functions. Universal program and unsolvability. ",
        id: 3
    },
    {
        name: "Database Systems",
        desc: "Introduction to database systems. Comparison to file processing systems. Data models. "+
        "Relational, hierarchical, and network systems. Database design. Normal forms. Study of "+
        "several real-world database management systems, with an emphasis on microcomputer "+
        "applications. Database recovery query and transaction processing, concurrency. "+
        "Distributed and object-oriented databases.",
        id: 4
    }
]

function createPrereqs(){
    for(let i = 0; i < prerequisites.length; i++){

        let li = document.createElement('li')
        let courseName = document.createTextNode(prerequisites[i].name)
        console.log(courseName)
        li.appendChild(courseName)

        document.getElementById("prereqs").appendChild(li)
    }
}

let toggler = document.getElementsByClassName("caret");
let i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("open");
    this.classList.toggle("caret-down");
    });
}

createPrereqs()