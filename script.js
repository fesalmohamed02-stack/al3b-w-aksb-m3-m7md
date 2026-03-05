let playerName=""
let score=0
let current=0
let sentences=[]
let total=20

let allSentences = {
easy:[
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
],
medium:[
{sentence:"ظل الطالب يذاكر",word:"الطالب",answer:"اسم ظل مرفوع"},
{sentence:"مازال المطر غزيراً",word:"غزيراً",answer:"خبر مازال منصوب"},
{sentence:"بات الطفل سعيداً",word:"سعيداً",answer:"خبر بات منصوب"},
{sentence:"إن النجاح قريب",word:"النجاح",answer:"اسم إن منصوب"},
{sentence:"إن الطالب مجتهد",word:"مجتهد",answer:"خبر إن مرفوع"},
{sentence:"رأيت طائراً جميلاً",word:"جميلاً",answer:"نعت منصوب"},
{sentence:"اشتريت كتاباً جديداً",word:"جديداً",answer:"نعت منصوب"},
{sentence:"جاء الرجل مسرعاً",word:"مسرعاً",answer:"حال منصوب"},
{sentence:"امتلأ الكوب ماءً",word:"ماءً",answer:"تمييز منصوب"},
{sentence:"اشتعل الرأس شيباً",word:"شيباً",answer:"تمييز منصوب"},
{sentence:"ضربت اللص ضرباً شديداً",word:"ضرباً",answer:"مفعول مطلق"},
{sentence:"سافرت سفراً طويلاً",word:"سفراً",answer:"مفعول مطلق"},
{sentence:"وقفت أمام المدرسة",word:"أمام",answer:"ظرف مكان"},
{sentence:"جلست تحت الشجرة",word:"تحت",answer:"ظرف مكان"},
{sentence:"العلم نور يهدي الناس",word:"نور",answer:"خبر"},
{sentence:"الصدق منجاة",word:"الصدق",answer:"مبتدأ"},
{sentence:"كان البحر هادئاً",word:"هادئاً",answer:"خبر كان"},
{sentence:"نجح الطالب المجتهد في الامتحان",word:"المجتهد",answer:"نعت مرفوع"},
{sentence:"حضر المعلم إلى الفصل مبكراً",word:"مبكراً",answer:"حال منصوب"},
{sentence:"جلس التلميذ مسترخياً",word:"مسترخياً",answer:"حال منصوب"}
],
hard:[
{sentence:"أحب الوطن حباً صادقاً",word:"حباً",answer:"مفعول مطلق"},
{sentence:"عاد المسافر سالماً",word:"سالماً",answer:"حال"},
{sentence:"رأيت الطائر يحلق في السماء",word:"الطائر",answer:"مفعول به"},
{sentence:"جلس الرجل يتأمل البحر",word:"الرجل",answer:"مبتدأ مرفوع"},
{sentence:"اشتد الحر في الصيف",word:"الحر",answer:"مبتدأ مرفوع"},
{sentence:"كان الجو غائماً",word:"غائماً",answer:"خبر كان منصوب"},
{sentence:"جلس الطفل يلعب",word:"الطفل",answer:"مبتدأ مرفوع"},
{sentence:"عادت المعلمة من المدرسة",word:"المعلمة",answer:"مبتدأ مرفوع"},
{sentence:"نجح الطالب في الامتحان",word:"الطالب",answer:"مبتدأ مرفوع"},
{sentence:"حضر المدير الاجتماع",word:"المدير",answer:"مبتدأ مرفوع"},
{sentence:"سافرت العائلة إلى المدينة",word:"العائلة",answer:"مبتدأ مرفوع"},
{sentence:"جلس الأب مع الأطفال",word:"الأب",answer:"مبتدأ مرفوع"},
{sentence:"بدأ الطالب المراجعة",word:"الطالب",answer:"مبتدأ مرفوع"},
{sentence:"انتهى الدرس",word:"الدرس",answer:"مبتدأ مرفوع"},
{sentence:"كتب الكاتب القصة",word:"الكاتب",answer:"مبتدأ مرفوع"},
{sentence:"سافر المسافر إلى الخارج",word:"المسافر",answer:"مبتدأ مرفوع"},
{sentence:"جلس الطالبة في الصف",word:"الطالبة",answer:"مبتدأ مرفوع"},
{sentence:"قام المعلم بالشرح",word:"المعلم",answer:"مبتدأ مرفوع"},
{sentence:"أكل الطفل الطعام",word:"الطفل",answer:"مبتدأ مرفوع"},
{sentence:"ركضت الفتاة في الملعب",word:"الفتاة",answer:"مبتدأ مرفوع"}
]
}

// باقي الكود كما كتبته قبل: startGame(), loadSentence(), checkAnswer(), showFull(), saveScore(), loadLeaderboard(), endGame(), timer...
