import { Layout, Menu } from "antd"
import { useNavigate } from "react-router-dom"
import { Cloudy, UserCircle } from 'lucide-react';

const Navbar = () => {

    const { Header } = Layout

    const navigate = useNavigate()

  return (
    <>
        <Header className="bg-dark-theme-terciary flex justify-between w-full">
            <div className="flex flex-1 items-center p-4 gap-4">
                <Cloudy color="purple" /> | 
                <h1 className="text-3xl font-light text-dark-theme-text_sc font-subtitle">StarsFord - More Than a Bank</h1>
            </div>

            <Menu
                className="bg-dark-theme-terciary" 
                mode="horizontal"
                items={
                    [
                        
                        {
                            key: 1,
                            label: "Home",
                            onClick: () => navigate("/")

                        },
                        {
                            key: 2,
                            label: "About Us",
                            onClick: () => navigate("/about")
                        },
                        {
                            key: 3,
                            label: "Services",
                            onClick: () => navigate("/services")
                        },
                        {
                            key: 4,
                            label: "Contact",
                            onClick: () => navigate("/contact")
                        },

                        {
                            key: 5,
                            label: 'Login',
                            onClick: () => navigate("/login"), 
                            icon: <UserCircle />,
                        }
                    ]
                }
                defaultSelectedKeys={["2"]}
                
            />
        </Header>
    </>
  )
}

export default Navbar