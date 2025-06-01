import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className='aboutUs'>
            <div className="aboutUs-containor">
                <div className="introduce-section">
                    <div className="introduce-section-text">
                        <p>
                            <strong>فروشگاه لوازم آرایشی و بهداشتی مبینا</strong> فعالیت خود را از سال 1401   با هدف ارائه‌ی محصولات اصل، باکیفیت و مورد اعتماد در حوزه زیبایی و سلامت آغاز کرد. ما در مبینا باور داریم که زیبایی و بهداشت فردی، حق هر انسان است؛ به همین دلیل همواره در تلاشیم تا با تأمین محصولات از برترین برندهای داخلی و خارجی، تجربه‌ای رضایت‌بخش از خرید را برای شما فراهم کنیم.
                        </p>

                        <p>
                            در حال حاضر، فروشگاه مبینا با اتکا به تیمی متشکل از <strong>۱۵ نیروی جوان، با انگیزه و متخصص</strong>، به‌صورت حضوری و آنلاین مشغول به ارائه خدمات است. همچنین وجود یک انبار اختصاصی، این امکان را برای ما فراهم کرده تا موجودی کالاها را به‌صورت منظم مدیریت و سفارش‌ها را سریع‌تر پردازش و ارسال کنیم.
                        </p>

                        <p>
                            ما افتخار همکاری با برندهای معتبر و محبوبی نظیر <strong>فیروز، نستله، لافارر</strong> و بسیاری از برندهای شناخته‌شده دیگر را داریم؛ برندهایی که کیفیت بالای آن‌ها سال‌هاست مورد تأیید مشتریان قرار گرفته است.
                        </p>

                        <p>
                            در فروشگاه مبینا، رضایت مشتریان فقط یک شعار نیست؛ بلکه اصلی‌ترین معیار موفقیت ماست.
                        </p>
                    </div>
                    <img src="./imgs/aboutUs-introduce.png" alt="" className="introduce-section-img" />


                </div>
                <div className="ourVision-section">
                    <div className="ourVision-section-text"> ما را انتخاب میکنید چون :  </div>
                    <div className="ourVision-section-imgs">
                        <div className="ourVision-containor">
                            <img src="/imgs/aboutUs-ourVision1.png" alt="" className="ourVision-section-img" />
                            <b> پشتیبانی سریع</b>
                        </div>
                        <div className="ourVision-containor">
                            <img src="/imgs/aboutUs-ourVision2.png" alt="" className="ourVision-section-img" />
                            <b>تنوع بالا</b>
                        </div>
                        <div className="ourVision-containor">
                            <img src="/imgs/aboutUs-ourVision3.png" alt="" className="ourVision-section-img" />
                            <b>کیفیت مطلوب</b>
                        </div>
                        <div className="ourVision-containor">
                            <img src="/imgs/aboutUs-ourVision4.png" alt="" className="ourVision-section-img" />
                            <b>تحویل بموقع </b>
                        </div>
                    </div>
                </div>
                <div className="contactUs-section">
                    <img src="/imgs/aboutUs-contactUs.png" alt="" className="contactUs-section-img" />
                    <div className="contactUs-section-form">
                        <p className="contactUs-section-title"> با ما در ارتباط باشید💙</p>
                        <p className="contactUs-section-details">شماره تماس : 021-12345678</p>
                        <p className="contactUs-section-details">صفحه اینستاگرام : MobinaStore</p>
                        <p className="contactUs-section-details">چنل یوتوب : ThisIsMobinaStore</p>
                        <textarea name="comment" id="comment"></textarea>
                        <button className="sendComment">ارسال</button>
                    </div>
                </div>
                <div className="ourTeam-section">
                    <div className="outTeam-section-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </div>
                </div>
            </div>
        </div>
    )
}
