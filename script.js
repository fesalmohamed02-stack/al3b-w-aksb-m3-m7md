let playerName=""
let score=0
let current=0
let sentences=[]
let total=20

let allSentences = {
easy:[ /* ضع هنا 20 جملة سهلة */ ],
medium:[ /* ضع هنا 20 جملة متوسطة */ ],
hard:[ /* ضع هنا 20 جملة صعبة */ ]
}

// مثال على إضافة جملة:
allSentences.easy = [
{sentence:"كان الطالب مجتهداً",word:"مجتهداً",answer:"خبر كان منصوب"},
{sentence:"أصبح الجو معتدلاً",word:"معتدلاً",answer:"خبر أصبح منصوب"},
{sentence:"إن العلم نور",word:"العلم",answer:"اسم إن منصوب"},
{sentence:"نجح الطالب المجتهد",word:"المجتهد",answer:"نعت مرفوع"},
{sentence:"رأيت الطالب نشيطاً",word:"نشيطاً",answer:"حال منصوب"},
{sentence:"ازداد الطالب علماً",word:"علماً",answer:"تمييز منصوب"},
{sentence:"جاء صديقك خالد",word:"خالد",answer:"بدل مرفوع"},
{sentence:"جلس الطالب أمام المعلم",word:"أمام",answer:"ظرف مكان"},
{sentence:"قرأ محمد الكتاب",word:"الكتاب",answer:"مفعول به منصوب"},
{sentence:"حضر المعلم مبكراً",word:"مبكراً",answer:"حال منصوب"},
{sentence:"العلم مفيد",word:"مفيد",answer:"خبر مرفوع"},
{sentence:"الطالب نشيط",word:"الطالب",answer:"مبتدأ مرفوع"},
{sentence:"كان الجو بارداً",word:"بارداً",answer:"خبر كان منصوب"},
{sentence:"صار الليل هادئاً",word:"هادئاً",answer:"خبر صار منصوب"},
{sentence:"ليس الكذب محموداً",word:"محموداً",answer:"خبر ليس منصوب"},
{sentence:"سافرت صباحاً",word:"صباحاً",answer:"ظرف زمان"},
{sentence:"عدت مساءً",word:"مساءً",answer:"ظرف زمان"},
{sentence:"جلس الطفل باكياً",word:"باكياً",answer:"حال منصوب"},
{sentence:"نجح الطالبان المجتهدان",word:"المجتهدان",answer:"نعت مرفوع"},
{sentence:"قرأ التلميذ الدرس",word:"الدرس",answer:"مفعول به"}
]

function startGame(){
  playerName = document.getElementById("player").value.trim()
  let difficulty = document.getElementById("difficulty").value
  if(playerName===""){alert("❌ اكتب اسمك");return}
  if(difficulty===""){alert("❌ اختر المستوى");return}
  sentences = allSentences[difficulty]
  current=0
  score=0
  document.querySelector(".start-box").style.display="none"
  document.querySelector(".game-box").style.display="block"
  loadSentence()
  loadLeaderboard()
}

function loadSentence(){
  let s = sentences[current]
  document.getElementById("sentence").innerHTML = s.sentence.replace(s.word, "<u>"+s.word+"</u>")
  document.getElementById("full").innerHTML=""
  document.getElementById("progress").innerText = "جملة " + (current+1) + " من " + total
  document.getElementById("feedback").innerText=""
}

function checkAnswer(){
  let user = document.getElementById("answer").value
  let correctSound = document.getElementById("correct-sound")
  let wrongSound = document.getElementById("wrong-sound")
  if(user.includes(sentences[current].answer)){
    document.getElementById("feedback").innerText="✅ أنا كأبو فيصل فخور بيك 👏"
    correctSound.play()
    score++
  }else{
    document.getElementById("feedback").innerText="⚠️ ركز يا بطل! 😅"
    wrongSound.play()
  }
  current++
  if(current<total){
    loadSentence()
  }else{
    endGame()
  }
  document.getElementById("answer").value=""
}

function showFull(){
  let full = sentences[current].full || [sentences[current].answer]
  document.getElementById("full").innerHTML = full.join("<br>")
}

function saveScore(){
  let data = JSON.parse(localStorage.getItem("scores"))||[]
  data.push({name:playerName,score:score})
  data.sort((a,b)=>b.score-a.score)
  localStorage.setItem("scores",JSON.stringify(data))
}

function loadLeaderboard(){
  let data = JSON.parse(localStorage.getItem("scores"))||[]
  let html = ""
  for(let i=0;i<data.length;i++){
    html += data[i].name+" : "+data[i].score+"<br>"
  }
  document.getElementById("leaderboard").innerHTML = html
}

function endGame(){
  document.getElementById("sentence").innerText="انتهى الاختبار - نتيجتك: "+score
  document.getElementById("answer").style.display="none"
  saveScore()
  loadLeaderboard()
}

let time = 300
setInterval(function(){
  if(document.querySelector(".game-box").style.display=="block"){
    time--
    let m=Math.floor(time/60)
    let s=time%60
    document.getElementById("timer").innerText=m + ":" + (s<10?"0"+s:s)
    if(time<=0){
      endGame()
      alert("⏰ انتهى الوقت!")
    }
  }
},1000)
