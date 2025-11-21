export default function Hero() {
    return (
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[384px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/home_new.png")',
                        }}
                    >
                        <div className="flex flex-col gap-2 text-left">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                ToDoCoWorks
                                <span className="block"></span>
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                オンライン経理・業務サポート
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
