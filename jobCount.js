let interviewList = [];
let rejectedList = [];
let currentStatus="all-btn"

//

let totalCount = document.getElementById('total')
let interviewCount = document.getElementById('interview')
let rejectedCount = document.getElementById('rejected')

let totalJobs = document.getElementById("total-jobs")

const mainSection = document.querySelector('main')

let filterSection = document.getElementById('add-thriving')

//all buttons
const allButton = document.getElementById('all-btn')
const interviewButton = document.getElementById('interview-btn')
const rejectedButton = document.getElementById('rejected-btn')

//total count jobs
let totalJob=document.getElementById('total-job')



function totalJobsCircular() {
    totalCount.innerText = totalJobs.children.length
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    const total= totalJobs.children.length
    totalJob.innerText=total
     if(currentStatus==='all-btn'){
      totalJob.innerText = totalJobs.children.length +` Jobs `

    }
    else if(currentStatus=="interview-btn"){
        totalJob.innerText=interviewList.length + ` of ${total} Jobs`
        
    }
    else if(currentStatus==='rejected-btn'){
        totalJob.innerText=rejectedList.length + ` of ${total} Jobs`
    }
    const noJobSection=document.getElementById('no-job-section')
    if(currentStatus==="interview-btn" && interviewList.length===0){
        noJobSection.classList.remove('hidden')
    }
    else if(currentStatus==='rejected-btn'&& rejectedList.length===0){
        noJobSection.classList.remove('hidden')
    }
    else if(currentStatus==='all-btn' && totalJobs.children.length===0){
        noJobSection.classList.remove('hidden')
    }
    else{
        noJobSection.classList.add('hidden')
    }
}
totalJobsCircular()
  

function toggling(id) {
    allButton.classList.remove('bg-blue-700', 'text-white')
    interviewButton.classList.remove('bg-blue-700', 'text-white')
    rejectedButton.classList.remove('bg-blue-700', 'text-white')

    allButton.classList.add('bg-gray-200', 'text-black')
    interviewButton.classList.add('bg-gray-200', 'text-black')
    rejectedButton.classList.add('bg-gray-200', 'text-black')

    const select = document.getElementById(id)
    currentStatus=id
    select.classList.remove('bg-gray-200', 'text-black')
    select.classList.add('bg-blue-700', 'text-white')
    if(id=='interview-btn'){
        totalJobs.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderThriving()
        
        
    }
    else if(id=="all-btn"){
        totalJobs.classList.remove('hidden')
        filterSection.classList.add('hidden')
    }
    else if(id=="rejected-btn"){
        totalJobs.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderRejected()
    }
    totalJobsCircular()
}

mainSection.addEventListener('click', function (event) {
    if (event.target.classList.contains("interview-button")) {
        const allParentNode = event.target.parentNode.parentNode
        const titleName = allParentNode.querySelector('.name').innerText
        const jobName = allParentNode.querySelector('.job-name').innerText
        const celeryName = allParentNode.querySelector('.celery').innerText
        const statusName = allParentNode.querySelector('.status').innerText
        const workName = allParentNode.querySelector('.work').innerText
        allParentNode.querySelector('.status').innerText='Interview'

        let cardInfo = {
            titleName,
            jobName,
            celeryName,
            statusName:"Interview",
            workName,
        }
        console.log(currentStatus)
        const jobList = interviewList.find(item => item.titleName === cardInfo.titleName)
        if (!jobList) {
            interviewList.push(cardInfo)
        }
        console.log(rejectedList.length)
        rejectedList = rejectedList.filter(item => item.titleName != cardInfo.titleName)
        console.log(rejectedList.length)
        if(currentStatus=="rejected-btn"){
            renderRejected()
        }
        totalJobsCircular()
        // renderThriving()
    }

    else if (event.target.classList.contains("rejected-button")) {
        const allParentNode = event.target.parentNode.parentNode
        const titleName = allParentNode.querySelector('.name').innerText
        const jobName = allParentNode.querySelector('.job-name').innerText
        const celeryName = allParentNode.querySelector('.celery').innerText
        const statusName = allParentNode.querySelector('.status').innerText
        const workName = allParentNode.querySelector('.work').innerText
        allParentNode.querySelector('.status').innerText='Rejected'

        let cardInfo = {
            titleName,
            jobName,
            celeryName,
            statusName:"Rejected",
            workName,
        }

        const jobList = rejectedList.find(item => item.titleName === cardInfo.titleName)
        if (!jobList) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.titleName != cardInfo.titleName)
        if(currentStatus=="interview-btn"){
            renderThriving()
        }
        totalJobsCircular()
        
    }
    //remove section
    else if(event.target.closest('.remove-btn')){
        const remove=event.target.closest('.remove-btn')
        const removeParent=remove.parentNode.parentNode
        removeParent.remove()
        totalJobsCircular()
    }
})

function renderThriving() {
    filterSection.innerHTML = ``
    if(interviewList.length >0){
        for (let interview of interviewList) {
            let div = document.createElement('div')
            div.className = 'md:flex justify-between mt-5 bg-zinc-100 p-8'
            div.innerHTML = `
                    <div class="space-y-4">
                        <div class="">
                            <p class="name text-[#002C5C] font-semibold text-4">${interview.titleName}</p>
                            <p class="job-name text-neutral/50">React Native Developer</p>
                        </div>
                        <p class="celery text-neutral/50">Remote
                            •
                            Full-time
                            •
                            $130,000 - $175,000</p>
    
                            <p class="status btn bg-base-300 border-none w-[113px]">${interview.statusName}</p>
                            <p class="work text-neutral/50 mt-2">Build cross-platform mobile applications using React Native.
                                Work on products used by millions of
                                users worldwide.</p>
    
                        <div class="flex gap-4">
                            <button class="interview-button btn btn-outline btn-success">interview</button>
                            <button class="rejected-button btn btn-outline btn-error">Rejected</button>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
            `
            filterSection.appendChild(div)
        }
    }
}

function renderRejected() {
    filterSection.innerHTML = ``
  if(rejectedList.length >0){
      for (let rejected of rejectedList) {
        let div = document.createElement('div')
        div.className = 'md:flex justify-between mt-5 bg-zinc-100 p-8'
        div.innerHTML = `
                <div class="space-y-4">
                    <div class="">
                        <p class="name text-[#002C5C] font-semibold text-4">${rejected.titleName}</p>
                        <p class="job-name text-neutral/50">React Native Developer</p>
                    </div>
                    <p class="celery text-neutral/50">Remote
                        •
                        Full-time
                        •
                        $130,000 - $175,000</p>

                        <p class="status btn bg-base-300 border-none w-[113px]">${rejected.statusName}</p>
                        <p class="work text-neutral/50 mt-2">Build cross-platform mobile applications using React Native.
                            Work on products used by millions of
                            users worldwide.</p>

                    <div class="flex gap-4">
                        <button class="interview-button btn btn-outline btn-success">interview</button>
                        <button class="rejected-button btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>
                <div class="mt-4">
                    <button class="btn"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
  }
}