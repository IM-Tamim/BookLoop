'use client'
import { FaUserPlus, FaSearch, FaBookOpen, FaCheckCircle } from 'react-icons/fa';
import 'animate.css';

const steps = [
    {
        step: "01",
        title: "Create an Account",
        description: "Sign up in seconds with your email or Google account.",
        icon: <FaUserPlus />,
    },
    {
        step: "02",
        title: "Browse & Search",
        description: "Explore books by category, title, or author.",
        icon: <FaSearch />,
    },
    {
        step: "03",
        title: "Borrow Instantly",
        description: "Click Borrow and it's yours. No queues, no waiting.",
        icon: <FaBookOpen />,
    },
    {
        step: "04",
        title: "Read & Return",
        description: "Enjoy at your own pace and return digitally when done.",
        icon: <FaCheckCircle />,
    },
];

const HowItWorks = () => {
    return (
        <section className="pt-5 pb-20 bg-base-200">
            <div className="max-w-3xl mx-auto px-4">

                <div className="text-center mb-16 animate__animated animate__fadeInDown">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="text-base-content/60 mt-2">
                        Borrowing your next book is easier than ever.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-0 lg:hidden">
                    {steps.map((item, index) => (
                        <div key={item.step} className="flex flex-col items-center animate__animated animate__fadeIn"
                            style={{ animationDelay: `${index * 0.4}s`, animationFillMode: 'both' }}>
                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-xl text-primary-content shadow-md animate__animated animate__bounceIn"
                                style={{ animationDelay: `${index * 0.4}s`, animationFillMode: 'both' }}>
                                {item.icon}
                            </div>
                            <div className="text-center px-4 py-3">
                                <span className="text-xs font-bold text-primary tracking-widest">STEP {item.step}</span>
                                <h3 className="font-bold text-base mt-0.5 text-base-content">{item.title}</h3>
                                <p className="text-sm text-base-content/60 mt-1">{item.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="w-0.5 h-6 bg-primary/30" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="relative hidden lg:flex flex-col items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-0.5 bg-primary/30 z-0" />

                    {steps.map((item, index) => (
                        <div
                            key={item.step}
                            className="relative flex items-center justify-center w-full mb-16 last:mb-0 animate__animated animate__fadeIn"
                            style={{ animationDelay: `${index * 0.4}s`, animationFillMode: 'both' }}
                        >
                            {index % 2 === 0 ? (
                                <div className="absolute right-[calc(50%+44px)] w-52 text-right animate__animated animate__fadeInLeft"
                                    style={{ animationDelay: `${index * 0.4 + 0.2}s`, animationFillMode: 'both' }}>
                                    <span className="text-xs font-bold text-primary tracking-widest">STEP {item.step}</span>
                                    <h3 className="font-bold text-base mt-0.5 text-base-content">{item.title}</h3>
                                    <p className="text-sm text-base-content/60 mt-1">{item.description}</p>
                                </div>
                            ) : (
                                <div className="absolute left-[calc(50%+44px)] w-52 text-left animate__animated animate__fadeInRight"
                                    style={{ animationDelay: `${index * 0.4 + 0.2}s`, animationFillMode: 'both' }}>
                                    <span className="text-xs font-bold text-primary tracking-widest">STEP {item.step}</span>
                                    <h3 className="font-bold text-base mt-0.5 text-base-content">{item.title}</h3>
                                    <p className="text-sm text-base-content/60 mt-1">{item.description}</p>
                                </div>
                            )}

                            <div
                                className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-xl text-primary-content shadow-md animate__animated animate__bounceIn"
                                style={{ animationDelay: `${index * 0.4}s`, animationFillMode: 'both' }}
                            >
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;