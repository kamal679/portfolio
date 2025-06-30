
import Image from "next/image";

export default function LeftSection() {
  return (
    <div>
      <h2>Left Section</h2>
      <Image 
        src="/profile.jpg"   
        alt="My Photo"
        width={300} 
        height={300}
      />
      <p>This is your Left Section content with an image.</p>
    </div>
  );
}
