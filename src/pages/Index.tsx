import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Wrench',
      title: 'Ремонт двигателей',
      description: 'D13B, D15B, D17B, 3SFe, 5Fe и другие',
      details: ['Замена поршневых колец', 'Замена прокладок', 'Комплексная диагностика']
    },
    {
      icon: 'Cog',
      title: 'Ремонт ГБЦ',
      description: 'Полный спектр работ с головкой блока',
      details: ['Притирка клапанов', 'Замена маслосъёмных колпачков', 'Фрезировка', 'Замена масла и антифриза']
    },
    {
      icon: 'Settings',
      title: 'Навесное оборудование',
      description: 'Замена и обслуживание агрегатов',
      details: ['Генераторы', 'Стартеры', 'Компрессоры кондиционера', 'Насосы']
    },
    {
      icon: 'CircleDot',
      title: 'Ходовая часть',
      description: 'Подвеска и рулевое управление',
      details: ['Амортизаторы', 'Сайлентблоки', 'Шаровые опоры', 'Стабилизаторы', 'Приводы']
    },
    {
      icon: 'Disc',
      title: 'Тормозная система',
      description: 'Диагностика и ремонт тормозов',
      details: ['Замена колодок', 'Прокачка тормозов', 'Замена тормозной жидкости', 'Ремонт суппортов']
    },
    {
      icon: 'ClipboardCheck',
      title: 'Диагностика',
      description: 'Выявление неисправностей перед ремонтом',
      details: ['Компьютерная диагностика', 'Визуальный осмотр', 'Проверка систем']
    }
  ];

  const principles = [
    {
      icon: 'FileText',
      title: 'Прозрачная смета',
      description: 'Озвучиваю стоимость до начала работ'
    },
    {
      icon: 'PackageCheck',
      title: 'Качественные запчасти',
      description: 'Оригинал или проверенные аналоги'
    },
    {
      icon: 'Sparkles',
      title: 'Чистота и аккуратность',
      description: 'После работы убираю весь мусор'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия на работу',
      description: 'Фото-видеоотчёт по запросу'
    },
    {
      icon: 'Banknote',
      title: 'Честные цены',
      description: 'Без скрытых платежей'
    },
    {
      icon: 'Award',
      title: 'Опыт и профессионализм',
      description: 'Качественное выполнение работ'
    }
  ];

  const engines = [
    'D13B', 'D15B', 'D17B', '3S-FE', '5E-FE', '4A-FE', '7A-FE',
    '1NZ-FE', '2NZ-FE', 'K20A', 'F20B', 'B20B'
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/8e15511e-c6bb-409a-b879-f1d7b3b9994a.jpg',
      title: 'Ремонт двигателя Honda',
      description: 'Капитальный ремонт с заменой поршневой группы'
    },
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/235df1ad-0e25-4216-ab77-4664cbfc7d75.jpg',
      title: 'Замена тормозных колодок',
      description: 'Полное обслуживание тормозной системы'
    },
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/30d893e3-74a4-414c-ae71-8153269d5bd9.jpg',
      title: 'Ремонт подвески',
      description: 'Замена амортизаторов и сайлентблоков'
    }
  ];

  const workSteps = [
    { 
      number: '01', 
      title: 'Связь', 
      description: 'Звоните или пишите — обсудим проблему и назовём предварительную цену' 
    },
    { 
      number: '02', 
      title: 'Диагностика', 
      description: 'Принимаю авто в гараже, осматриваю и определяю объём работ' 
    },
    { 
      number: '03', 
      title: 'Ремонт', 
      description: 'Выполняю работы качественно и в срок, используя проверенные запчасти' 
    },
    { 
      number: '04', 
      title: 'Приёмка', 
      description: 'Проверяем результат вместе, предоставляю гарантию на работу' 
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="text-primary" size={32} />
            <span className="text-xl md:text-2xl font-bold text-primary">Автосервис в моём гараже</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#principles" className="hover:text-primary transition-colors">Принципы</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Работы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="tel:89294390444">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </a>
          </Button>
        </div>
      </header>

      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 text-base px-4 py-2" variant="outline">
            <Icon name="Warehouse" size={16} className="mr-2" />
            Ремонт в гараже
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Ремонт автомобилей<br />в моём гараже
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Профессиональный ремонт двигателей, ходовой части и тормозной системы. 
            Приезжайте в мой гараж — здесь есть всё необходимое для качественного ремонта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="tel:89294390444">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Warehouse', label: 'Ремонт в гараже' },
              { icon: 'ShieldCheck', label: 'Гарантия на работу' },
              { icon: 'Clock', label: 'Быстрое выполнение' },
              { icon: 'Wallet', label: 'Честные цены' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
                <Icon name={item.icon} size={32} className="text-primary" />
                <span className="text-xs md:text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card/50 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Работаю с двигателями:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {engines.map((engine, i) => (
                <Badge key={i} variant="secondary" className="text-base px-3 py-1">
                  {engine}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Виды работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по ремонту и обслуживанию автомобилей
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Мои принципы работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Честность, качество и индивидуальный подход к каждому клиенту
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={principle.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Примеры работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выполненные проекты с гарантией качества
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как проходит работа</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простой и понятный процесс от звонка до гарантии
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {workSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < workSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Частые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Выезжаете ли вы в другие районы?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Да, выезжаю по всему городу и ближайшим районам. При заказе уточним ваш адрес и согласуем время.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Нужно ли покупать запчасти заранее?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Не обязательно. После диагностики я озвучу список необходимых запчастей — можете купить сами или я привезу проверенные детали.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Какая гарантия на выполненные работы?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Даю гарантию на все виды работ. Точные условия обсуждаем перед началом ремонта. По запросу предоставлю фото-видеоотчёт.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Сколько времени занимает ремонт?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Зависит от сложности работ: замена масла — 30-40 минут, замена колодок — 1-2 часа, ремонт двигателя — от нескольких часов до нескольких дней.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">Работаете ли вы с иномарками?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Да, работаю с японскими автомобилями (Honda, Toyota и другие). Специализируюсь на двигателях D-серии, 3S-FE, 5E-FE и других популярных моторах.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Звоните или пишите — обсудим ваш случай и назовём цену
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Виталий</h3>
              <p className="text-muted-foreground text-lg">
                Автомеханик с опытом работы. Принимаю автомобили в своём гараже. Специализируюсь на японских автомобилях Honda и Toyota.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                  <a href="tel:89294390444" className="text-lg font-semibold text-primary hover:underline">
                    8 (929) 439-04-44
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">
                    Написать в мессенджер
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 text-lg" asChild>
                <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 text-lg" asChild>
                <a href="tel:89294390444">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Car" size={32} />
            <span className="text-2xl font-bold">Автосервис в гараже</span>
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Профессиональный ремонт автомобилей в моём гараже
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="tel:89294390444" className="hover:text-accent transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Виталий. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;