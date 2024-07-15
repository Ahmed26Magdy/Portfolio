document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            link: "#"
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            link: "#"
        }
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
