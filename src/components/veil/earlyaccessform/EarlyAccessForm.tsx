import CTAButton from "@/components/common/CTAButton";
import Heading from "@/components/common/Heading";

export default function EarlyAccessForm() {
    return (
        <form className="xl:py-[104px] flex flex-col justify-center gap-[32px] xl:w-[40%]">
            <h3 className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 text-white">Get Early Access</h3> 

            <div className="flex flex-col gap-[24px]">

                <div className="flex flex-col md:flex-row gap-[24px] md:gap-[8px] ">

                    {/* first name */}
                    <div className="flex flex-col gap-[8px] w-full">
                        <label htmlFor="FirstName" className="font-regular text-sm leading-sm text-neutral-100">First Name <span className="text-onyx-500">*</span></label>
                        <input className="flex-1 px-[12px] py-[14px] bg-neutral-700 text-neutral-100" placeholder="-" type="text" name="FirstName" id="FirstName" required />
                    </div>

                    {/* last name */}
                    <div className="flex flex-col gap-[8px] w-full">
                        <label htmlFor="LastName" className="font-regular text-sm leading-sm text-neutral-100">Last Name <span className="text-onyx-500">*</span></label>
                        <input className="flex-1 px-[12px] py-[14px] bg-neutral-700 text-neutral-100" placeholder="-" type="text" name="LastName" id="LastName" required />
                    </div>

                </div>

                {/* organization name */}
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="OrgName" className="font-regular text-sm leading-sm text-neutral-100">Organization name <span className="text-onyx-500">*</span></label>
                    <input className="flex-1 px-[12px] py-[14px] bg-neutral-700 text-neutral-100" placeholder="-" type="text" name="OrgName" id="OrgName" required />
                </div>

                {/* work email */}
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="WorkEmail" className="font-regular text-sm leading-sm text-neutral-100">Work email <span className="text-onyx-500">*</span></label>
                    <input className="flex-1 px-[12px] py-[14px] bg-neutral-700 text-neutral-100" placeholder="-" type="text" name="WorkEmail" id="WorkEmail" required />
                </div>

                {/* interest */}
                <div className="flex flex-col gap-[8px]">
                    <label htmlFor="WorkEmail" className="font-regular text-sm leading-sm text-neutral-100">I am interested in products and services for: <span className="text-onyx-500">*</span></label>
                    <input className="flex-1 px-[12px] py-[14px] bg-neutral-700 text-neutral-100" placeholder="-" type="text" name="WorkEmail" id="WorkEmail" required />
                </div>

                {/* acknowledgement */}
                <div className="flex gap-[12px] items-start">
                    {/* Hidden native checkbox */}
                    <label htmlFor="Acknowledgement" className="flex gap-[12px] cursor-pointer">
                        <input
                        type="checkbox"
                        id="Acknowledgement"
                        name="Acknowledgement"
                        required
                        className="peer hidden"
                        />

                        {/* Custom checkbox visual */}
                        <div className="h-[16px] min-w-[16px] bg-neutral-700 flex items-center justify-center peer-checked:bg-onyx-500 peer-checked:border-onyx-500 translate-y-[1.5px] transition-all duration-200 ease-in-out">
                        </div>

                        {/* Text */}
                        <span className="text-sm leading-sm text-neutral-100">
                        By submitting your information, you agree to the processing of your personal data by Carta as described in Carta's{" "}
                        <a className="underline cursor-pointer text-onyx-500">Privacy Policy.</a>
                        </span>
                    </label>
                </div>
           </div>

           <CTAButton variant="primary">REQUEST A DEMO</CTAButton>
        </form>
    )
}