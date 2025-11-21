export default function Services() {
    return (
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Our Services
            </h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#141414] tracking-light text-[22px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                        コア業務に集中できる環境を、オンラインで。
                    </h2>
                    <p className="text-[#141414] text-base font-normal leading-normal max-w-[720px]">
                        経営者・個人事業主の皆様が、本来の業務にもっと時間を注げるように。煩雑になりがちな経理や秘書業務をオンラインでまるごとサポートします。必要な時に、必要な分だけ。貴社のビジネスを黒子として支えるパートナーです。
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-0">
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dbdbdb] bg-neutral-50 p-4 flex-col">
                        <div className="flex items-center gap-2">
                            <div
                                className="text-green-600"
                                data-icon="Clock"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#141414] text-[22px] font-bold leading-tight">
                                オンライン経理サポート
                            </h2>
                        </div>
                        <p className="text-neutral-500 text-sm font-normal leading-normal">
                            記帳代行から月次レポート作成まで、正確かつスピーディーに対応。面倒な経理業務から解放します。
                        </p>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dbdbdb] bg-neutral-50 p-4 flex-col">
                        <div className="flex items-center gap-2">
                            <div
                                className="text-green-600"
                                data-icon="UsersThree"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#141414] text-[22px] font-bold leading-tight">
                                オンライン事務サポート
                            </h2>
                        </div>
                        <p className="text-neutral-500 text-sm font-normal leading-normal">
                            スケジュール調整、請求書作成、連絡代行など、日々の細かなタスクを巻き取り、あなたの業務を円滑に進めます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
