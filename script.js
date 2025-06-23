document.addEventListener('DOMContentLoaded', () => {

    // --- 診断コンテンツの定義 ---

    const questions = [
        // O: 開放性
        { text: "新しいアイデアや物事の仕組みについて考えるのが好きだ。", type: "O" },
        { text: "芸術や美しいものに触れると、深く感動することがある。", type: "O" },
        { text: "抽象的な概念や哲学的な議論に興味がある。", type: "O" },
        { text: "決まりきったやり方よりも、自分なりの独創的な方法を試したい。", type: "O" },
        { text: "幅広い分野の知識を学ぶことに喜びを感じる。", type: "O" },
        { text: "想像力豊かで、空想にふけることがよくある。", type: "O" },
        // C: 誠実性
        { text: "やるべきことは、すぐにとりかかる方だ。", type: "C" },
        { text: "自分の持ち物や情報は、いつも整理整頓されている。", type: "C" },
        { text: "一度決めた目標は、困難があっても最後までやり遂げる。", type: "C" },
        { text: "細かい部分まで注意を払い、丁寧に仕事を進めるのが得意だ。", type: "C" },
        { text: "自分の義務や約束は、必ず守る。", type: "C" },
        { text: "衝動的に行動することは少なく、計画を立ててから動く方だ。", type: "C" },
        // E: 外向性
        { text: "人と話していると、エネルギーが湧いてくるのを感じる。", type: "E" },
        { text: "大勢の人が集まる賑やかな場所が好きだ。", type: "E" },
        { text: "自分から積極的に話しかけ、会話の中心になることが多い。", type: "E" },
        { text: "一人でいるよりも、誰かと一緒にいることを好む。", type: "E" },
        { text: "初対面の人とも、すぐに打ち解けることができる。", type: "E" },
        { text: "周囲からは「明るい」「活発だ」とよく言われる。", type: "E" },
        // A: 協調性
        { text: "人の役に立つことに、大きな喜びを感じる。", type: "A" },
        { text: "他人の感情を敏感に察知し、共感することが得意だ。", type: "A" },
        { text: "自分の意見を主張するより、全体の調和を優先することが多い。", type: "A" },
        { text: "人を信じやすく、他人の善意を疑うことはあまりない。", type: "A" },
        { text: "競争するよりも、協力して何かを成し遂げる方が好きだ。", type: "A" },
        { text: "他人に対して、親切で思いやりのある態度を心がけている。", type: "A" },
        // N: 神経症的傾向 (逆転項目)
        { text: "ささいなことでも、すぐに不安になったり心配したりする。", type: "N", reverse: true },
        { text: "ストレスを感じると、気分が落ち込みやすい。", type: "N", reverse: true },
        { text: "感情の起伏が激しい方だと思う。", type: "N", reverse: true },
        { text: "周囲からの批判や評価が、とても気になる。", type: "N", reverse: true },
        { text: "将来のことを考えると、悲観的になりがちだ。", type: "N", reverse: true },
        { text: "プレッシャーのかかる状況では、焦ってしまうことが多い。", type: "N", reverse: true }
    ];

    const results = {
        "C_O": { title: "革新のアーキテクト", description: "独創的なアイデアを、具体的な計画に落とし込み、粘り強く実現する力を持つ未来の設計者。知的好奇心と責任感を両立させており、誰も見たことのない新しい価値を社会に生み出します。", jobs: ["新規事業開発", "プロダクトマネージャー", "建築家", "研究開発職", "アートディレクター"] },
        "E_O": { title: "情熱のカタリスト", description: "人々を巻き込みながら、新しい挑戦へと導く情熱的な変革者。あなたの持つエネルギーと斬新な視点は、組織やチームに化学反応（カタリスト）を起こし、停滞した空気を打破します。", jobs: ["マーケター", "イベントプランナー", "広報・PR", "スタートアップ起業家", "コンサルタント"] },
        "A_O": { title: "創造のサポーター", description: "豊かな発想力と他者への配慮を兼ね備え、クリエイティブなチームを支える潤滑油のような存在。新しいアイデアを、誰もが納得する形で優しく浸透させることができます。", jobs: ["Webデザイナー", "企画・編集", "UXリサーチャー", "ワークショップデザイナー", "広報"] },
        "N_O": { title: "探求のストラテジスト", description: "広い視野と冷静な分析力で、未来の可能性を探求する戦略家。知的好奇心が旺盛でありながら、感情的にならずに物事の本質を見抜くため、複雑な問題解決や長期的な計画立案で力を発揮します。", jobs: ["経営企画", "コンサルタント", "アナリスト", "研究者", "投資家"] },
        "C_E": { title: "実行のプロモーター", description: "目標達成への強い意志と、人々を動かす推進力を兼ね備えた実行者。立てた計画を、周囲を巻き込みながらエネルギッシュに実現していく力があります。", jobs: ["セールスマネージャー", "Webディレクター", "イベントディレクター", "プロデューサー", "現場監督"] },
        "A_C": { title: "信頼のオーガナイザー", description: "チームのために着実に業務を遂行し、周囲からの厚い信頼を得る組織の要。真面目さと優しさを兼ね備え、あらゆるプロジェクトを円滑に進めるための土台を築きます。", jobs: ["プロジェクトマネージャー", "人事・総務", "経理", "秘書", "公務員"] },
        "C_N": { title: "不動のスペシャリスト", description: "プレッシャーに動じず、高い集中力で専門性を極める冷静沈着な専門家。感情に左右されず、常に安定したパフォーマンスを発揮するため、精密さや正確性が求められる分野で輝きます。", jobs: ["エンジニア", "データアナリスト", "経理・財務", "法務", "医師"] },
        "A_E": { title: "共感のコミュニケーター", description: "抜群の共感力と社交性で、人と人、組織と顧客を繋ぐ天性のコミュニケーター。あなたの存在は、チームの結束を高め、顧客との良好な関係を築く上で欠かせません。", jobs: ["カスタマーサクセス", "キャリアアドバイザー", "営業", "接客・販売", "看護師"] },
        "E_N": { title: "躍動のリーダー", description: "精神的なタフさとエネルギッシュな行動力で、チームを牽引する生まれながらのリーダー。逆境でも前向きさを失わず、明確なビジョンで人々をまとめ上げ、目標達成へと導きます。", jobs: ["営業マネージャー", "チームリーダー", "起業家", "政治家", "プロデューサー"] },
        "A_N": { title: "慈愛のメンター", description: "穏やかで安定した精神を持ち、人々の成長を辛抱強く支える指導者。あなたの包容力と優しさは、周囲に安心感を与え、人が育つための最適な環境を作り出します。", jobs: ["教育・研修担当", "カウンセラー", "介護職", "人事（労務）", "NPO職員"] },
    };

    // --- ここから下はサイトの動作を制御するコード ---

    let currentQuestionIndex = 0;
    const scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const startBtn = document.getElementById('start-btn');
    const retryBtn = document.getElementById('retry-btn');
    
    const questionElement = document.getElementById('question');
    const scaleButtons = document.querySelectorAll('.scale-btn');
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    startBtn.addEventListener('click', startQuiz);
    retryBtn.addEventListener('click', retryQuiz);

    scaleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            scaleButtons.forEach(btn => btn.classList.remove('selected'));
            e.target.classList.add('selected');
            
            setTimeout(() => {
                const value = parseInt(e.target.dataset.value);
                selectAnswer(value);
            }, 300);
        });
    });

    function startQuiz() {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        currentQuestionIndex = 0;
        for(let key in scores) scores[key] = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            questionElement.textContent = question.text;
            
            const progress = ((currentQuestionIndex) / questions.length) * 100;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

            scaleButtons.forEach(btn => btn.classList.remove('selected'));
        }
    }

    function selectAnswer(value) {
        const question = questions[currentQuestionIndex];
        let score = value;
        if (question.reverse) {
            score = 6 - value;
        }
        scores[question.type] += score;
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');

        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        
        const primaryFactor = sortedScores[0][0];
        const secondaryFactor = sortedScores[1][0];

        const resultKey = [primaryFactor, secondaryFactor].sort().join('_');
        
        const result = results[resultKey] || results["A_C"];

        document.getElementById('result-type-title').textContent = result.title;
        document.getElementById('result-description').textContent = result.description;
        
        const jobListElement = document.getElementById('job-list');
        jobListElement.innerHTML = '';
        result.jobs.forEach(job => {
            const li = document.createElement('li');
            li.textContent = job;
            jobListElement.appendChild(li);
        });
    }

    function retryQuiz() {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }
});