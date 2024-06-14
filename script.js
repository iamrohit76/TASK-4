document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobsContainer = document.getElementById('jobs-container');

    const predefinedJobs = [
        {
            title: "Software Engineer",
            company: "Tech Solutions",
            location: "San Francisco, CA",
            description: "Develop and maintain web applications using modern frameworks and tools. Requirements: Experience with JavaScript, HTML, CSS, and React."
        },
        {
            title: "DevOps Engineer",
            company: "Cloud Innovations",
            location: "New York, NY",
            description: "Implement and manage CI/CD pipelines, ensure smooth deployment processes. Requirements: Experience with AWS, Docker, and Kubernetes."
        },
        {
            title: "Data Scientist",
            company: "Data Insights",
            location: "Austin, TX",
            description: "Analyze large datasets to extract meaningful insights and improve business decisions. Requirements: Proficiency in Python, R, and SQL."
        },
        {
            title: "Frontend Developer",
            company: "Creative Coders",
            location: "Remote",
            description: "Build interactive and responsive user interfaces using HTML, CSS, and JavaScript. Requirements: Experience with React or Vue.js."
        },
        {
            title: "Backend Developer",
            company: "Secure Servers",
            location: "Seattle, WA",
            description: "Develop server-side logic, integrate with databases, and ensure high performance and responsiveness. Requirements: Experience with Node.js, Express, and MongoDB."
        }
    ];

    predefinedJobs.forEach(job => addJob(job.title, job.company, job.location, job.description));

    jobForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        addJob(title, company, location, description);

        jobForm.reset();
    });

    function addJob(title, company, location, description) {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';

        const jobTitle = document.createElement('h3');
        jobTitle.innerText = title;
        jobDiv.appendChild(jobTitle);

        const jobCompany = document.createElement('p');
        jobCompany.innerHTML = `<span>Company:</span> ${company}`;
        jobDiv.appendChild(jobCompany);

        const jobLocation = document.createElement('p');
        jobLocation.innerHTML = `<span>Location:</span> ${location}`;
        jobDiv.appendChild(jobLocation);

        const jobDescription = document.createElement('p');
        jobDescription.innerHTML = `<span>Description:</span> ${description}`;
        jobDiv.appendChild(jobDescription);

        jobsContainer.appendChild(jobDiv);
    }
});
