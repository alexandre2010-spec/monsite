import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Sparkles, 
  Mail, 
  ArrowRight, 
  Bot, 
  Code, 
  Lightbulb,
  Rocket,
  Star,
  CheckCircle
} from 'lucide-react';

function App() {
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = 'mailto:ai.menu.website@gmail.com';
  };

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Fonctionnalité en développement",
      description: "Cette fonctionnalité n'est pas encore implémentée—mais n'hésitez pas à la demander dans votre prochain message ! 🚀",
      duration: 4000,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>GPT Creator Pro - Services de Création d'IA Personnalisés</title>
        <meta name="description" content="Créez des GPT sur mesure pour votre entreprise. Solutions d'intelligence artificielle avancées, développement de chatbots personnalisés et automatisation intelligente." />
        <meta property="og:title" content="GPT Creator Pro - Services de Création d'IA Personnalisés" />
        <meta property="og:description" content="Transformez votre entreprise avec des GPT personnalisés. Solutions IA innovantes, chatbots intelligents et automatisation sur mesure." />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 tech-grid opacity-30"></div>
        <div className="fixed inset-0 circuit-pattern"></div>
        
        {/* Floating Elements */}
        <div className="fixed top-20 left-10 floating-animation">
          <div className="w-4 h-4 bg-blue-500 rounded-full glow-border opacity-60"></div>
        </div>
        <div className="fixed top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-purple-500 rounded-full glow-border opacity-40"></div>
        </div>
        <div className="fixed bottom-32 left-20 floating-animation" style={{ animationDelay: '4s' }}>
          <div className="w-3 h-3 bg-cyan-500 rounded-full glow-border opacity-50"></div>
        </div>

        {/* Header */}
        <motion.header 
          className="relative z-10 p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="w-8 h-8 text-blue-400 glow-text" />
                <div className="absolute inset-0 bg-blue-400 blur-lg opacity-30 rounded-full"></div>
              </div>
              <span className="text-2xl font-orbitron font-bold glow-text">GPT Creator Pro</span>
            </div>
            
            <Button 
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full pulse-glow transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Nous Contacter
            </Button>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          className="relative z-10 px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 glow-text">
                Créez Votre
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  GPT Personnalisé
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transformez votre entreprise avec des solutions d'intelligence artificielle sur mesure. 
                Nous créons des GPT personnalisés qui révolutionnent votre façon de travailler.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <Button 
                onClick={handleEmailClick}
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 text-white font-bold px-12 py-6 text-xl rounded-full pulse-glow transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Démarrer Votre Projet IA
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 glow-border hologram-effect">
                <Bot className="w-16 h-16 text-blue-400 mx-auto mb-4 glow-text" />
                <h3 className="text-2xl font-orbitron font-bold mb-4">Chatbots Intelligents</h3>
                <p className="text-gray-300">Des assistants IA qui comprennent votre métier et interagissent naturellement avec vos clients.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 glow-border hologram-effect">
                <Code className="w-16 h-16 text-purple-400 mx-auto mb-4 glow-text" />
                <h3 className="text-2xl font-orbitron font-bold mb-4">Automatisation Avancée</h3>
                <p className="text-gray-300">Automatisez vos processus complexes avec des GPT qui s'adaptent à vos besoins spécifiques.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 glow-border hologram-effect">
                <Lightbulb className="w-16 h-16 text-cyan-400 mx-auto mb-4 glow-text" />
                <h3 className="text-2xl font-orbitron font-bold mb-4">Solutions Sur Mesure</h3>
                <p className="text-gray-300">Chaque GPT est unique, conçu spécialement pour répondre aux défis de votre entreprise.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="relative z-10 px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-orbitron font-bold mb-6 glow-text">Nos Services IA</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                De la conception à la mise en production, nous vous accompagnons dans votre transformation digitale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "Analyse & Conception",
                  description: "Étude approfondie de vos besoins pour concevoir le GPT parfait",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Cpu className="w-12 h-12" />,
                  title: "Développement Custom",
                  description: "Création de GPT personnalisés avec des capacités uniques",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Optimisation Performance",
                  description: "Fine-tuning pour des performances optimales et une efficacité maximale",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Sparkles className="w-12 h-12" />,
                  title: "Intégration Seamless",
                  description: "Intégration fluide dans vos systèmes existants",
                  color: "from-green-500 to-teal-500"
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Formation & Support",
                  description: "Formation de vos équipes et support technique continu",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <CheckCircle className="w-12 h-12" />,
                  title: "Maintenance & Évolution",
                  description: "Mise à jour et amélioration continue de vos GPT",
                  color: "from-red-500 to-pink-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 glow-border transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl w-fit mb-6 glow-border`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="relative z-10 px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-3xl p-12 glow-border">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 glow-text">
                Prêt à Révolutionner Votre Entreprise ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Rejoignez les entreprises qui ont déjà transformé leur activité grâce à l'IA. 
                Contactez-nous dès aujourd'hui pour discuter de votre projet.
              </p>
              
              <Button 
                onClick={handleEmailClick}
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 text-white font-bold px-16 py-8 text-2xl rounded-full pulse-glow transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <Mail className="w-8 h-8 mr-4" />
                Contactez-Nous Maintenant
                <Sparkles className="w-8 h-8 ml-4" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="relative z-10 px-6 py-12 border-t border-blue-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-blue-400 glow-text" />
              <span className="text-2xl font-orbitron font-bold glow-text">GPT Creator Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour l'innovation en intelligence artificielle
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 GPT Creator Pro. Tous droits réservés.
            </p>
          </div>
        </motion.footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
