import AreasOfPracticeSection from "@/components/areas-of-practice/AreasOfPracticeSection";
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
    </div>
  );
};

export default App;
