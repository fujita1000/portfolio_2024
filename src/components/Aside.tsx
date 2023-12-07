import Skills from "./Skills/Skills"

const Aside = () => {
    return(
        <aside className="w-[35%] h-full bg-aside_bg hidden md:block">
            <div className="w-[88%] mt-[30px] ml-[30px]">
            <h1 className="text-h1_bg text-[64px]">開発中(デプロイテスト中)</h1>
            <div className="[&>p]:text-p_bg [&>p]:text-[24px]">
            <p className="my-[20px]">私が開発したサイト一覧です</p>
            <p className="mb-[20px]">このポートフォリオには各記事にコメントを書き込める機能を付けています</p>
            <p>このサイトの使用技術は「next.js」「firebase」「googleAuth」「contentful」です。</p>
            </div>
            </div>
            <Skills/>
        </aside>
    )
}

export default Aside