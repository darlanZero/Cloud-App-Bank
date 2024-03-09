import { Card } from "antd"


export const AboutUs = () => {
  return (
    <>
        <div className="container h-full max-h-full flex items-center flex-col text-center justify-center">
            <div className="py-12 lg:py-24">
                <div className="container px-4  flex flex-col gap-4">
                    <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">About Us</h1>
                    <div className="space-y-2 text-center">
                        <p>Learn More about StarsFord, the secure and completely private cryptobank.</p>

                        <div className="mx-auto grid max-w-3xl gap-4 text-center">
                            <p className="text-gray-400">
                                At StarsFord, we believe in the power of cryptocurrency to transform the world. We're on a mission to make crypto accessible to everyone, from seasoned traders to newcomers to the world of digital assets. Our platform is designed to be secure, user-friendly, and packed with features that put the power of crypto in your hands.
                            </p>

                            <p className="text-gray-400">
                                StarsFord was founded by a team of finance and technology experts who saw the potential of blockchain and digital currencies to revolutionize the way we think about money. We're committed to transparency, innovation, and putting our customers first. It's our goal to demystify crypto and help people harness the full potential of this exciting new asset class.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray-700 dark:border-gray-800">
               <div className="container px-4 grid gap-6 py-12  lg:grid-cols-2 lg:py-24">
                    <Card
                        className="bg-light-theme-secondary text-black border border-black w-full"
                        title="Our Mission"
                    >
                        <p>
                            StarsFord's mission is to make cryptocurrency accessible to all. We believe that digital assets have the
                            power to create financial inclusion, empower individuals, and drive innovation. We're dedicated to
                            providing a secure, user-friendly platform that makes it easy for anyone to buy, sell, and use crypto.
                            Whether you're a seasoned trader or new to the world of digital assets, StarsFord is here to help you
                            navigate the exciting and evolving landscape of cryptocurrency.
                        </p>
                    </Card>

                    <Card
                        className="bg-slate-800 text-white border border-white w-full"
                        title="Our Vision"
                    >
                        <p>
                            StarsFord's vision is a world where everyone has the freedom to access and use digital currency. We
                            believe that cryptocurrency has the potential to transform the global economy by enabling secure, instant,
                            and low-cost transactions. Our goal is to be a trusted partner for individuals, businesses, and
                            institutions looking to embrace the future of finance. We're working to build an ecosystem that makes it
                            simple and safe to harness the power of crypto, opening up new opportunities for financial growth and
                            innovation.
                        </p>
                    </Card>
               </div>
            </div>
        </div>
    </>
  )
}
