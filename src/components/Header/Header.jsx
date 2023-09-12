// import image
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="flex items-center justify-between container mx-auto p-4">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img className="w-12" src={profile} alt="" />
        </div>
    );
};

export default Header;