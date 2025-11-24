import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('wood');
  const [selectedType, setSelectedType] = useState('straight');

  const services = [
    {
      icon: 'Ruler',
      title: 'Прямые одномаршевые',
      description: 'Надёжные лестницы для гаражей и подвалов',
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Waypoints',
      title: 'Приставные лестницы',
      description: 'Компактное решение для чердаков',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Layers',
      title: 'Складные модели',
      description: 'Экономия пространства в помещении',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Grid2x2',
      title: 'С площадкой',
      description: 'Удобный доступ на высоту',
      price: 'от 18 000 ₽'
    },
    {
      icon: 'Minimize2',
      title: 'Угловые решения',
      description: 'Оптимальное использование пространства',
      price: 'от 16 000 ₽'
    },
    {
      icon: 'Factory',
      title: 'Для смотровых ям',
      description: 'Прочная конструкция для гаража',
      price: 'от 10 000 ₽'
    }
  ];

  const workSteps = [
    { 
      number: '01', 
      title: 'Связь и консультация', 
      description: 'Обсудим ваши пожелания, проведём замеры при необходимости' 
    },
    { 
      number: '02', 
      title: 'Проектирование', 
      description: 'Создам чертёж с учётом параметров вашего проёма' 
    },
    { 
      number: '03', 
      title: 'Изготовление', 
      description: 'Работаю с качественными материалами, срок 3-10 дней' 
    },
    { 
      number: '04', 
      title: 'Установка', 
      description: 'Монтаж и финальная проверка конструкции (по договорённости)' 
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/39936cb1-92ab-4ad4-b173-f7950d4eef2a.jpg',
      title: 'Деревянная лестница для гаража',
      description: 'Прямая одномаршевая конструкция из сосны'
    },
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/386feada-c9e5-4177-a746-240939efa1d2.jpg',
      title: 'Складная металлическая лестница',
      description: 'Компактное решение для чердака'
    },
    {
      image: 'https://cdn.poehali.dev/projects/50afb68f-4fc1-4a02-b708-dbcc0c3ab8ce/files/a4c4b0e0-85b5-4845-9c5c-700796b404da.jpg',
      title: 'Лестница с площадкой',
      description: 'Комбинированная конструкция дерево + металл'
    }
  ];

  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      straight: 12000,
      attached: 8000,
      folding: 15000,
      platform: 18000,
      corner: 16000
    };

    const materialMultipliers: Record<string, number> = {
      wood: 1,
      metal: 1.3,
      combined: 1.5
    };

    const basePrice = basePrices[selectedType] || 12000;
    const multiplier = materialMultipliers[selectedMaterial] || 1;
    return Math.round(basePrice * multiplier);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Hammer" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Мастерская лестниц</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#process" className="hover:text-primary transition-colors">Как работаем</a>
            <a href="#price" className="hover:text-primary transition-colors">Цены</a>
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

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Надёжные лестницы<br />для вашего хозяйства
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Изготовление качественных лестниц для гаражей, чердаков и подсобных помещений. 
            Индивидуальный подход, прочные материалы, разумные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contacts">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать расчёт
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#portfolio">
                <Icon name="Images" size={20} className="mr-2" />
                Посмотреть работы
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Award', label: 'Гарантия качества' },
              { icon: 'Clock', label: 'Срок 3-10 дней' },
              { icon: 'Shield', label: 'Прочные материалы' },
              { icon: 'Wrench', label: 'Установка под ключ' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
                <Icon name={item.icon} size={32} className="text-primary" />
                <span className="text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Подберём оптимальное решение для вашего помещения
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#contacts">Заказать</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры выполненных проектов
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
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

      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простой и прозрачный процесс от заказа до установки
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {workSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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

      <section id="price" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Расчёт стоимости</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Узнайте примерную стоимость вашей лестницы
          </p>
          
          <Card className="p-8">
            <div className="space-y-8">
              <div>
                <label className="text-lg font-semibold mb-4 block">Выберите тип лестницы</label>
                <Tabs value={selectedType} onValueChange={setSelectedType}>
                  <TabsList className="grid grid-cols-2 lg:grid-cols-5 h-auto">
                    <TabsTrigger value="straight" className="py-3">Прямая</TabsTrigger>
                    <TabsTrigger value="attached" className="py-3">Приставная</TabsTrigger>
                    <TabsTrigger value="folding" className="py-3">Складная</TabsTrigger>
                    <TabsTrigger value="platform" className="py-3">С площадкой</TabsTrigger>
                    <TabsTrigger value="corner" className="py-3">Угловая</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div>
                <label className="text-lg font-semibold mb-4 block">Материал</label>
                <Tabs value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <TabsList className="grid grid-cols-3 h-auto">
                    <TabsTrigger value="wood" className="py-3">
                      <Icon name="Trees" size={18} className="mr-2" />
                      Дерево
                    </TabsTrigger>
                    <TabsTrigger value="metal" className="py-3">
                      <Icon name="Box" size={18} className="mr-2" />
                      Металл
                    </TabsTrigger>
                    <TabsTrigger value="combined" className="py-3">
                      <Icon name="Layers" size={18} className="mr-2" />
                      Комбинированная
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg text-center">
                <p className="text-muted-foreground mb-2">Примерная стоимость:</p>
                <p className="text-5xl font-bold text-primary mb-4">{calculatePrice().toLocaleString()} ₽</p>
                <p className="text-sm text-muted-foreground">
                  * Финальная стоимость рассчитывается после замеров с учётом всех пожеланий
                </p>
              </div>
              
              <Button size="lg" className="w-full" asChild>
                <a href="#contacts">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Заказать точный расчёт
                </a>
              </Button>
            </div>
          </Card>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Что влияет на стоимость?</h3>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Тип конструкции</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Простые прямые лестницы дешевле, чем складные или угловые конструкции с дополнительными механизмами.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Материалы</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Дерево дешевле металла. Комбинированные решения требуют больше времени на изготовление.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Размеры</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Высота подъёма, ширина ступеней и общая длина конструкции влияют на количество материала.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Дополнительные опции</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Покраска, обработка защитными составами, установка перил, монтаж — всё это оплачивается отдельно.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь со мной удобным способом
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <a href="tel:89294390444" className="text-primary hover:underline text-xl">
                    8 (929) 439-04-44
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:vitaliy-chernov-2012@mail.ru" className="text-primary hover:underline break-all">
                    vitaliy-chernov-2012@mail.ru
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="tel:89294390444">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </a>
            </Button>
          </div>
          
          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Icon name="User" size={48} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Виталий</h3>
                <p className="text-muted-foreground text-lg">
                  Мастер по изготовлению лестниц. Работаю с деревом и металлом более 10 лет. 
                  Гарантирую качество, соблюдение сроков и индивидуальный подход к каждому заказу.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Hammer" size={32} />
            <span className="text-2xl font-bold">Мастерская лестниц</span>
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Изготовление надёжных лестниц для гаражей, чердаков и подсобных помещений
          </p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="tel:89294390444" className="hover:text-accent transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="mailto:vitaliy-chernov-2012@mail.ru" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="https://wa.me/89294390444" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Мастерская лестниц. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
