export default function FooterNav() {
    return (
        <div className="font-regular mb-[48px] grid gap-y-[48px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 xl:grid-cols-5 xl:grid-rows-1">
            <div>
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">TRY NOW</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <a>Try Onyx Web</a>
                    <a>Try Onyx Api</a>
                </div>
            </div>
            <div>
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">PRODUCTS</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <a>Onyx Fortress</a>
                    <a>Onyx Cloud Wall</a>
                    <a>ChatGPT Veil</a>
                    <a>Onyx Blind RAG</a>
                    <a>Onyx Blind Search</a>
                    <a>Onyx Custom AI</a>
                </div>
            </div>
            <div>
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">INFORMATION</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100">
                    <a>Why Privacy</a>
                    <a>Supported Models</a>
                    <a>Work Use Cases</a>
                    <a>Attack Vectors</a>
                    <a>Video Center</a>
                    <a>Tutorials</a>
               </div>
            </div>
            <div>
                <p className="text-md leading-md lg:text-sm lg:leading-sm text-white mb-[24px]">COMPANY</p>
                <div className="flex flex-col gap-[12px] text-md leading-md lg:text-sm lg:leading-sm text-neutral-100 ">
                    <a>Talk to us</a>
                    <a>Research</a>
                    <a>About</a>
                    <a>Support</a>
                    <a>Media Kit</a>
                    <a>Blog</a>
                    <a>Safety</a>
               </div>
            </div>
            <div className="flex flex-wrap gap-[24px] sm:col-span-2 lg:col-span-4 xl:col-span-1 xl:mt-0">
                <img className="w-[92px] h-[92px]" src="badges/ISO 27001.png" alt="ISO 27001" />
                <img className="w-[92px] h-[92px]" src="badges/SOC2 Type 2.png" alt="SOC2 Type 2" />
                <img className="w-[92px] h-[92px]" src="badges/GDPR.png" alt="GDPR" />
                <img className="w-[92px] h-[92px]" src="badges/CSA STAR.png" alt="CSA STAR" />
                <img className="w-[92px] h-[92px]" src="badges/HIPPAA.png" alt="HIPPAA" />
            </div>
        </div>
    )
}