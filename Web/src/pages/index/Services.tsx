import { Card } from "antd"

export const Services = () => {
  return (
    <>
        <div className="h-full w-full flex flex-col gap-2 p-2 items-center">
            <div className="flex items-center text-center flex-col gap-2 p-2 w-72">
                <div className="space-y-2 flex flex-col items-center text-center ">
                    <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">
                        Services
                    </h1>

                    <p className="text-gray-400 font-light">
                        Secure your digital assets and unlock the potential of decentralized finance with our comprehensive suite of services.
                    </p>
                </div>
            </div>
            <div className="w-full p-2 gap-2">
                <div className="flex text-left flex-col p-2 w-fit">
                    <Card className="bg-slate-800/15">
                        <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">Crypto Wallet Management</h1>

                        <p>
                            Seamlessly manage your cryptocurrency portfolio with our intuitive wallet interface. Send, receive, and store your digital assets with confidence.
                        </p>
                    </Card>
                </div>

                <div className="flex text-right flex-col p-2">
                    <Card className="bg-slate-800/50">
                        <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">
                            DeFi Access Integration
                        </h1>

                        <p>
                            Tap into the world of decentralized finance with our integrated DeFi platform. Explore yield farming, liquidity provision, and peer-to-peer lending with ease.
                        </p>
                    </Card>
                </div>

                <div className="flex text-left flex-col p-2 w-fit">
                    <Card className="bg-slate-800/15">
                        <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">
                            Crypto Savings Account
                        </h1>

                        <p>
                            Grow your crypto holdings with our secure savings account. Earn competitive interest rates on your digital currencies while maintaining full control of your funds.
                        </p>
                    </Card>
                </div>

                <div className="flex text-right flex-col p-2">
                    <Card className="bg-slate-800/50">
                        <h1 className="text-3xl text-dark-theme-terciary font-extrabold font-serif">
                            Tokenized Asset Trading
                        </h1>

                        <p>
                            Dive into the world of tokenized assets with our trading platform. Buy and sell digital tokens representing real-world assets such as stocks, commodities, and more.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}