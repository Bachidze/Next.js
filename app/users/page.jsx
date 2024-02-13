import Image from "next/image";


const User = () => {
   const img = '/neom-fNXY1xjZQYI-unsplash.jpg'
   const img2 = '/nxt/public/gio.jpg'
  return (
    <div>
        <Image src={img} alt="Nature Image" width={500} height={500} />
        <Image src={img2} alt="Nature Image" width={500} height={500} />
    </div>
  );
};

export default User;
