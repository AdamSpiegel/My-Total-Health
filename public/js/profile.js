// not sure how profile.js fits in with other parts?
// what exactly does profile.js do?
// below is modified from 28
// do we need this page or is it redundant?
const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name-placeholder').value.trim();
    const needed_funding = document.querySelector('#project-funding-placeholder').value.trim();
    const description = document.querySelector('#project-desc-placeholder').value.trim();
    // need help going thru lines 12 and 15
    if (name && needed_funding && description) {
        const response = await fetch(`/api/projects-placeholder`, {
            method: 'POST',
            body: JSON.stringify({ name, needed_funding, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
