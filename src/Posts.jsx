
function Contact({numbers}) {

  return (
    <>
      <div>
        {numbers.map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
    </>
  );
};

export default Contact
