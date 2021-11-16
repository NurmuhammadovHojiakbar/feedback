const Data = {
    feedbackdata: [
        {
            id: 1,
            muallif: "Fazliddin",
            imageColor: "#e5890a",
            title: "React components bo'yicha savol",
            body: "Reactda 2 xil component turlari bor, lekin qaysi birini ishlatishni maslahat berasizlar, functionmi yoki class?",
            type: "React",
            display: "block",
            likes: 6,
            comments: [
                {
                    id: 1.1,
                    muallif: "Hojiakbar",
                    imageColor: "#c36a2d",
                    body: "Function based yaxshiroq variant. Hooklar bilan ishiz ancha tez bitadi va qulay ham:)",
                    replies: [
                        {
                            id: 1.111,
                            muallif: "Khanzo",
                            imageColor: "#3d0000",
                            body: "++",
                        },
                        {
                            id: 1.112,
                            muallif: "Hojiakbar",
                            imageColor: "#c36a2d",
                            body: "Albatta hooklar yaxshi tanlovda!",
                        }
                    ],
                },
                {
                    id: 1.2,
                    muallif: "Otabek O'ktamov",
                    imageColor: "#39a388",
                    body: "Ikkisini ham o'rganing. shunda yaxshisini o'zingiz topib olasiz!",
                    replies: [],
                },
            ]
        },
        {
            id: 2,
            muallif: "Khanzo",
            imageColor: "#3d0000",
            title: "PHP haqida...",
            body: `Barchamizga ma'lumki ba'zi bir dasturchilar PHP ni yomon til deb o'ylashadi (bu haqida meme lar ham to'lib yotibdi), lekin rostdan ham shundaymikan degan savol dasturlashga endi kirib kelayotgan ukalarimiz yoki akalarimizni o'ylantirib qo'yishi mumkin.
            
            Nega PHP ni ba'zilar yomon ko'radi? Men shu savolga iloji boricha qisqaroq va to'g'ri javob berishga harakat qilaman.
            PHP ni yomon ko'rilishining eng asosiy sababi ba'zi bir dasturchilar... Ha dasturchilar. Nega? Chunki PHP dunyo yuzini ko'rganda juda mashhur bo'lgan. O'sha paytlarda PHP da juda ko'plab saytlar qilingan. Sababi PHP (Personal Home Page, hozirda Hypertext Preprocessor) oddiy skriptli til edi va uni o'rganish juda ham oson bo'lgan. Vaqtlar o'tib PHP ga yangi feature lar qo'shilgan, PHP ni qo'llab-quvvatlash yaxshi bo'lgan va tez-tez uning versiyasi yangilanib turgan. Siz agar PHP ni o'rganmoqchi bo'lsangiz marhamat forumlardan so'rab o'rganishingiz mumkin bo'lgan. Til yangilanishiga qaramasdan uning oddiyligi yo'qolmagan va o'rganishga ham oson bo'lgan. Lekin aynan shu narsa uni obro'yining to'kilishiga sabab bo'lgan deb o'ylayman. Xullas, o'sha paytdagi PHP dasturchilarining 90% i nima yozayotganini tushunishmagan yoki keraksiz kodlarni ham qo'shib ketgan, natijada kodni sifati ham shunga qarab pasayib ketavergan... 
            
            Community ning obro'si to'kilgan, lekin hozir bunday emas. Ayni vaqtda dasturchilarning fikrlashi o'zgargan, hozirda 90% dasturchilar clean-code yozishga intiladilar. Yangi freamwork lar - (Laravel Symfony yii2 va boshqalar) dasturchilar uchun tayyor paketlarni beradi, lekin yuqorida aytilgan gaplar PHP tarixidagi qora dog' bo'lib qoldi.
            
            FOR HATERS
            
            PHP ni yomon til deydiganlarga: 
            - Nima uchun yomon til? Kamchiligi nimada? 
            deb so'rasangiz tayinlik javob ola olmaysiz. Ba'zi bir javoblarni eshitib kulgingiz keladi 😂.
            Sizga beriladigan javoblarni ichida eng mashhurlari;
            1. PHP hozir o'z o'rnini yo'qotgan va yana bir nimalar... JS ni qara TOPda turibdi, ee nima qilasan PHP ni?
            Trendga qarab ish qilish dasturchining xatosi bo'lishi mumkin. Maslahatim dasturlashni hech qachon TOP va trendga qarab o'rganmang.
            2. Eee, sintaksisni qara!
            Shuncha narsaga qaramasdan PHP hali hanuz WEB olamida o'zining o'rniga ega.
            Do'stlar hech qachon dasturlash tillarini bir birga qarab solishtirmaylik.
            
            Yomon til bo'lmaydi, yomon dasturchilar bo'ladi...`,
            type: "PHP",
            display: "block",
            likes: 10,
            comments: [
                {
                    id: 2.1,
                    muallif: "Hojiakbar",
                    imageColor: "#c36a2d",
                    body: "Aka PHP yaxshi tilu lekin zamon NodeJS nikida:)",
                    replies: [],
                },
            ]
        },
        {
            id:3,
            muallif: "Rustamov Doston",
            imageColor: "#77d970",
            title: "Qanday bilsa bo'lardi",
            body: "websiteda qaysi texnologiyalar ishlatilganini qanday bilsa bo'ladi? Website bor edi a adashmasam shunday? BIladiganlar bo'lsa aytib yuboringlar",
            type: "Feature",
            display: "block",
            likes: 2,
            comments: [
                {
                    id: 3.1,
                    muallif: "Iqboljon",
                    imageColor: "#c36a2d",
                    body: "Google aka nima deyapti aka",
                    replies: [],
                },
                {
                    id: 3.2,
                    muallif: "Iqboljon",
                    imageColor: "#c36a2d",
                    body: "Futbollni ko'ryapsizmi? zo'r bo'lyaptiyu",
                    replies: [],
                },
            ]
        },
    ]
}

export default Data;