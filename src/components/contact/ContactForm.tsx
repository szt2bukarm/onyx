import Button from "@/components/common/Button";

export default function ContactForm() {
    return (
        <form className="p-[20px] sm:p-[48px] flex flex-col justify-center gap-[32px] w-full bg-creambg">
            <h3 className="font-regular text-h5 leading-h5 md:text-h4 md:leading-h4 text-neutral-800">Send us a message</h3> 

            <div className="flex flex-col gap-[24px]">

                <div className="flex flex-col md:flex-row gap-[24px] md:gap-[8px] ">

                    {/* first name */}
                    <div className="flex flex-col gap-[8px] w-full">
                        <label htmlFor="FirstName" className="font-regular text-sm leading-sm text-neutral-800">First Name <span className="text-onyx-500">*</span></label>
                        <input className="flex-1 px-[12px] py-[14px] bg-white text-neutral-800" placeholder="-" type="text" name="FirstName" id="FirstName" required />
                    </div>

                    {/* last name */}
                    <div className="flex flex-col gap-[8px] w-full">
                        <label htmlFor="LastName" className="font-regular text-sm leading-sm text-neutral-800">Last Name <span className="text-onyx-500">*</span></label>
                        <input className="flex-1 px-[12px] py-[14px] bg-white text-neutral-800" placeholder="-" type="text" name="LastName" id="LastName" required />
                    </div>
                </div>

                {/* work email */}
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="WorkEmail" className="font-regular text-sm leading-sm text-neutral-800">Work email <span className="text-onyx-500">*</span></label>
                    <input className="flex-1 px-[12px] py-[14px] bg-white text-neutral-800" placeholder="-" type="text" name="WorkEmail" id="WorkEmail" required />
                </div>

                {/* interest */}
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="WorkEmail" className="font-regular text-sm leading-sm text-neutral-800">I am interested in products and services for: <span className="text-onyx-500">*</span></label>
                    <textarea className="flex-1 px-[12px] py-[14px] bg-white text-neutral-800" placeholder="-" rows={5} name="WorkEmail" id="WorkEmail" required draggable={false} />
                </div>

                {/* acknowledgement */}
                <div className="flex gap-[12px] items-start">
                    {/* Hidden native checkbox */}
                    <label htmlFor="AcknowledgementContact" className="flex gap-[12px] cursor-pointer">
                        <input
                        type="checkbox"
                        id="AcknowledgementContact"
                        name="AcknowledgementContact"
                        required
                        className="peer hidden"
                        />

                        {/* Custom checkbox visual */}
                        <div className="h-[16px] min-w-[16px] bg-white flex items-center justify-center peer-checked:bg-onyx-500 peer-checked:border-onyx-500 translate-y-[1.5px] transition-all duration-200 ease-in-out">
                        </div>

                        {/* Text */}
                        <span className="text-sm leading-sm text-neutral-700">
                        By submitting your information, you agree to the processing of your personal data by Carta as described in Carta's{" "}
                        <a className="underline cursor-pointer text-neutral-800">Privacy Policy.</a>
                        </span>
                    </label>
                </div>
           </div>

           <Button variant="primary">SEND MESSAGE</Button>
        </form>
    )
}