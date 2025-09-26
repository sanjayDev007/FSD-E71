import React from 'react'

function ServicesCard() {
  const dummyCards = [
    { id: 1, title: 'Web Design', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/globe.svg', btnText: 'Learn More' },
    { id: 2, title: 'App Development', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/phone.svg', btnText: 'Learn More' },
    { id: 3, title: 'SEO Optimization', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/search.svg', btnText: 'Learn More' },
    { id: 4, title: 'Cloud Services', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/cloud.svg', btnText: 'Get Quote' },
    { id: 5, title: 'E‑commerce', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/cart.svg', btnText: 'View Plans' },
    { id: 6, title: 'Branding', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/brush.svg', btnText: 'See Portfolio' },
    { id: 7, title: 'UI/UX', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/layers.svg', btnText: 'Explore' },
    { id: 8, title: 'Maintenance & Support', img: 'https://unpkg.com/bootstrap-icons@1.10.5/icons/wrench.svg', btnText: 'Contact Us' },
  ];

  const getColorBg1 = (index) => {
    const colors = ['bg-white', 'bg-lime-300', 'bg-neutral-900'];
    return colors[(index - 1) % colors.length];
  };
  const getColorBgInverse = (index) => {
    const colors = ['bg-lime-300', 'bg-white', 'bg-white'];
    return colors[(index - 1) % colors.length];
  };
  const getColorText = (index) => {
    const colors = ['text-black', 'text-black', 'text-white'];
    return colors[(index - 1) % colors.length];
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10 ">
      {dummyCards.map(card => (
        <div
          key={card.id}
          className={`card w-full h-[280px] flex items-center justify-center space-x-14 border-1 rounded-4xl p-5 border-b-4 ${getColorBg1(card.id)}`}
        >
          <section className="h-full flex flex-col justify-between items-start space-y-6 py-6">
            <h1 className={`text-2xl font-bold p-2 ${getColorBgInverse(card.id)} ${getColorBgInverse(card.id) == 'bg-white' ? 'text-black' : getColorText(card.id)} rounded-lg`}>{card.title}</h1>
            <button className={`${getColorText(card.id)}  rounded`}>{card.btnText}</button>
          </section>
          <section>
            <img className={`w-[150px]`} src={card.img} alt={card.title} />
          </section>
        </div>
      ))}
    </div>
  );
}

export default ServicesCard