import AreasOfPracticeSection from "@/components/areas-of-practice/AreasOfPracticeSection";
import ContactBar from "@/components/ContactBar";
import BackToTop from "@/components/extras/BackToTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";

const App = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <AreasOfPracticeSection />
      <BackToTop />
      <Footer />
      <ContactBar />
    </div>
  );
};

export default App;
