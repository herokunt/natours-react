import Feature from '../components/Feature';

const featureData = [
  {
    title: 'Explore The World',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'icon-basic-world'
  },
  {
    title: 'Meet Nature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'icon-basic-compass'
  },
  {
    title: 'Find Your Way',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'icon-basic-map'
  },
  {
    title: 'Live A Healthier Life',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'icon-basic-heart'
  }
];

const Features = () => {
  return (
    <section className="section-features">
      <div className="row large-margin-top">

        {
          featureData.map(({ title, description, icon }, idx) => (
            <div className="column" key={Math.random()}>
              <Feature title={title} description={description} icon={icon} />
            </div>
          ))
        }

      </div>
    </section>
  );
};

export default Features;
