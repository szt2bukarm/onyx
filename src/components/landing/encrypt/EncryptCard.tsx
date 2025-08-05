import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function EncryptCard({header,headerColor,illustration,text}: {header: string, headerColor: string, illustration: string, text: string}) {
    return (
        <div className="h-auto bg-white flex flex-col p-[24px] w-full">
            <p className="flex items-center h-[36px] w-fit uppercase px-[16px] py-[8px] text-white mb-[40px]" style={{background: headerColor}}>{header}</p>
            <div className="flex justify-center items-center">
            <Zoom classDialog='custom-zoom'>
                <img
                    src={illustration}
                    alt="illustration"
                    className="h-[450px] object-contain"
                />
                </Zoom>
            </div>
        </div>
    )
}