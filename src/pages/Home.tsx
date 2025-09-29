import React from "react";
import { Brush, LayoutDashboard, MonitorSmartphone, Move } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-semibold mb-10">
              Just{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Build It
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Design and build stunning responsive websites effortlessly. Drag,
              drop, and customize components — no code required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 my-20">
              <Link
                to="/build-site"
                className="flex flex-row justify-center gap-2 items-center px-6 py-3 rounded-lg bg-gradient-primary cursor-pointer text-white font-extrabold hover:bg-gradient-secondary hover:scale-105 transition-all"
              >
                <p>Blank Canvas</p>
                <Brush className="size-4" />
              </Link>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up mt-32 mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="neo-blur rounded-xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Designing</h3>
              <p className="text-muted-foreground">
                Choose from ready-made components or start with a blank canvas
                to bring your ideas to life instantly.
              </p>
            </div>

            <div className="neo-blur rounded-xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <Move className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customize & Arrange
              </h3>
              <p className="text-muted-foreground">
                Drag and drop elements, adjust layouts, and fine-tune styles to
                create fully responsive designs your way.
              </p>
            </div>

            <div className="neo-blur rounded-xl p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <MonitorSmartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Preview & Export</h3>
              <p className="text-muted-foreground">
                See your site in action across device sizes and export the code
                when you're ready to go live.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
