type PageWrapperProps = {
    children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <main>
            <div className="flex justify-center items-center p-8 lg:p-24 pb-16">
                <div className="flex flex-col max-w-2xl w-full">
                    {children}
                </div>
            </div>
        </main>
    )
}