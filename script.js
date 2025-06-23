// --- ここから診断コンテンツの内容を定義 ---

// 質問リスト（全10問）
const questions = [
  {
      question: "Q1. 新しいプロジェクトが始まる時、あなたが最もワクワクするのは？",
      choices: [
          { text: "誰もやったことのない方法を試せること", type: "P" },
          { text: "成功確率を上げるため、入念に情報を集めること", type: "A" },
          { text: "最高のチームメンバーと協力できること", type: "H" },
          { text: "自分の専門技術が活かせると確信した時", type: "Ar" },
          { text: "プロジェクトの最終的なゴールと全体計画を練ること", type: "S" }
      ]
  },
  {
      question: "Q2. 仕事で困難に直面した時、あなたの最初の一手は？",
      choices: [
          { text: "とにかく行動あるのみ！試行錯誤で突破口を探す", type: "P" },
          { text: "問題の原因は何か、データを徹底的に分析する", type: "A" },
          { text: "信頼できる同僚や上司に相談し、知恵を借りる", type: "H" },
          { text: "自分の知識や技術で解決できないか、過去の経験を振り返る", type: "Ar" },
          { text: "一度立ち止まり、状況を俯瞰して解決までの道筋を再設計する", type: "S" }
      ]
  },
  {
      question: "Q3. あなたが「この仕事、やっててよかった！」と最も感じる瞬間は？",
      choices: [
          { text: "「前例がない」と言われたことを成し遂げた時", type: "P" },
          { text: "複雑なデータから、誰も気づかなかった法則を発見した時", type: "A" },
          { text: "チームメンバーから「あなたのおかげだよ」と感謝された時", type: "H" },
          { text: "自分の作ったものが「完璧だ」と心から思えた時", type: "Ar" },
          { text: "立てた戦略通りに物事が進み、大きな成果に繋がった時", type: "S" }
      ]
  },
  {
      question: "Q4. 理想の職場環境について、最も重視することは？",
      choices: [
          { text: "挑戦を歓迎し、失敗を許容してくれる自由な雰囲気", type: "P" },
          { text: "客観的な事実やデータに基づいて意思決定が行われる環境", type: "A" },
          { text: "お互いを尊重し、助け合う文化が根付いていること", type: "H" },
          { text: "一つの道を極めるための時間とリソースが与えられる環境", type: "Ar" },
          { text: "明確なビジョンと目標が共有され、全員がそこに向かっていること", type: "S" }
      ]
  },
  {
      question: "Q5. 新しいスキルを学ぶとき、あなたはどうアプローチする？",
      choices: [
          { text: "まず実践。作りながら学ぶのが一番早い", type: "P" },
          { text: "体系的にまとめられた書籍や講座で、基礎からしっかり学ぶ", type: "A" },
          { text: "勉強会やコミュニティに参加し、仲間と情報交換しながら学ぶ", type: "H" },
          { text: "その分野の第一人者の作品やコードを徹底的に模倣・研究する", type: "Ar" },
          { text: "最終的に何ができるようになりたいか、目標からの逆算で学習計画を立てる", type: "S" }
      ]
  },
  {
      question: "Q6. あなたが評価されるとしたら、どんな言葉が一番嬉しい？",
      choices: [
          { text: "「君の発想はいつもユニークだね！」", type: "P" },
          { text: "「その分析のおかげで、本質が見えたよ」", type: "A" },
          { text: "「君がいるとチームの雰囲気が良くなるよ」", type: "H" },
          { text: "「このクオリティは、あなたにしか出せない」", type: "Ar" },
          { text: "「君の計画には無駄がない。さすがだ」", type: "S" }
      ]
  },
  {
      question: "Q7. 仕事における「安定」とは、あなたにとって何ですか？",
      choices: [
          { text: "常に新しい挑戦ができ、飽きることがない状態", type: "P" },
          { text: "予測不能な事態が起こらないよう、リスクが管理されている状態", type: "A" },
          { text: "いつでも頼れる仲間がいるという、人間関係の安定", type: "H" },
          { text: "誰にも真似できない専門性が、自分の価値を担保している状態", type: "Ar" },
          { text: "長期的なキャリアパスが明確で、見通しが立っている状態", type: "S" }
      ]
  },
  {
      question: "Q8. 10年後の自分を想像したとき、どんな姿でありたい？",
      choices: [
          { text: "新しい分野の第一人者として、業界をリードしている", type: "P" },
          { text: "深い洞察力で、誰も解決できなかった問題を解き明かしている", type: "A" },
          { text: "多くの人から慕われ、チームや組織の中心にいる", type: "H" },
          { text: "「神業」と呼ばれるほどの技術を身につけた専門家になっている", type: "Ar" },
          { text: "優れたリーダーとして、大きな事業やプロジェクトを成功に導いている", type: "S" }
      ]
  },
  {
      question: "Q9. 休日、友人と旅行の計画を立てるなら、あなたの役割は？",
      choices: [
          { text: "「誰も行ったことないような面白い場所に行こう！」と提案する", type: "P" },
          { text: "予算、時間、交通手段などを比較検討し、最適なプランを割り出す", type: "A" },
          { text: "みんなの希望を聞いて、全員が楽しめるように調整する", type: "H" },
          { text: "旅のしおりや持ち物リストなど、細部にこだわった準備をする", type: "Ar" },
          { text: "旅の目的（食、観光など）を決め、全体のスケジュールを管理する", type: "S" }
      ]
  },
  {
      question: "Q10. あなたが仕事の道具を選ぶとき、最も重視するポイントは？",
      choices: [
          { text: "カスタマイズ性が高く、自分のアイデアをすぐに試せるか", type: "P" },
          { text: "機能が豊富で、あらゆるデータを正確に扱えるか", type: "A" },
          { text: "多くの人が使っていて、情報共有がしやすいか", type: "H" },
          { text: "シンプルだが、一つの機能が極限まで洗練されているか", type: "Ar" },
          { text: "作業全体の効率を最大化してくれるか", type: "S" }
      ]
  }
];

// 診断結果の定義
const results = {
  P: {
      type: "開拓者 (Pioneer)",
      description: "あなたは、未知の領域に果敢に挑戦し、新しい価値を創造することに最もやりがいを感じる『開拓者』タイプです。前例のないことや、変化の激しい環境でこそ、あなたの力は最大限に発揮されます。失敗を恐れない行動力とユニークな発想力で、未来を切り拓く力を持っています。",
      jobs: ["新規事業開発", "プロダクトマネージャー", "スタートアップ起業家", "マーケター", "イベントプランナー"]
  },
  A: {
      type: "分析家 (Analyst)",
      description: "あなたは、データや事実に基づいて物事を深く探求し、複雑な問題を解き明かすことにやりがいを感じる『分析家』タイプです。客観的な視点と論理的な思考力で、物事の本質を見抜く力に長けています。感覚や感情に流されず、確かな根拠を元に最適な答えを導き出します。",
      jobs: ["データサイエンティスト", "Webアナリスト", "経営コンサルタント", "リサーチャー", "品質管理"]
  },
  H: {
      type: "調和人 (Harmonizer)",
      description: "あなたは、チームで協力し、人々をサポートすることで組織全体の成功に貢献することにやりがいを感じる『調和人』タイプです。高い共感能力とコミュニケーション能力で、人と人との潤滑油のような存在になります。あなたがチームにいることで、全体のパフォーマンスは飛躍的に向上するでしょう。",
      jobs: ["人事・採用担当", "カスタマーサクセス", "プロジェクトマネージャー", "広報・PR", "キャリアアドバイザー"]
  },
  Ar: {
      type: "職人 (Artisan)",
      description: "あなたは、自らの専門スキルをとことん磨き上げ、質の高い成果物を追求することにやりがいを感じる『職人』タイプです。強い探究心と集中力を持ち、誰にも真似できないレベルまで技術を高めることができます。あなたの生み出す完璧な仕事は、多くの人々に価値と感動を与えます。",
      jobs: ["エンジニア", "Webデザイナー", "動画編集者", "ライター", "シェフ"]
  },
  S: {
      type: "戦略家 (Strategist)",
      description: "あなたは、全体像を把握し、目標達成のための最適な計画を立て、それを実行することにやりがいを感じる『戦略家』タイプです。広い視野と先を見通す力で、複雑な状況でも最短ルートでゴールへと導きます。組織の羅針盤として、大きなプロジェクトを成功させる力を持っています。",
      jobs: ["経営企画", "事業戦略", "Webディレクター", "セールスマネージャー", "コンサルタント"]
  }
};

// --- ここから下はサイトの動作を制御するコード（変更不要） ---

let currentQuestionIndex = 0;
const scores = { P: 0, A: 0, H: 0, Ar: 0, S: 0 };

const questionTitleElement = document.getElementById('question-title');
const questionTextElement = document.getElementById('question-text');
const choicesElement = document.getElementById('choices');
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionTitleElement.textContent = `質問 ${currentQuestionIndex + 1}/${questions.length}`;
  questionTextElement.textContent = question.question;
  choicesElement.innerHTML = '';
  question.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.className = 'choice-button';
      button.onclick = () => selectChoice(choice.type);
      choicesElement.appendChild(button);
  });
}

function selectChoice(type) {
  scores[type]++;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  questionArea.style.display = 'none';

  let maxScore = 0;
  let resultType = '';
  for (const type in scores) {
      if (scores[type] > maxScore) {
          maxScore = scores[type];
          resultType = type;
      }
  }

  const result = results[resultType];
  document.getElementById('result-type').textContent = `あなたは「${result.type}」です！`;
  document.getElementById('result-description').textContent = result.description;
  
  const jobList = document.getElementById('job-list');
  jobList.innerHTML = '';
  result.jobs.forEach(job => {
      const li = document.createElement('li');
      li.textContent = job;
      jobList.appendChild(li);
  });
  
  resultArea.style.display = 'block';
}

showQuestion();