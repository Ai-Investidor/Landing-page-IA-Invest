import { useState } from 'react';
import { Reveal } from './Reveal';
import { faqItems, type FaqItemData } from '../data/content';

function FaqRow({ item }: { item: FaqItemData }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="div" className={`faq-item${open ? ' open' : ''}`}>
      <button type="button" className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {item.q} <span className="faq-ic">+</span>
      </button>
      <div className="faq-a">
        <div className="faq-a-body">{item.a}</div>
      </div>
    </Reveal>
  );
}

export function FaqSection() {
  return (
    <section className="sec" id="faq">
      <div className="container">
        <Reveal as="div" className="sec-head center">
          <h2>Tudo o que você precisa saber.</h2>
        </Reveal>
        <div className="faq-list">
          {faqItems.map((item) => (
            <FaqRow item={item} key={item.q} />
          ))}
        </div>
      </div>
    </section>
  );
}
