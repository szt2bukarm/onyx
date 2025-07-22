import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import AttackVectorsAuditedBy from "./AttackVectorsAuditedBy";

const cards = [
    {
        title: "LLM-as-a-Judge Attack",
        text: "Using a state-of-the-art large language model such as GPT-4o to evaluate whether the output P(Oi) is a good answer to the prompt P(Ii)."
    },
    {
        title: "Linguistic Domain Knowledge Attack",
        text: "Using domain knowledge to design the loss function L, so that the loss L can capture the semantic meaning in the (decrypted) input, output and between."
    },
    {
        title: "Brute-force Algorithm Attack",
        text: "The most naive method is brute force, trying all possible permutations P and choosing the one with the minimal loss value. This algorithm requires time complexity of N!, which is infeasible."
    },
    {
        title: "Random Sampling Attack",
        text: "Randomly sampling M permutations and choosing the one with the lowest loss value. One can also try genetic algorithms to mix and cross-over multiple tries at different permutations."
    },
    {
        title: "Hill-climbing Algorithm Attack",
        text: "Starting with an arbitrary initial permutation P. The set of moves is the set of permutations that one can reach by transposing two elements of the permutation."
    },

]


export default function AttackVectors() {

    return (
        <div className="px-[20px] sm:px-[80px]  pt-[80px] flex flex-col bg-neutral-800">

        <div className="pb-[64px] flex flex-col xl:flex-row gap-[40px] xl:gap-[112px] ">

            <div className="flex flex-col gap-[24px] xl:w-[50%]">
                <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-white">Attack Vectors on Onyx</Heading>
                <p className="font-regular text-lg leading-lg text-neutral-100">Equivariant Encryption (EE) security has been battle tested with various baseline attack vectors.</p>
                <Button variant="white">FULL ATTACK PAPER</Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-[8px] xl:w-[50%]">

                {cards.map((item,index) => (
                    <div key={index} className="flex flex-col justify-between sm:min-h-[240px] bg-neutral-700 p-[24px]">
                        <p className="font-medium text-lg leading-lg text-white mb-[8px] sm:mb-0">{item.title}</p>
                        <p className="font-regular text-sm leading-sm text-neutral-100">{item.text}</p>
                    </div>
                ))}

            </div>


        </div>
        <AttackVectorsAuditedBy />
    </div>
    )

}