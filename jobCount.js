let interviewList=[];
let rejectedList=[];

let totalCount=document.getElementById('total')
let interviewCount=document.getElementById('interview')
let rejectedCount=document.getElementById('rejected')

let totalJobs=document.getElementById("total-jobs")

const mainSection=document.querySelector('main')
console.log(mainSection)


function totalJobsCircular(){
    totalCount.innerText=totalJobs.children.length
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
totalJobsCircular()

//toggling section

const allButton=document.getElementById('all-btn')
const interviewButton=document.getElementById('interview-btn')
const rejectedButton=document.getElementById('rejected-btn')
function toggling(id){
    allButton.classList.remove('bg-blue-700','text-white')
    interviewButton.classList.remove('bg-blue-700','text-white')
    rejectedButton.classList.remove('bg-blue-700','text-white')
    
    allButton.classList.add('bg-gray-200','text-black')
    interviewButton.classList.add('bg-gray-200','text-black')
    rejectedButton.classList.add('bg-gray-200','text-black')

    const select=document.getElementById(id)
    select.classList.remove('bg-gray-200','text-black')
    select.classList.add('bg-blue-700','text-white')
}
