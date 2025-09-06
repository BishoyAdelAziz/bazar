// import { Link } from "react-router-dom";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function SellerGuidance() {
  return (
    <>
      <Header />

      <div className="sellerGuidance">
        <div className="title">
          <h2>الشات بوت</h2>
          <p> اسال سؤال</p>
        </div>

        <div className="content">
          <section>
            <h3>نظام البيع و الشراء:</h3>
            <p>
              يقدم موقعنا طريقة سهلة جدا لعرض منتجاتك للبيع لعدد كبير من الناس
              كل ما عليك هو الدخول لصفحة “اضف اعلانك” و ملئ بيانات المنتج و نشره
              بدون دفع اي رسوم.
            </p>
            <p>
              و عندما يريد شخص ان يشتري منك هذا المنتج سيتواصل معك عن طريق رقم
              الهاتف الذي ستضعه في اعلانك و تتفقان على الالتقاء لاتمام عملية
              البيع.
            </p>
            <p>
              و نحن في BAZAR من حقنا طلب نسبة ربح من البيعة ان تمت عملية الشراء
              من خلال موقعنا و ستكون النسبة واضحة و مكتوبة لك قبل عرض منتجك حتى
              و سنطلب من كل بائع ان يدفع هذه النسبة من خلال تحويل بنكي لحسابنا ,
              و نحن هنا نعمل بموجب الامانة الشخصية لديك!
            </p>
            <p>بمعنى انه لن يكون هناك من يجربك على الدفع الا امانتك.</p>
            <p>شكرا لتفهمكم و نثق بكم </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SellerGuidance;
