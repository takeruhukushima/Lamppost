import React, { createContext, useContext, ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  content: string; // 詳しい説明を追加する新しいプロパティ
  progression: '進行中' | 'deploy済' | '構想中';
  progress: {
    title: string;
    date: string;
    content: string;
  }[];
  appUrl?: string;
  githubUrl?: string;
}

interface ProjectContextType {
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const projects: Project[] = [
    // {
    //   id: '',
    //   title: '',
    //   description: '',
    //   content: '',
    //   progression: '構想中',
    //   progress: [
    //     {
    //       title: 'Initial Deploy',
    //       date: '2024--',
    //       content: ''
    //     }
    //   ],
    //   appUrl: '',
    //   githubUrl: ''
    // },

    {
      id: '23',
      title: 'Ludi',
      description: 'グラフィクス関連でのLog残します',
      content: '別にアーティストになるつもりなんてないんだからねっ',
      progression: 'deploy済',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-01-19',
          content: '急いで作ったのだけど、一応のデプロイ。'
        }
      ],
      appUrl: '',
      githubUrl: ''
    },
    {
      id: '22',
      title: 'Nomadocs',
      description: 'Docsまとめてます。',
      content: 'きのみきのままちんどうちゅう',
      progression: 'deploy済',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2025-01-17',
          content: '不完全だけど、一応のデプロイ'
        }
      ],
      appUrl: 'https://nomadocs.vercel.app/',
      githubUrl: 'https://github.com/takeruhukushima/Nomadocs.git'
    },



{
      id: '21',
      title: 'NEOマクマリー',
      description: 'そろそろ量子力学優位の教育になったほうがいんじゃない？',
      content: '化学者たちがいまだに、「混成」とか「昇華」とか言ってるのは個人的にどうかと思うし、ボーアの原子modelを歴史的古典ではなく、生ける知識として教えてるのは完全に間違っていると思うのですがいかがでしょうか。これは明確にある先生を想定していいますが、「電子は粒子と波の二重性を持つから」と平気で言ってるのまじでやばいです。それ嘘です。普通に。「粒子なんだけど小さいがゆえに運動が特殊で、古典的な予測ができず、その軌跡の確率分布が波になるので波の干渉等の性質を”道具として用いて”解釈できる」が正しいです。僕の理解ですが。そういうのを指摘されても批判を受け入れる体制にないし、そういう教員の方が全国に跋扈してるんだと考えると少し怖くもあるのでそろそろ化学教育にテコ入れが入ってもいいのではと考えていたりします。こういう事言うと、難しいからあとに教えてんだよ、とご指摘があるかもしれませんが、違います。難しいものを正しくかつ簡単に写像する労力を払ってくれる人がまだ現れてないだけです。難しいと感じているのはあなた達の理解が浅いということを暗に示しています。つまり、怠惰なんじゃないですか？教育者として。現に学校では大学レベルで後に習う相対性理論を中学生から理解できるように写像している人はいます。シニフィアン連鎖です。写像コストの問題です。教科書を加筆修正して順番変えて歴史的事実をコラムにするだけなので誰かやってほしい。僕が学位と地位を持ったらやる、かもしれないです。こんなこと言ってるのは結構環境問題を本気で考える時化学教育ってめちゃくちゃ大事だからと思うからなのだけど、誰かやってほしい。目立ちたくない。若すぎるもの。',
      progression: '構想中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


{
      id: '20',
      title: 'ゲーム研究',
      description: '設計とデザインに興味があるのでスプラとマリオとスマブラを皮切りにゲーム研究も始めたい',
      content: 'これは、完全に趣味です。',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


{
      id: '19',
      title: '音楽研究',
      description: '音楽って素晴らしい',
      content: 'こんな忙しいし、関わってくれている人もいる中普通に音楽聴くし楽器弾きます。僕にとって結構重要なプロジェクト（趣味）です。',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


    {
      id: '18',
      title: '学業',
      description: 'おやつ、というか趣味に近い。感覚が。',
      content: '僕、意外とお勉強というか学問好きで、かつ、学校って哲学者の千葉雅也氏が仕切りに言っている”偶然性”を獲得するのに効率の良い装置だと思っているので、学費も払っていただいてるし学業と言う名のゲームは結構本気で楽しんでます。あと5,6年はこのプロジェクト（趣味）続けようかなと思ってます。',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },
{
      id: '17',
      title: 'Civil Hack',
      description: 'White Hacker,Civic Hackerに順じて新たにCivil Hackerという概念を定義して活動しています',
      content: '少し思うところと案件があって、既存人類のシステムを僕の思う最適解（たぶん非全体最適）に置換する活動を行っています。うちの街はみんな時間がゆっくりなので（なんていい街なんだろう）結構長い活動になります。いずれは大きなmovementにできるといいな。でもひけらかすようなおせっかいにはなりたくないな。あと若すぎるので目立ちたくないな。(←20241201) ',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-08-24',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


{
      id: '16',
      title: 'LLMの身体言語への写像（仮称）',
      description: 'ロボット研究します',
      content: '目先誰に見せるものでもないし必要ではないのだけど、実験用アームがあって僕ができるのでLLM,VLMを使ったロボットの研究やります。一応学校説明等での興行利用を要件として頂いています。(←20241201)',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


{
      id: '15',
      title: '卒検',
      description: 'LLM主軸にした科学研究（特に材料工学研究）のAutomaitionの研究',
      content: '謎の圧力で実験装置が使えていない現常、溜まるサンプル、ほくそ笑む電気科のA先生、さてどうする卒業研究っ！って感じだったんですけど、LLMを主軸にした研究を進めてほしいと言われました。先生としてもLLMの研究室基盤が欲しい。僕もLLM大好き。需要と供給が綺麗に一致しております。こういう事言うとめんどくさいタイプのプライド高い人は嗤いがちですが、今貴方、Excel頑張って使ってらっしゃる。今貴方、焦ってAIとPythonについて学んでらっしゃる。たぶん数年後焦ってLLM学び始めますよ？たぶんね。うさぎとかめです。このメタファだと僕が早すぎるうさぎなのか、テクノロジーの調整で科学に初め触れられないという意味での亀なのか分かりかねますが、後者の意です。だからめんどくさい社会干渉やめましょう。僕あんまり貴方に興味ないです。貴方は何を成して何を成すご予定なんですか？貴方の魅力はなんですか？こんなことプロジェクトリストに書くべきじゃないのだけど社会的攻勢防壁です。別にあんたの研究室でもないのに数人の後輩のこと比べて”この子は優秀でこの子はだめだな”って思ってぼろぼろ言ってしまわないと気がすまないその精神は老子から教わったんですか？三国志ですか？それって人格者なの？普通に何様だよ。受験と学会のtipsしか口から出ないし。と非人格者の僕は思います。こういう痛烈なこというとたまにつっぷして心的疲弊をしているのを見受けるからその反動と言うかアドラー風に言う復讐なんだろうけど、普通に尊敬してるし結構好きだからめんどくさい社会干渉をやめてほしい。ただ普通に。（←20241201）',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


    {
      id: '14',
      title: '壮大なアプリ（仮称）',
      description: '壮大なアプリ作ろうとしてます。',
      content: 'こんな人生になるとは思っていなかった。（←20241201）',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


    {
      id: '13',
      title: 'jukebox（仮称）',
      description: 'レコードじゃなくてCDを流すただのプレイヤーを箱に収めるだけですけど',
      content: '食堂のおばちゃんに頼まれたので２１世紀版のjukebox作ります。自腹痛いっす学校さんお金頂戴（絶対くれない）。できたら置く許可だけは欲しいな。(←20241201)',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },

{
      id: '12',
      title: 'ピーマンの探傷装置',
      description: '機械科の先生及び学生と協働で中小農家を救う野望の一端を担っています。',
      content: 'ピーマンの傷や病気等を画像処理で判定して機械によって仕分ける装置作ってます。組み込み楽しい。ロボット創れそう。（←20241201）',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-12-01',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


{
      id: '11',
      title: 'Osusume',
      description: '好きなものを保存するツールとか記録するツールってあるけどおすすめするツールって無いなあと',
      content: '好きなものを好きなだけ語らせてください。怒られたら都度、書き換えます。',
      progression: 'deploy済',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2025-01-18',
          content: '不完全ながら、一応のDeploy'
        }
      ],
      appUrl: 'https://osusume-tf.vercel.app/',
      githubUrl: 'https://github.com/takeruhukushima/Osusume'
    },


    {
      id: '10',
      title: 'Lamppost',
      description: '魂の影を照らすのが小説なのだとすると社会の影を照らす人って誰なんでしょうね',
      content: 'なんだか仰々しいことを言っているけど、小さいことからコツコツと、眼の前のことにひたむきにしていくことにした。',
      progression: 'deploy済',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-11-08',
          content: ''
        },
        {
          title: '内容の変更',
          date: '2024-11-08',
          content: ''
        },
      ],
      appUrl: 'https://lamppost.vercel.app/',
      githubUrl: 'https://github.com/takeruhukushima/Lamppost.git'
    },



    {
      id: '9',
      title: 'PoroMet',
      description: '材料表面のSEM画像をOpenCVにより処理をして、細孔径を求めます。Programのみを共有します。アプリとして設計していないのは一般的な研究者の方々は実験データをWeb上に投稿することには抵抗があり、（アプリでの実行に）需要が全くないと思われるからです。従って、ローカルでのcloneと実行を前提に作っています。',
      content: '所属している学校の研究室内で共同進行しているプロジェクトのデータ処理工程を公開します。内容は単にOpenCVを用いたSEMの画像処理によって多孔質材料の細孔径を求めるものです。いまこれPythonに興味がある友人に任せてみてます。来年度3月までには作ってみようかな。(←20241201)',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-10-05', 
          content: 'List追加'
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


    {
      id: '8',
      title: '塾講師や教員ごとの質問箱',
      description: 'UIはChatアプリだけど、データベースは公開されていて、回答の使いまわしができる質問箱アプリ',
      content: '私事ですが、最近接客業のアルバイトで機械化が進んでいないことが原因で所々のcalimをお客様からいただきまして、クビになる可能性が出てきました。そこで、前々から誘われている塾の講師を再開しようと考えていたのですが（昨日の話です）そんな折に、塾講師をしながら生徒の質問を24時間受け付けられ1対1のチャット型UIでかつデータベースが公開されていて、チャット上ではアカウント情報でお互いを認証し合うのだけどもデータベース上では質問だけが残りだれでも閲覧、講師も回答のリンクを使い回せる。そんなアプリを設計しようと考えています。これは多くの人に活用していただけるアプリになるのじゃないかなと。フロントエンドとバックエンドはtypesctiptを用いたNext.jsで、データベースはあえてGithubのレポジトリのissuuesを使うことにします。わざわざデータベースを設計してその公開のためのフロントエンドを作らなくて済むからです。ちょと他のプロジェクトを進めるので開発は遅れると思いますが、いま公開されているサイトは完全にdemoで何も機能していません。',
      progression: '進行中',
      progress: [
        {
          title: 'Demo',
          date: '2024-08-27',
          content: 'Next.jsが始めてだったのでdeployのフローを確かめました'
        }
      ],
      appUrl: 'https://questions-box.vercel.app/',
      githubUrl: 'https://github.com/takeruhukushima/Question-Box'
    },

    {
      id: '7',
      title: '独断と偏見RAG',
      description: '僕が独断と偏見で定めた文章を学習させたRAGを作りたい',
      content: '僕の独断と偏見で集め、多分自分の日々書くBlog的なものも含めたRAGのアプリを作りたい。綺麗事を言うと、自殺者の増えている我が母校の学生が使って、”あ、そんな道や考え方もあるんだ”と思えるものになってほしい。2024/08/25',
      progression: '構想中',
      progress: [
        // {
        //   title: 'Initial Deploy',
        //   date: '2024-08-24',
        //   content: ''
        // }
      ],
      appUrl: '',
      githubUrl: ''
    },
    
    {
      id: '6',
      title: '学内の情報RAG',
      description: '学校行事やその予定など学内の情報のみに答えてくれるRAG',
      content: 'LLMを使ったアプリ開発の練習台というかたたき台に学内情報をスクレイピングしてRAGにしようと思います。実務で活用できるかは、ちょっとわかんない。2024/08/25',
      progression: '構想中',
      progress: [
        // {
        //   title: 'Initial Deploy',
        //   date: '2024-08-24',
        //   content: ''
        // }
      ],
      appUrl: '',
      githubUrl: ''
    },

    {
      id: '5',
      title: 'Graph visu. app of GUI by Python',
      description: 'Excelは触れるんだけどPythonは書けない人向け（かつ自分の時短用）のPythonライクなグラフ可視化アプリ',
      content: 'グラフ可視化の自由度はEcel＜Pythonですが、おそらくProgram非ネイティブが触りやすいのはGUIのExcel＞CUIのPython。この永久に続くトレードオフを解決するためにGUIのフロントエンドを持ちつつバックエンドにPythonのライブラリを用いて自由度と操作性を保ったグラフ可視化アプリが作りたい。一応、意外とグラフ可視化することの多い自分の工学研究の時短用も兼ねています。2024/08/25',
      progression: '構想中',
      progress: [
        // {
        //   title: 'Initial Deploy',
        //   date: '2024-08-24',
        //   content: ''
        // }
      ],
      appUrl: '',
      githubUrl: ''
    },

    {
      id: '4',
      title: 'PDF to Google calender',
      description: '組織から配布されるPDFの予定表をボタン一つでGoogle calenderに書き起こしたい！',
      content: '任意の予定の書かれたPDFファイルからgoogle calenderに予定を入力し、各アカウントのカレンダーにimportするアプリを作ろうと思います。調べてもめぼしいものがなく、Chat GPTに聞いたら「できますよ」と言われたので多分できると思います。2024/08/25',
      progression: '構想中',
      progress: [
        // {
        //   title: 'Initial Deploy',
        //   date: '2024-08-24',
        //   content: ''
        // }
      ],
      appUrl: '',
      githubUrl: ''
    },

    {
      id: '3',
      title: 'XRDのグラフ可視化アプリ',
      description: 'GUIで、XRDのデータから論文に投稿できるレベルのグラフを作成するアプリ2024/08/25',
      content: 'ニッチですがエクセルやPythonでXRDのグラフを可視化するよりもアプリをGUIで作っちゃったほうが効率的に実験と分析ができる気がしたので作ることにしました。matplitlibで作るだけなんでもうプログラムそのものはできていてあとはNodeでアプリ化して公開するだけなんですけど、他のプロジェクトが面白すぎて手が回りません。（これを考えた当初はこうなるとは思っていなかった）来年度卒業なので卒業までには完成させます。(←20241201)',
      progression: '進行中',
      progress: [
        {
          title: 'Pythonによるデモ',
          date: '2024-06-xx',
          content: 'PythonとGoogle colabでシステム構築'
        }
      ],
      appUrl: '',
      githubUrl: ''
    },

    {
      id: '2',
      title: 'Akiyack',
      description: '授業の一環で作ったWebappです。一応、市場投入まで目指して作っています',
      content: 'このプロジェクトは、空き家の登録・管理と活用のためのアプリケーションを作成することを目的としています。はじめはノーコードで全て済ませるつもりでしたが、2週間ほどあーでもないこーでもないとしているうちにいまではReactでこうしてアプリ作成をしています。人生何が起こるかわからないですね。これからもどう進展するかわからないのでこのProjectについては多くの言及は避けることにします。2024/08/25',
      progression: '進行中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-08-24',
          content: 'Supabaseとvercelを使ってデータベースと環境変数を整えつつdeployしました。'
        }
      ],
      appUrl: 'https://akiyack.vercel.app/',
      githubUrl: 'https://github.com/takeruhukushima/Akiyack'
    },
    {
      id: '1',
      title: 'About me and this page',
      description: 'このページとProjectの意向についてはこちらに書いてあります。',
      content: 
      '私は2024年8月24日時点で、材料工学を専攻しているただの高等専門学校の学生、20歳です。少しだけプログラムが理解ります。結構好きです。しかし、というかだからこそ、やはり工学の道を歩もうと考えています。昨今は生成系AIが話題で、僕もかなり助けられており、AIがなければこうしてシンプルなWebpageですらこんな短時間で作れてもいないだろうと内心かなり興奮しています。そんな時代に、私が田舎に住んでいるのも理由の一つなのかもしれませんが、私の周りの多くの事柄が（私から見ればですが）かなり非効率に執り行われているのを見受けます。たしかに、コンピュータサイエンスは拡大を続け、SaaSやBaaSのビジネスはやはり成長し続けていますがその進歩に乗っかろうにも様々な制約、あるいは情報格差で未だに20年前の技術でシステムを運営しなければならない状況にとても歯がゆい思いを感じてきたことが少なからずあります。そんな折、ひょんなこと（具体的に言うとワークショップの授業とある先生との会話）から”そうだ、足りないものがあるなら自分で補えばいいのだ”と思い至りました。そこで、githubやReact、また各種SaaS、BaaSを用いて僭越ながら少しずつですがProjectをDeployしてみることにしました。もちろん、プロの方やご専門の方から見ればProgramもスパゲッティでフロントエンドもおざなりでセキュリティにも危ういところがあり、とてもお見苦しい限りであると思いますが、日々勉強を重ね改善に励んていきたい所存です。あまり偉そうなことは言えた身分ではないのでできるだけ無償でまたオープンソースに、かつひっそりと活動を続けてみようと思います。 これを見ている方の中で何か「こういうアプリが欲しい」などの要望があれば、このPageのソースコードを置いているgithubの「issues」に投稿をしてみて下さい（issuesの仕組みと投稿の仕組みは調べれば何かしら出てくると思います）。全て対応できるかはわかりませんが、時間が許す限り開発を行ってみたいと思います。',
      progression: 'deploy済',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-08-25',
          content: 'Completed the initial design and layout of the this website and deploy it.'
        }
      ],
      appUrl: 'https://project-list-pi.vercel.app',
      githubUrl: 'https://github.com/takeruhukushima/Project-List'
    }
    // 他のプロジェクトデータ...
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};
