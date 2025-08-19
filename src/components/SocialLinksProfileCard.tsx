const SocialLinksProfileCard = () => {
  return (
    <article className="bg-grey-800 p-6 rounded-xl card-width flex flex-col justify-center items-center gap-6">
      <img
        src="avatar-jessica.jpeg"
        alt="avatar"
        className="avatar-size rounded-full"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-preset-1 text-white">Jessica Randall</h1>
        <h3 className="text-preset-2-bold text-green-card">London, United Kingdom</h3>
      </div>
      <div className="text-preset-2-regular text-white">"Front-end developer and avid reader."</div>
      <div className="flex justify-center items-center gap-4 flex-wrap text-white">
        <p className="social-button">GitHub</p>
        <p className="social-button">Frontend Mentor</p>
        <p className="social-button">LinkedIn</p>
        <p className="social-button">Twitter</p>
        <p className="social-button">Instagram</p>
      </div>
    </article>
  );
};

export default SocialLinksProfileCard;
