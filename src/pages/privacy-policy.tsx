import Head from "next/head";

const Privacy = () => {

  return (
    <>
      <Head>
        <title>プライバシーポリシーページ</title>
        <meta
          name='description'
          content='bamelife（バメライフ）のプライバシーポリシーページです。当サイトはValorantプレイヤーがより強くなり、eSportsがより日本で発展することを願って作られています。このサイトでどうにかなるとは思いませんが、少しでも力になりたいです。'
        />
        <meta name='keywords' content='bamelife（バメライフ） bamelife プライバシーポリシー' />

      </Head>
      <div className='w-full bg-sub'>
        <div className='m-auto w-11/12 pb-20 pt-10 [&>h3]:text-[25px] xl:[&>p]:text-[20px] xl:[&>h3]:text-[30px] 2xl:[&>h3]:text-[35px] 2xl:[&>p]:text-[25px]'>
          <h2 className='text-[30px]'>
            プライバシーポリシー
          </h2>
          <br />
          <h3>個人情報の利用目的</h3>
          <p>
            bamelife(以降:当サイトと呼ぶ)では個人情報の収集は一切行っておりません。お問い合わせメールなどの個人情報は、本人の同意なく公開、第三者への提供は一切行いません。
          </p>
          <p>
            アクセス解析ツールやアフェリエイトプログラム、広告配信サービスを利用しているため、Cookieを使って情報を取得する場合がございます。
            Cookieが記憶する情報には個人を特定するものは一切入っておりません。また、Cookieにより情報の取得を拒否したい場合は、ブラウザの設定でGoogleアナリティクスを無効化することにより、このサイトによるGoogleアナリティクスを通じたご自身の情報の収集を停止することも可能
            です。Googleアナリティクスの利用規約については、下記のサイトをご参照ください。
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://marketingplatform.google.com/about/analytics/terms/jp'
            >
              <p>「-Googleアナリティクスの利用規約-」</p>
            </a>
          </p>
          <br />
          <h3>広告について</h3>
          <p>
            当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザー
            の興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
          </p>
          <p>
            Cookieを無効にする方法やGoogleアドセンスに関する詳細は
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://policies.google.com/technologies/ads?hl=ja'
            >
              「広告-Googleポリシーと規約」
            </a>
            をご確認ください。
          </p>
          <br />
          <h3>アクセス解析ツールについて</h3>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <br />
          <h3>免責事項</h3>
          <p>
            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p>
            また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          </p>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <br />
          <h3>著作権について</h3>
          <p>当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。</p>
          <p>
            当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、TwitterのDMよりご連絡ください。迅速に対応いたします。
          </p>
          <br />
          <h3>リンクについて</h3>
          <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。</p>
          <p>ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
          <br />
          <h3>最後に</h3>
          <p>
            個人で当サイトを作ってるのでUIや機能などはお遊び感覚でガンガン変更します。それでは、ばいばい。
          </p>
          <br />
          <h3>運営者について</h3>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/bamelife'>
            <p>twitter:@bamelife</p>
          </a>
        </div>
      </div>
    </>
  ); 
 
};

export default Privacy;