const elemProjects = document.getElementById('project__content')

const createImage = (projectImage) => {
                const elemPicture = document.createElement('picture')
        const elemImg = document.createElement('img')

        elemImg.setAttribute('src', projectImage)

        elemPicture.appendChild(elemImg)

        return elemPicture
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = projectName

    return elemStrong
}

const createTags = (projectTags) => {
    const elemTagsContainer = document.createElement('div')
        projectTags.forEach(tag => {
            const elemTags = document.createElement('span')
            elemTags.innerText = tag

            elemTagsContainer.appendChild(elemTags)
        })

        return elemTagsContainer
}

const createProject = (project, index) => {
    const elemProject = document.createElement('a')

        elemProject.setAttribute('href', project.link)
        elemProject.setAttribute('target', '_blank')

        elemProject.setAttribute('data-aos', 'zoom-in-up')
        elemProject.setAttribute('data-aos-duration', '800' )
        elemProject.setAttribute('data-aos-easing', 'ease-in-out')
        elemProject.setAttribute('data-aos-offset', '-100')
        elemProject.setAttribute('data-aos-delay', 300 * (index + 1))
        
        elemProject.classList.add('project')


        
        // add imagem de capa no projeto
        elemProject.appendChild(createImage(project.image))

        //add nome do projeto no projeto
        elemProject.appendChild(createStrong(project.name))

        //add tags no projeto
        elemProject.appendChild(createTags(project.tags))

        return elemProject

}

const loadProjects = (projects) => {
    projects.forEach((project, index) => {
        elemProjects.appendChild(createProject(project, index))
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)