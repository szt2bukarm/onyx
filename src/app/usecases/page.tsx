"use client"
import Head from "@/components/common/Head";
import Heading from "@/components/common/Heading";
import UseCasesCard from "@/components/usecases/UseCasesCard";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from '@studio-freight/react-lenis'
import JoinOnyx from "@/components/common/joinonyx/JoinOnyx";
import Footer from "@/components/footer/Footer";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        icon: "Usecase_01_MultiLang",
        text: "Multilingual Support and Translation",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "REAL-TIME TRANSLATION",
                url: ""
            },
            {
                text: "Localization of Product Descriptions",
                url: ""
            },
            {
                text: "Multilingual Chatbot Support",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_02_Compliance",
        text: "Compliance Monitoring and Regulatory Reporting",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Transaction Compliance",
                url: ""
            },
            {
                text: "Regulatory Reporting Automation",
                url: ""
            },
            {
                text: "Communication Monitoring",
                url: ""
            }
        ],
        tag: "Sales"
    },
    {
        icon: "Usecase_03_SalesPricing",
        text: "Sales and Pricing Optimization",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Dynamic Pricing Models",
                url: ""
            },
            {
                text: "Sales Trend Analysis",
                url: ""
            },
            {
                text: "Promotional Strategy Optimization",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_04_ProductDev",
        text: "Product Development and Innovation",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "AI-Driven Design Suggestions",
                url: ""
            },
            {
                text: "Market Trend Analysis",
                url: ""
            },
            {
                text: "Idea Generation",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_05_AIPowTraining",
        text: "AI-Powered Training and Development",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Personalized Learning Paths",
                url: ""
            },
            {
                text: "Skill Gap Analysis",
                url: ""
            },
            {
                text: "Employee Performance Prediction",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_06_PredAnal",
        text: "Predictive Analytics and Forecasting",
        subtext: "By utilizing the Temporal Fusion Transformer model to forecast future sales, businesses can significantly enhance their inventory management and operational planning",
        links: [
            {
                text: "Demand Forecasting",
                url: ""
            },
            {
                text: "Financial Risk Assessment",
                url: ""
            },
            {
                text: "Sales Trend Prediction",
                url: ""
            }
        ],
        tag: "Sales"
    },
    {
        icon: "Usecase_07_CRMEnhance",
        text: "Customer Relationship Management (CRM) Enhancements",
        subtext: "By predicting future revenue, businesses can make informed decisions to drive growth",
        links: [
            {
                text: "Personalized Marketing",
                url: ""
            },
            {
                text: "Customer Segmentation",
                url: ""
            },
            {
                text: "Churn Prediction",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_08_Chatbots",
        text: "Chatbots and Virtual Assistants",
        subtext: "Predicting customer churn helps businesses retain valuable customers",
        links: [
            {
                text: "Customer Service Automation",
                url: ""
            },
            {
                text: "Internal Employee Support",
                url: ""
            },
            {
                text: "FAQ Assistance",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_09_FraudDetect",
        text: "Fraud Detection and Cybersecurity",
        subtext: "Automate classification and analysis to save time and extract valuable insights",
        links: [
            {
                text: "Fraudulent Transaction Detection",
                url: ""
            },
            {
                text: "Cyber Threat Anomaly Detection",
                url: ""
            },
            {
                text: "Email Phishing Detection",
                url: ""
            }
        ],
        tag: "Sales"
    },
    {
        icon: "UseCase_10_NatLang",
        text: "Natural Language Processing (NLP) for Document Management",
        subtext: "Increase efficiency and reduce errors in data entry and processing",
        links: [
            {
                text: "Automated Document Classification",
                url: ""
            },
            {
                text: "Sentiment Analysis",
                url: ""
            },
            {
                text: "Contract Analysis",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_11_RPA",
        text: "Robotic Process Automation (RPA) with AI Capabilities",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Automating Data Entry",
                url: ""
            },
            {
                text: "Invoice Processing",
                url: ""
            },
            {
                text: "Expense Report Processing",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_12_SupplyChain",
        text: "Supply Chain Optimization",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Inventory Management",
                url: ""
            },
            {
                text: "Logistics Optimization",
                url: ""
            },
            {
                text: "Demand Planning",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "Usecase_13_PredMaint",
        text: "Predictive Maintenance",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Equipment Failure Prediction",
                url: ""
            },
            {
                text: "Anomaly Detection",
                url: ""
            },
            {
                text: "Maintenance Scheduling",
                url: ""
            }
        ],
        tag: "Sales"
    },
    {
        icon: "Usecase_14_ComputerVision",
        text: "Computer Vision for Quality Control",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Defect Detection",
                url: ""
            },
            {
                text: "Assembly Verification",
                url: ""
            },
            {
                text: "Color Consistency Check",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_15_HRAnal",
        text: "Human Resources Analytics",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Turnover Prediction",
                url: ""
            },
            {
                text: "Talent Acquisition",
                url: ""
            },
            {
                text: "Employee Engagement Analysis",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_16_VoiceRec",
        text: "Voice Recognition and Speech Analytics",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Call Transcription",
                url: ""
            },
            {
                text: "Sentiment Analysis",
                url: ""
            },
            {
                text: "Voice Commands",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_17_FinMod",
        text: "Financial Modeling and Investment Analysis",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Time Series Forecasting for Stock Prices",
                url: ""
            },
            {
                text: "Portfolio Optimization",
                url: ""
            },
            {
                text: "Credit Risk Scoring",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_18_EnergyCon",
        text: "Energy Consumption Optimization",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Smart Grid Energy Distribution",
                url: ""
            },
            {
                text: "Building Energy Management",
                url: ""
            },
            {
                text: "Industrial Equipment Energy Optimization",
                url: ""
            }
        ],
        tag: "Sales"
    },
    {
        icon: "UseCase_19_MarkOpt",
        text: "Marketing Optimization and Ad Targeting",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Customer Targeting",
                url: ""
            },
            {
                text: "Ad Spend Optimization",
                url: ""
            },
            {
                text: "Personalized Content Recommendations",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
    {
        icon: "UseCase_20_ImgVidAnal",
        text: "Image and Video Analytics",
        subtext: "Improve product quality and reduce waste through automated defect detection",
        links: [
            {
                text: "Security Surveillance",
                url: ""
            },
            {
                text: "Content Moderation",
                url: ""
            },
            {
                text: "Product Recognition in Retail",
                url: ""
            }
        ],
        tag: "Customer Service"
    },
]

const tags = ["All","Sales","Customer Service", "Supply Chain", "Analysis", "Product Development", "Compliance", "Financial Forecasting", "Fraud Detection", "Human Resources", "Customer Relationship"]

export default function Page() {
    const [selectedTag, setSelectedTag] = useState("All");
    const cardsRef = useRef<HTMLDivElement[]>([])
    const scrollTargetRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis();
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useGSAP(() => {
        
        if (scrollTargetRef.current && window.scrollY > scrollTargetRef.current.offsetTop) {
            lenis?.stop();
            setTimeout(() => {
                window.scrollTo(0, scrollTargetRef.current.offsetTop - (windowWidth > 1440 ? 120 : windowWidth > 640 ? 65 : 60));
                lenis?.start();
            }, 1);
        }

        try {
            gsap.set(cardsRef.current, {
                y: 50,
                opacity: 0
            })
    
            gsap.to(cardsRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "back.out(1.5)",
                stagger: 0.03,
                onComplete: () => {
                    requestAnimationFrame(() => {
                        ScrollTrigger.refresh();
                    })
                }
            })
        } catch (error) {
            
        }

    }, [selectedTag])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
        <main className="w-full h-full bg-white">
            <Head label="USE CASES" subtext="">
                <span>Onyx Privacy is built for Enterprise work.</span>
            </Head>

            <div className="px-[20px] xl:px-[144px] pt-[120px]">
                {/* Move padding to heading container */}
                    <Heading className="font-regular text-h4 leading-h4 sm:text-h3 sm:leading-h3 xl:text-h2 xl:leading-h2 text-neutral-800 mb-[40px] lg:w-[70%]">
                        Let Onyx save you time, money, and get the job done with ease.
                    </Heading>
                
                <div ref={scrollTargetRef}></div>

                <div className="grid xl:grid-cols-[auto_1fr] gap-[40px] xl:gap-[80px] pb-[120px]">
                    {/* Sticky sidebar */}
                    <div className="z-10 flex xl:flex-col overflow-x-auto xl:flex-wrap gap-[6px] h-min sticky top-[65px] md:top-[95px] py-[20px] xl:p-0 bg-white xl:bg-transparent xl:top-[120px]">
                        {tags.map((tag, index) => (
                            <div 
                                key={index} 
                                className={`group transition duration-150 flex items-center cursor-pointer p-[12px] min-w-fit xl:w-fit ${tag === selectedTag ? "bg-onyx-500" : "bg-creambg hover:bg-black"} `} 
                                onClick={() => setSelectedTag(tag)}
                            >
                                <p className={`group-hover:text-white transition duration-150 font-regular text-sm leading-sm ${tag === selectedTag ? "text-white" : "text-neutral-700"}`}>
                                    {tag}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Cards container */}
                    <div className="flex flex-col gap-[8px]">
                    {
                        cards
                        .filter(card => selectedTag === "All" || card.tag === selectedTag)
                        .map((card, index) => (
                            <div
                            ref={el => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            key={index}
                            >
                            <UseCasesCard
                                icon={card.icon}
                                text={card.text}
                                subtext={card.subtext}
                                links={card.links}
                            />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>

            <JoinOnyx />
        </main>

        <div key={selectedTag}>
        <Footer />
        </div>
        </>
    )
}