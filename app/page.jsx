import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover about Japanese Vehicles
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">Toyota and Nissan</span>
      </h1>
      <p className="desc text-center">Toyomove is a Japanese vehicle catalogue to find best parts that suit your automobile</p>
      <Feed />
    </section>
  )
}

export default Home
