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
    //       date: '2024-08-24',
    //       content: ''
    //     }
    //   ],
    //   appUrl: '',
    //   githubUrl: ''
    // },

{
      id: '11',
      title: 'Osusume',
      description: '好きなものを保存するツールとか記録するツールってあるけどおすすめするツールって無いなあと',
      content: '単純に自分が読んでいる本の中で、重要な意味を持つものを構造化して表示したい。あわよくば必要なときに共有したいと思って、国立国会図書館のAPIから本をおすすめするアプリを作ろうかなと。ただ、自分が欲しいだけなのだけど。',
      progression: '構想中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-11-08',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },


    {
      id: '10',
      title: 'lamppost',
      description: '魂の影を照らすのが小説なのだとすると社会の影を照らす人って誰なんでしょうね',
      content: 'なんだか家太后とを行っているけど、そういう大きなmovementにしたい。ただ、おせっかいにもなりたくないよね。',
      progression: '構想中',
      progress: [
        {
          title: 'Initial Deploy',
          date: '2024-11-08',
          content: ''
        }
      ],
      appUrl: '',
      githubUrl: ''
    },



    {
      id: '9',
      title: 'PoroMet',
      description: '材料表面のSEM画像をOpenCVにより処理をして、細孔径を求めます。Programのみを共有します。アプリとして設計していないのは一般的な研究者の方々は実験データをWeb上に投稿することには抵抗があり、（アプリでの実行に）需要が全くないと思われるからです。従って、ローカルでのcloneと実行を前提に作っています。',
      content: '所属している学校の研究室内で共同進行しているプロジェクトのデータ処理工程を公開します。内容は単にOpenCVを用いたSEMの画像処理によって多孔質材料の細孔径を求めるものです。',
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
      content: 'ニッチですがエクセルやPythonでXRDのグラフを可視化するよりもアプリをGUIで作っちゃったほうが効率的に実験と分析ができる気がしたので作ることにしました。',
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
