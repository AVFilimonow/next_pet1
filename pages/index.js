import Link from "next/link";
import A from "../components/A"

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href={"/"} text={"Главная страница"}></A>
                <A href={"/users"} text={"Список пользователей"}></A>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                .navbar {
                    background: gray;
                    padding: 10px;                    
                }                
                `}
            </style>
        </div>
    );
};

export default Index;