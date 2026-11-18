// Все тексты, цены, контакты и ссылки — заглушки. Замени на реальные данные барбера.
const BOOKING_URL = '#contacts'

const iconProps = {
  width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  'aria-hidden': true,
}

const socials = [
  {
    name: 'Instagram', href: '#',
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Telegram', href: '#',
    icon: (
      <svg {...iconProps}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9 22 2z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp', href: '#',
    icon: (
      <svg {...iconProps}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
  },
  {
    name: 'VK', href: '#',
    icon: (
      <svg {...iconProps} stroke="none" fill="currentColor">
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Oswald, sans-serif">VK</text>
      </svg>
    ),
  },
]

const works = ['Fade', 'Классика', 'Борода']

const services = [
  { name: 'Мужская стрижка', time: '60 мин', price: '1 200 ₽' },
  { name: 'Стрижка машинкой', time: '30 мин', price: '800 ₽' },
  { name: 'Оформление бороды', time: '40 мин', price: '800 ₽' },
  { name: 'Стрижка + борода', time: '90 мин', price: '1 800 ₽' },
  { name: 'Королевское бритьё', time: '45 мин', price: '1 000 ₽' },
  { name: 'Детская стрижка', time: '40 мин', price: '800 ₽' },
]

const reasons = [
  { title: 'Мастер, а не конвейер', text: 'Один клиент — один час внимания. Без спешки и очередей.' },
  { title: 'Запись по времени', text: 'Приходишь ровно к назначенному часу и уходишь вовремя.' },
  { title: 'Чистота и порядок', text: 'Инструмент дезинфицируется после каждого клиента.' },
]

export default function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#top">BUDKO<span>BARBER</span></a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#location">Как добраться</a>
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="btn btn--small" href={BOOKING_URL}>Записаться</a>
      </header>

      <main id="top">
        <section className="hero">
          {/* Заменить на фото: <img className="hero__photo" src="/barber.jpg" alt="Барбер" /> */}
          <div className="hero__photo placeholder" role="img" aria-label="Место под фото барбера">
            <span>Фото барбера</span>
          </div>

          <div className="hero__side">
            <h1>Стрижки и борода. Запись онлайн.</h1>

            <ul className="socials" aria-label="Соцсети">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} aria-label={s.name} title={s.name} target="_blank" rel="noreferrer">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hero__works">
              {works.map((w) => (
                <figure className="hero__work placeholder" key={w}>
                  <span>{w}</span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="location">
          <h2>Как добраться</h2>
          <div className="location">
            {/* Заменить на видео: <video controls src="/route.mp4" poster="/route.jpg" /> */}
            <div className="location__video placeholder" role="img" aria-label="Место под видео как добраться">
              <span>Видео: как добраться</span>
            </div>
            {/* Заменить на карту: <iframe src="https://yandex.ru/map-widget/v1/?..." title="Карта" /> */}
            <div className="location__map placeholder" role="img" aria-label="Место под карту">
              <span>Яндекс / Google карта</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <h2>Услуги и цены</h2>
          <ul className="services">
            {services.map((s) => (
              <li key={s.name}>
                <span className="services__name">{s.name}</span>
                <span className="services__time">{s.time}</span>
                <span className="services__price">{s.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section section--tint" id="about">
          <h2>Почему к нам</h2>
          <div className="cards">
            {reasons.map((r) => (
              <article className="card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark" id="contacts">
          <h2>Запишись на стрижку</h2>
          <p className="lead">Напиши или позвони — подберём удобное время.</p>
          <dl className="contacts">
            <div><dt>Телефон</dt><dd><a href="tel:+70000000000">+7 (000) 000-00-00</a></dd></div>
            <div><dt>Адрес</dt><dd>г. Ваш город, ул. Примерная, 1</dd></div>
            <div><dt>Часы работы</dt><dd>Ежедневно 10:00 – 21:00</dd></div>
          </dl>
          <a className="btn btn--light" href="tel:+70000000000">Позвонить</a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__grid">
          <div>
            <a className="logo" href="#top">BUDKO<span>BARBER</span></a>
            <p className="footer__about">Барбершоп. Стрижки, борода, укладка.</p>
          </div>
          <div>
            <h4>Навигация</h4>
            <ul>
              <li><a href="#location">Как добраться</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+70000000000">+7 (000) 000-00-00</a></li>
              <li>г. Ваш город, ул. Примерная, 1</li>
              <li>Ежедневно 10:00 – 21:00</li>
            </ul>
          </div>
          <div>
            <h4>Соцсети</h4>
            <ul>
              {socials.map((s) => (
                <li key={s.name}><a href={s.href} target="_blank" rel="noreferrer">{s.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">© {new Date().getFullYear()} Budko Barber. Все права защищены.</div>
      </footer>
    </>
  )
}
