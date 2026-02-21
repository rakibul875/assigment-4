let totalCount=document.getElementById('total')
let interviewCount=document.getElementById('interview')
let rejectedCount=document.getElementById('rejected')

let totalJobs=document.getElementById("total-jobs")
console.log(totalJobs.children.length)
function totalJobsCircular(){
    totalCount.innerText=totalJobs.children.length
}
totalJobsCircular()