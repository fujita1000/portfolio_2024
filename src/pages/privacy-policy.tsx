import Head from "next/head";

const Privacy = () => {

  return (
    <>
      <Head>
        <title>プライバシーポリシーページ</title>
        <meta
          name='description'
          content='fujita Portfolio（フジタ ポートフォリオ）のプライバシーポリシーページです。当サイトは就活で提示するために作成された私の技術を示すためのサイトです。'
        />
        <meta name='keywords' content='fujita Portfolio（フジタ ポートフォリオ） プライバシーポリシー' />

      </Head>
      <div className='w-full'>
        <div className='m-auto w-11/12 pb-[20px]  pt-[20px] [&>p]:text-[16px] [&>h3]:text-[22px] xl:[&>p]:text-[20px] xl:[&>h3]:text-[30px] 2xl:[&>h3]:text-[35px] 2xl:[&>p]:text-[25px]'>
          <h2 className='text-[25px]'>
            プライバシーポリシー
          </h2>
          <br />
          <h3>個人情報の利用目的</h3>
          <p>
           fujita Portfolio(以降:当サイトと呼ぶ)では個人情報の収集は一切行っておりません。お問い合わせメールなどの個人情報は、本人の同意なく公開、第三者への提供は一切行いません。
          </p>
          <p>
            アクセス解析ツールやgoogle認証により、Cookieを使って情報を取得する場合がございます。
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
            当サイトでは、広告の一切を使用しておりません。
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
            当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、ページ下部のメールアドレスよりご連絡ください。迅速に対応いたします。
          </p>
          <br />
          <h3>リンクについて</h3>
          <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。</p>
          <p>ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
          <br />
          <h3>最後に</h3>
          <p>
            このサイトはノリで作成しています。UIが告知なく変更されたり、制作技術が180度変わることが多々あります。ご容赦ください。
          </p>
          <br />
          <h3>運営者について</h3>
          <div className="text-white">
          <p>お問い合わせ、質問などは以下のメールアドレスにお願いします。</p>
          <a href="mailto:fujitanao.work@gmail.com" className="underline">fujitanao.work@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  ); 
 
};

export default Privacy;