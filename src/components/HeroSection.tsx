import { ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center pt-20" style={{
    background: 'var(--gradient-hero)'
  }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center animate-float opacity-60">
          <TrendingUp className="text-primary" size={28} />
        </div>
        <div className="absolute top-1/3 right-20 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center animate-float opacity-60" style={{
        animationDelay: '1s'
      }}>
          <Target className="text-primary" size={24} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center animate-float opacity-60" style={{
        animationDelay: '0.5s'
      }}>
          <BarChart3 className="text-primary" size={20} />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up text-3xl mx-0 my-[25px]">
            A assessoria estratégica que transforma empresas em{' '}
            <span className="text-gradient">operações lucrativas e escaláveis</span>
          </h1>
          
          <p style={{
          animationDelay: '0.2s'
        }} className="sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-base">
            Método validado, estratégia personalizada e acompanhamento próximo para levar seu negócio ao próximo nível de crescimento previsível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <a href="#contato" className="btn-primary flex items-center gap-2 text-lg">
              Agende uma reunião estratégica
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">+150</div>
              <div className="text-sm text-muted-foreground mt-2">Empresas atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">98%</div>
              <div className="text-sm text-muted-foreground mt-2">Taxa de satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">3x</div>
              <div className="text-sm text-muted-foreground mt-2">Crescimento médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;