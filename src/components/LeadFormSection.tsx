import { useState } from 'react';
import { Send, Shield, Phone, FileText, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: object) => void;
  }
}

const CALENDLY_URL = 'https://calendly.com/raulkenedd9/30min';

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    segmento: '',
    faturamento: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Insert lead into Supabase
      const { error } = await supabase
        .from('leads')
        .insert({
          nome: formData.nome.trim(),
          email: formData.email.trim().toLowerCase(),
          telefone: formData.telefone.trim(),
          empresa: formData.empresa.trim(),
          segmento: formData.segmento,
          faturamento: formData.faturamento,
        });

      if (error) {
        console.error('Error saving lead:', error);
        toast.error('Erro ao enviar. Por favor, tente novamente.');
        setIsSubmitting(false);
        return;
      }

      // Track Lead event on Meta Pixel
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: 'Formulário de Contato',
          content_category: formData.segmento,
        });
      }

      toast.success('Dados enviados com sucesso! Redirecionando para agendamento...');

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        segmento: '',
        faturamento: '',
      });

      // Track Schedule event and redirect to Calendly after a short delay
      setTimeout(() => {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Schedule', {
            content_name: 'Agendamento Calendly',
          });
        }
        window.location.href = CALENDLY_URL;
      }, 1500);

    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Erro inesperado. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    {
      icon: FileText,
      number: 'Passo 1',
      title: 'Complete o formulário',
      description: 'Forneça suas informações de contato. Garantimos a segurança total de seus dados.',
    },
    {
      icon: Phone,
      number: 'Passo 2',
      title: 'Agende sua reunião',
      description: 'Após enviar o formulário, você será redirecionado para escolher o melhor horário.',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="section-container">
        <div className="card-glass max-w-6xl mx-auto p-8 lg:p-12 border-primary/20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Cadastre-se e receba o contato do nosso time!
              </h2>
              
              <div className="space-y-8 mt-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-1">{step.number}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="input-field"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="input-field"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  maxLength={20}
                  className="input-field"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="empresa"
                  placeholder="Nome da empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  className="input-field"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="relative">
                <select
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  required
                  className="select-field"
                  disabled={isSubmitting}
                >
                  <option value="" disabled>Qual seu segmento?</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="varejo">Varejo</option>
                  <option value="servicos">Serviços</option>
                  <option value="industria">Indústria</option>
                  <option value="saude">Saúde</option>
                  <option value="educacao">Educação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="relative">
                <select
                  name="faturamento"
                  value={formData.faturamento}
                  onChange={handleChange}
                  required
                  className="select-field"
                  disabled={isSubmitting}
                >
                  <option value="" disabled>Qual o seu faturamento mensal?</option>
                  <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                  <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                  <option value="500k-1m">R$ 500.000 - R$ 1 milhão</option>
                  <option value="acima-1m">Acima de R$ 1 milhão</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Receber mais informações
                    <Send size={18} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
                <Shield size={16} className="text-primary" />
                <span>Seus dados estão 100% seguros e serão usados apenas para contato.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
