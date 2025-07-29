import Head from "@/components/common/Head";
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <>
        <main className="w-full h-full bg-white">

            <Head label="LAST UPDATED: FEB 1, 2024" subtext="Your use of our Services in any manner means that you agree to the Terms. Unfortunately, if you do not agree with these Terms, you may not access or use our Services.">
                <span>Terms and Conditions</span>
            </Head>

            <div className="px-[20px] sm:px-[80px] py-[80px] flex gap-[80px]">

                <div className="p-[40px] bg-creambg hidden lg:flex flex-col min-w-[305px] h-fit sticky top-[120px]">
                    <p className="font-medium text-sm leading-sm text-neutral-800 mb-[20px]">TABLE OF CONTENTS</p>
                    <div className="flex flex-col gap-[10px]">
                        <a href="#our-services" className="font-regular text-sm leading-sm text-neutral-700">Our Services</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Acceptable Use</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Content</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Intellectual Property</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Limitation of Liability</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">No Warranties</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Third Party Services and Websites</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Terminating Your Account</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Changes to the Services</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Changes to These Terms</a>
                        <a className="font-regular text-sm leading-sm text-neutral-700">Miscellaneous Terms</a>
                    </div>
                </div>

                <div className="flex flex-col gap-[48px]">

                    <p className="text-onyx-500 font-regular text-lg leading-lg">These Terms of Use (“Terms”) govern your use of Nesa Foundation (“Nesa”, “we”, “us”) products and services including our website, blockchain network, and conversational AIs (“Services”).<br></br><br></br>
                    These Terms incorporate by reference our Privacy Policy, as well as any other written policies and documentation that we may provide from time to time. You agree to use our Services in compliance with these Terms.</p>

                    <div id="our-services" className="flex flex-col gap-[40px]">
                        <h4 className="font-regular text-h4 leading-h4 text-neutral-800">Our services</h4>
                        <p className="font-regular text-md leading-md text-neutral-700">
                        Nesa Foundation believes that artificial intelligence will radically alter the way humans engage with the internet and the way we use our devices in our everyday lives. As you engage with our Services, we will learn more about how to make this nascent technology more useful, meaningful, and enjoyable to communicate with.<br></br><br></br><br></br>Given the early stage of this technology, we also acknowledge that there are areas that we will need to continually improve on to make sure that our Services can reach their full potential. As part of that, you recognize that:
                        </p>

                        <p className="font-regular text-md leading-md text-neutral-700">
                        We will use the content of your conversations to improve our Services. We will use the content of your conversations as well as other metadata to train our models, improve our Services, and create new Services. Our uses of this data are detailed in our Privacy Policy.You must use our Services in accordance with our Acceptable Use policy. Your access to our Services is conditioned on your agreement to use the Services in accordance with these Terms generally and our Acceptable Use policy (as detailed below in “Acceptable Use”).<br></br><br></br><br></br>The information you receive from our Services may not be accurate. You recognize that any information you receive from our Services may not be accurate or otherwise trustworthy.<br></br><br></br><br></br>Do not rely on this information without fact-checking on your own first or consulting with a professional. Getting factuality right remains an active area of research for the entire field of conversational AI, and it remains a major priority for the development of Nesa Foundation services going forward. Please review the “No Warranties” section below.
                        </p>
                    </div>

                    <div className="h-[1px] w-full bg-neutral-300"></div>

                    <div id="our-services" className="flex flex-col gap-[40px]">
                        <h4 className="font-regular text-h4 leading-h4 text-neutral-800">Registering for Our Services</h4>
                        <p className="font-regular text-md leading-md text-neutral-700">
                        Nesa Foundation believes that artificial intelligence will radically alter the way humans engage with the internet and the way we use our devices in our everyday lives. As you engage with our Services, we will learn more about how to make this nascent technology more useful, meaningful, and enjoyable to communicate with.<br></br><br></br><br></br>Given the early stage of this technology, we also acknowledge that there are areas that we will need to continually improve on to make sure that our Services can reach their full potential. As part of that, you recognize that:
                        </p>

                        <p className="font-regular text-md leading-md text-neutral-700">
                        We will use the content of your conversations to improve our Services. We will use the content of your conversations as well as other metadata to train our models, improve our Services, and create new Services. Our uses of this data are detailed in our Privacy Policy.You must use our Services in accordance with our Acceptable Use policy. Your access to our Services is conditioned on your agreement to use the Services in accordance with these Terms generally and our Acceptable Use policy (as detailed below in “Acceptable Use”).<br></br><br></br><br></br>The information you receive from our Services may not be accurate. You recognize that any information you receive from our Services may not be accurate or otherwise trustworthy.<br></br><br></br><br></br>Do not rely on this information without fact-checking on your own first or consulting with a professional. Getting factuality right remains an active area of research for the entire field of conversational AI, and it remains a major priority for the development of Nesa Foundation services going forward. Please review the “No Warranties” section below.
                        </p>
                    </div>

                </div>


            </div>

            <JoinOnyx />
        </main>
        <Footer />
        </>
    )
}