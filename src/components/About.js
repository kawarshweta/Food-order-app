import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>this is about us page</h1>
      <User 
      name= "shweta Kawar"
      description= "I am a frontend developer"
      />
      <UserClass
      name= "Shweta here..."
      description= "I am a frontend developer (class)"
      />
    </div>
  );
};

export default About;
