export default function Home() {
  const calculate = () => {
    const a = 10;
    console.log(a ** 3);
  };
  return (
    <>
      <h1>My Portfolio</h1>

      <p>hello</p>

      <button>click me</button>
      <p>
        In this portfolio, I invite you to explore a collection of projects that
        embody my passion for creating captivating and functional spaces.
        <br>
          Each design is a testament to my dedication to innovation,
          sustainability, and user-centricity.
        </br>{" "}
        <br>
          From residential gems to commercial landmarks, these projects showcase
          my commitment to crafting environments that transcend the ordinary.
        </br>{" "}
        Thank you for joining me on this journey of architectural exploration.
      </p>
    </>
  );
}
