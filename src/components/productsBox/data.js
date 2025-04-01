const products = [
    { id: 1, name: 'پد ضد آکنه لافارر', price: 538_000, description: `پد ضد آکنه لافارر مناسب صورت و نواحی مستعد آکنه و حاوی نیاسین آمید 10% و زینک پی سی آ 1%   \nترکیب نیاسین آمید و زینک در این پد می تواند باعث کمتر شدن قرمزی صورت، کمک به بهبود جای جوش و حفظ تعادل چربی و در نهایت منجر به صاف شدن و لطافت پوست شود. \nپد ضد جوش لافارر حاوی نیاسین آمید (ویتامین B3)، زینک پی سی آ، سدیم هیالورونات، روغن درخت چای و سدیم پی سی آ است.`, image: '/imgs/antiAcnePad.jpg', category: 'زیبایی' },
    { id: 2, name: ' ژل شستشو بهداشتی بانوان لافارر ', price: 343_350, description: `ژل شستشوی بهداشتی بانوان لافارر مناسب برای دوشیزگان و بانوان تا قبل از دوران یائسگی حاوی عصاره گیاهان بابونه، مالوا و آلوئه‌ورا، بیولین، لاکتیک اسید، آلفابیزابولول و پلی کواترنیوم 10 می‌باشد که موجب کمک به پیشگیری از عفونت های قارچی و میکروبی واژن، رفع بوی نامطبوع ناحیه تناسلی، حفظ رطوبت طبیعی غشاء مخاط واژن می‌گردد.\nعصاره های گیاهی به کار رفته در ژل شستشوی واژن باعث تنظیم PH ناحیه تناسلی، افزایش فعالیت باکتری های مفید، تسکین دهنده التهاب، سوزش، خارش و حساسیت می‌شوند.`, image: '/imgs/genitalGel.jpg', category: 'بهداشتی' },
    { id: 3, name: '  سرم ویتامین سی لافارر ', price: 1_771_500, description: `سرم ویتامین سی 20 درصد لافارر ( ضد پیری و روشن کننده پوست)\nسرم ویتامین سی 20 درصد لافارر حاوی 20% ویتامین C (آسکوربیک اسید) و ویتامین E (توکوفریل استات) بوده که موجب لایه‌برداری و روشن‌شدن پوست، کمک به بهبود ساختار پوست و تحریک تولید کلاژن و الاستین پوست می‌شود.`, image: '/imgs/vitaminC.jpg', category: 'زیبایی' },
    { id: 4, name: ' کرم ضدآفتاب ضدلک لافارر ', price: 7761_100, description: `کرم ضد آفتاب و ضد لک رنگی مخصوص پوست‌های چرب و مستعد آکنه رنگ SPF40+ لافارر، در سه رنگ، روشن، متوسط و تیره طراحی شده است. این محصول حاوی عصاره گیاهان شیرین بیان، بیربری، سارمنتوزا ساکسی فراگا، پاپایا و گواوا است که در کاهش تولید رنگدانه ملانین موثر بوده و علاوه بر ممانعت از بروز لک، به کاهش لک‌های پوستی نیز کمک می‌کند.\nاستفاده از مواد موثره تخصصی مؤثر در کنترل چربی که شامل عصاره چوب درخت انانتیا کلرانتا و زینک پی سی آ هستند، علاوه بر کمک به کاهش ترشح چربی، از بروز آکنه نیز جلوگیری می‌کنند.\nدیگر مواد موثر کرم ضد آفتاب و ضد لک رنگی مخصوص پوست های چرب و مستعد آکنه SPF40+ لافارر، مانند آلوئه‌ورا، سدیم‌هیالورونات، سدیم‌لاکتات و اوره نیز، در حفظ رطوبت پوست نقش مهمی دارند.\nکرم‌ ضد آفتاب با بافتی سبک و جذب بسیار سریع، به خوبی از پوست، در برابر اشعه های مضر UV-A و UV-B محافظت می‌کنند.`, image: '/imgs/sunScreen.jpg', category: 'زیبایی' },
    { id: 5, name: '  ژل روشن کننده پوست لافارر ', price: 527_200, description: `ژل روشن کننده پوست لافارر جهت بهبود تیرگی، کمک به روشن و شفاف نمودن کشاله ران، زیر بغل، زانو، آرنج، قوزک پا، پشت دست، نواحی تناسلی و سایر نواحی تیره بدن مورد استفاده قرار می‌گیرد.\nژل روشن کننده پوست لافارر حاوی عصاره‌های گیاهی سیب زمینی آفریقایی، تارا، سارمنتوزا ساکسی فراگا، پاپایا، گواوا، شیرین بیان، بیربری، ریشه توت و لیمو، آلفا آربوتین و ویتامین‌های B3 و A است.`, image: '/imgs/brighteningGel.jpg', category: 'زیبایی' },
    { id: 6, name: '  سرم ضد آکنه لافارر ', price: 683_750, description: `سرم ضد آکنه لافارر حاوی آزتینول حاوی 15% ماده مؤثره آزلائیک اسید می‌باشد که در کنار روغن درخت چای، ویتامین آ و ترکیبات ارگانیک به منظور کمک به کاهش آکنه‌های خفیف تا متوسط ولگاریس و نیز بهبود عارضه پوستی روزاسه فرموله شده است.\nاین محصول قادر است با جذب سریع در زمانی کوتاه، نه تنها به کاهش آکنه کمک می‌کند بلکه موجب بهبود تغییر رنگ ناشی از آثار به جا مانده از آکنه نیز می‌شود.\nهمچنین سرم ضد آکنه لافارر برای نواحی مستعد آکنه نیز مناسب می‌باشد و از بروز آکنه در این نواحی پیشگیری می‌کند.\nآزلائیک اسید موجود در این محصول دارای ویژگی ضد باکتری، کمک به متعادل سازی ساخت کراتین و تنظیم ترشح چربی است و نیز در کاهش تغییر رنگ ناشی از آثار به جا مانده از آکنه بسیار مؤثر عمل می‌کند.\nروغن درخت چای یک ضد عفونی کننده طبیعی است، از تکثیر باکتری‎‌ها ممانعت به عمل می‌آورد، به کنترل ترشح چربی کمک می‌کند، سلول‌های مرده پوست را حذف و نیز التهاب ناشی از آکنه را کاهش می‌دهد.\nویتامین A یک آنتی اکسیدان قوی است که موجب لایه برداری، متعادل سازی ساخت کراتین و کاهش پوسته ریزی شده و با ممانعت از انسداد منافذ پوستی از تشکیل آکنه پیشگیری می‌کند که این روند موجب بهبود رنگ لک‌های پوستی نیز کمک می‌کند. در ضمن بانوان می‌توانند از این محصول قبل از آرایش نیز استفاده نمایند.`, image: '/imgs/antiAcne.jpg', category: 'زیبایی' },
    { id: 7, name: '  کرم تخصصی دور چشم لافارر ', price: 821_100, description: `چشم و نواحی اطراف آن عامل مهمی در زیبایی چهره محسوب می‌شوند. کرم تخصصی رفع پف و چین و چروک دور چشم لافارر دارای ترکیبات گیاهی موثری مانند عصاره یاسمین، عصاره آرنیکا و عصاره زالزالک است که بر روی یکدیگر اثر هم افزایی داشته و با بهبود عملکرد یکدیگر سبب کاهش چین و چروک و کاهش پف دور چشم می‌شوند.\nهسپریدین متیل چالکون موجود در این محصول یک ترکیب موثر در افزایش مقاومت دیواره عروق و کاهش نفوذپذیری آن‌ها است که از این طریق به کاهش پف زیر چشم کمک می‌کند. همچنین وجود کمپلکس پپتیدهای موثر و کافئین، سبب کاهش پف زیر چشم شده و با کمک به استحکام‌بخشی به پوست این ناحیه، اثرات ضد پف و ضد چروک این کرم را افزایش می‌دهند.\nاستفاده منظم از این محصول که به طور تخصصی به منظور کاهش پف زیر چشم فرموله شده علاوه بر کاهش پف و چین وچروک دور چشم، سبب آبرسانی، افزایش شفافیت و شادابی پوست اطراف چشم می‌شود.`, image: '/imgs/eyesCream.jpg', category: 'زیبایی' },
    { id: 8, name: ' شامپو بدن کودک فیروزه، 300 میلی‌لیتر', price: 49_400, description: `عصاره‌ی گیاه گوار دارای خاصیت نرم‌کنندگی بسیار بالایی است و علاوه بر تقویت سیستم دفاعی طبیعی پوست به کاهش اثرات التهاب و قرمزی پوست هم کمک می‌کند.\n گلیسیرین باعث جذب رطوبت بیشتر در سطح پوست و طراوت آن می‌شود. گلیسیرین می‌‌تواند در کاهش التهاب‌های پوستی کمک‌کننده باشد.\nشامپو بدن کودک حاوی گوار و گلیسیرین با ترکیب ویژگی‌های این دو گیاه علاوه بر شویندگی مناسب منجر به نرمی و لطافت پوست شما و کودک دلبندتان خواهد شد. پوست‌های شدیداً خشک، درخشان نیستند و متاسفانه نقطه و مرکزی برای بروز عفونت‌های پوستی می‌باشند لذا اگر دارای پوست خشک و حساس هستید استفاده روزمره از این شامپو در پیشگیری و درمان خشکی پوست بسیار موثر خواهد بود. شامپو بدن گوآر و گلیسیرین به دلیل تنظیم pH پوست، برای مصرف کودکان و بزرگسالان دارای پوست‌های حساس مناسب است\nطریقه مصرف:\nابتدا بدن کودک دلبندتان را با آب گرم خیس کرده و سپس مقدار مناسبی از شامپو روی دست یا اسفنج نم‌دار ریخته و به آرامی بدن کودک را شستشو دهید و سپس آبکشی نمایید.`, image: '/imgs/babyShampoo300.jpg', category: 'کودک' },
    { id: 9, name: ' صابون گلیسیرنه فیروز ', price: 49_400, description: `تا به حال اسمی از شکارچی رطوبت به گوش شما خورده است؟ \nگلیسیرین یک شکارچی رطوبت منحصر به فرد است. چون هیچ رطوبتی اعم از رطوبت هوا و رطوبت لایه‌های زیرین پوست نمی‌تواند از دام این شکارچی رطوبت فرار کند. گلیسرین از این رطوبت جذب شده استفاده کرده و به پوست شما آبرسانی می کند. 25 درصد از مواد تشکیل دهنده صابون گلیسیرینه فیروز، از این ماده شگفت انگیز تشکیل شده است. پس قطعا این محصول یک آبرسان فوق العاده پوست است. \nاگر شما پوستی خشک و اگزمایی دارید، صابون گلیسیرینه فیروز در کنارتان است تا پوستی نرم و لطیف را به شما هدیه دهد. این محصول برای پوست کودکان فرموله شده است، پس شما می‌توانید از شویندگی ملایمش اطمینان داشته باشید. در صابون گلیسیرینه فیروز از خاصیت نرم و مرطوب کنندگی روغن کرچک، روغن نارگیل نیز بهره گرفته شده است. این محصول دارای کاربردهایی مانند شست و شوی آرایش و لیفت ابرو نیز می‌باشد. شما می توانید صابون گلیسیرینه فیروز را از طریق فروشگاه اینترنتی فیروز مهمان خانه هایتان کنید.`, image: '/imgs/glycerinSoap.jpg', category: 'کودک' },
    { id: 10, name: ' شامپو بدن کودک فیروزه، 450میلی‌لیتر', price: 66_400, description: `عصاره‌ی گیاه گوار دارای خاصیت نرم‌کنندگی بسیار بالایی است و علاوه بر تقویت سیستم دفاعی طبیعی پوست به کاهش اثرات التهاب و قرمزی پوست هم کمک می‌کند.\n گلیسیرین باعث جذب رطوبت بیشتر در سطح پوست و طراوت آن می‌شود. گلیسیرین می‌‌تواند در کاهش التهاب‌های پوستی کمک‌کننده باشد.\nشامپو بدن کودک حاوی گوار و گلیسیرین با ترکیب ویژگی‌های این دو گیاه علاوه بر شویندگی مناسب منجر به نرمی و لطافت پوست شما و کودک دلبندتان خواهد شد. پوست‌های شدیداً خشک، درخشان نیستند و متاسفانه نقطه و مرکزی برای بروز عفونت‌های پوستی می‌باشند لذا اگر دارای پوست خشک و حساس هستید استفاده روزمره از این شامپو در پیشگیری و درمان خشکی پوست بسیار موثر خواهد بود. شامپو بدن گوآر و گلیسیرین به دلیل تنظیم pH پوست، برای مصرف کودکان و بزرگسالان دارای پوست‌های حساس مناسب است\nطریقه مصرف:\nابتدا بدن کودک دلبندتان را با آب گرم خیس کرده و سپس مقدار مناسبی از شامپو روی دست یا اسفنج نم‌دار ریخته و به آرامی بدن کودک را شستشو دهید و سپس آبکشی نمایید.`, image: '/imgs/babyShampoo450.jpg', category: 'کودک' },
    { id: 11, name: '  فوم دستشویی کودک فیروز ', price: 49_700, description: `مایع دستشویی فیروز در چهار رنگ و در حجم 300 گرم، ویژه‌ی کودکان تولید شده است که به دلیل خروج مایع شوینده به صورت فوم، برای کودکان جالب است و باعث ترغیب بیشتر آن‌ها به شستن دست‌هایشان می‌شود. \nدر ترکیبات فوم دستشویی فیروز از موادی استفاده شده که باعث چرب‌ شدن و ایجاد احساس لیزی روی پوست کودک نشود. این فوم حاوی مواد شوینده‌ی کاملا ملایم و سازگار با پوست‌های حساس است و به دلیل داشتن مواد مرطوب‌ کننده، از خشک‌ شدن آن جلوگیری می‌کند. فوم دستشویی فیروز با رایحه‌ای ملایم و دلپذیر عرضه شده است. این محصول با تولید کف فراوان، نیازی به مالش دست‌ها، که ممکن است از حوصله ی کودک خارج باشد، ندارد. همچنین به‌ راحتی آبکشی می‌شود و اثری از آن باقی نمی‌ماند.`, image: '/imgs/babyToiletFoam.jpg', category: 'کودک' },
    { id: 12, name: ' بالم لب آبرسان شیگلم ', price: 49_400, description: `بالم لب آبرسان شیگلم Crystal Glaze Moisturizing Lip Care یک محصول محبوب از برند SHEGLAM است که برای مراقبت و زیبایی لب ها طراحی شده است. این محصول با ترکیبی از مواد مرطوب کننده و براق کننده، لب ها را نرم و لطیف می کند و در عین حال به آنها جلوه ای درخشان و کریستالی می بخشد.`, image: '/imgs/libglassPink.jpg', category: 'زیبایی' },
    { id: 13, name: ' پودر بچه 200 گرمی فیروز ', price: 47_100, description: `پودر بچه 200 گرمی فیروز سالهاست که پا به پای کودکان آمده تا آنها پاسوز ادرار سوختگی نشوند. زیرا این محصول رطوبت ادرار را جذب کرده و مانع از نشستن آن روی پوست می‌شود. پودر بچه فیروز همچنین سطح پوست را به شکلی لیز می‌کند که مانع از نشستن ادرار روی آن می‌شود. بنابراین در صورت استفاده از این محصول هیچگاه شاهد ادار سوختگی نوزادتان نخواهید بود. پودر بچه فیروز خنک کننده نیز است که می‌توان از آن به منظور کاهش التهابات ناشی از اپیلاسیون، کاهش تعریق و خنک سازی نواحی مانند زیربغل استفاده کرد.\nبوی ادرار همواره برای اطرافیان بسیار ناخوشایند است. پودر بچه 200 گرمی فیروز با جذب ملوکول‌های ادرار، این حس نامطلوب را محو کرده و باعث می‌شود، همه از به آغوش کشیدن نوزاد حس خوشایندی داشته باشند. شما می‌توانید از همین خصوصیت این محصول برای محو کردن بوی نامطلوب کفش خود بهره ببرید.\nپودر بچه فیروز به دلیل استریل شدن با اشعه گاما و گاز اتیلن اکساید برای پوست ظریف نوزادان حساسیت زا نیست. به دلیل حساسیت زا نبودن این محصول می‌توان از آن برای تثبیت آرایش نیز استفاده کرد. شما می‌توانید پودر بچه 200 گرمی فیروز را از طریق فروشگاه اینترنتی فیروز خریداری کنید.`, image: '/imgs/bodyPowder.jpg', category: 'کودک' },
    { id: 14, name: ' کهنه بچه فیروز ', price: 188_900, description: 'کهنه بچه فیروز دارای قدرت جذب بالا همراه با قابلیت شستشوی مکرر و بدون هر گونه مواد حساسیت‌زا می‌باشد. این محصول برای بهداشت کودک و همچنین محیط زیست نیز مناسب است. در ساخت پوشک‌ها برای بالا بردن قدرت جذب از مواد شیمیایی استفاده می‌شود که تماس طولانی مدت آن با پوست کودک مضر است. به‌همین‌دلیل توصیه ما استفاده از کهنه بچه است، زیرا محصولی اقتصادی‌تر، سازگارتر با پوست کودک و محیط زیست می باشد', image: '/imgs/diaper.jpg', category: 'کودک' },
    { id: 15, name: ' پد بهداشتی روزانه ناولتی ', price: 55_000, description: `پد بهداشتی روزانه ناولتی مناسب استفاده در طول روز و زمان هایی است که می خواهید ترشحات را کنترل کنید. با استفاده از این پد می توانید در تمام طول روز احساس خشکی داشته باشید و همچنین از به وجود آمدن بوی نامطبوع جلوگیری می کند.\n پد روزانه کتانی ناولتی ضد حساسیت بوده و از ایجاد عفونت های میکروبی و قارچی جلوگیری می نماید. این پد بسیار نازک بوده و برای افرادی که پوست حساس دارند بسیار مناسب است. استفاده از عصاره بابونه و کرم زینک اکساید در این پد باعث شده تا در زمان استفاده، از سوزش، خشکی و دیگر ناراحتی‌های پوستی جلوگیری شود. این محصول فاقد مواد سمی، پارابن، کلراید و مواد مضر شیمیایی فرموله شده است`, image: '/imgs/dailyWomenPad.jpg', category: 'بهداشتی' },
    { id: 16, name: ' پچ تسکسن دهنده درد قاعدگی ', price: 55_000, description: `پچ تسکین دهنده درد قاعدگی" Period Pain Relief Patch" از برند دورامنس، مناسب برای تسکین درد دوران قاعدگی تولید شده است. پچ تسکین دهنده، جایگزینی مناسب برای روش های معمول و مرسوم می باشد. این پچ، فاقد هرگونه مواد شیمیایی مضر می باشد و با استفاده از تکنولوژی روز دنیا و مواد با پایه طبیعی ساخته شده است که به راحتی می توانید آن را بر روی لباس زیر خود بچسبانید و به مدت 8 ساعت از گرمای آن بهره مند شوید. \nپچ تسکین دهنده درد قاعدگی، با کاهش دردهای عضلانی می تواند گذرندن این دوران را برای زنان تسهیل کرده و از سوی دیگر بر خلاف داروهای شیمیایی و مسکن ها، هیچ تاثیر جانبی مضری نداشته و به دلیل کوچک و نازک بودن، با سادگی قابل استفاده بوده و از زیر لباس دیده نخواهد شد`, image: '/imgs/periodPain.jpg', category: 'بهداشتی' },
    { id: 17, name: ' لیوان ضدعفونی کننده کاپ قاعدگی ', price: 139_260, description: 'استریلایزر لیوافارما، یک محفظه سیلیکونی است که برای ضد عفونی کردن راحت و مطمئن کاپ قاعدگی در مایکروویو به کار می رود.', image: '/imgs/cup.jpg', category: 'بهداشتی' },
    { id: 18, name: ' بالم لب وازلین ', price: 145_000, description: `پوست پوشش دهنده لب ها نسبت به بافت سایر پوست های بدن بسیار نازک تر و حساس تر بوده و نیاز به مراقبت ویژه ای دارد. بالم لب رز وازلین کاملا پوست حساس لب ها را آبرسانی کرده و به تقویت و بازسازی ساختار آن می پردازد. بالم لب رز رنگ بسیار ملایم و صورتی به لب ها می دهد و رایحه ی رز آن بسیار دل انگیز است. به طور کلی محصولات برند وازلین دارای فرمولاسیون بسیار مغذی وغنی از خواص درمانی پوست هستند.`, image: '/imgs/vaseline.jpg', category: 'زیبایی' },
    { id: 19, name: ' بالم لب شیگلم،هلویی ', price: 1_224_000, description: `پوست لب جزء نازک ترین پوست قسمت های بدن است و رسیدگی به آن امری مهم و ضروری است . از این رو سوالی مطرح می شود که چگونه میتوانیم از پوست لب خود محافظت کنیم ؟ در پاسخ به این سوال باید به شما بگویم که کافی است از بالم لب و محصولات مشابه آن استفاده کرد. ببالم لب شیگلم SHEGLAM مخصوص بانوان بدون رنگ یکی از محصولاتی است که کمک شایانی در حفظ سلامت لب شما میکند.\nتوجه داشته باشید که این محصول برای بانوان ساخته شده است چرا؟ زیرا بالم لب شیگلم SHEGLAM دارای ویژگی هایی است که برای بانوان مناسب تر اند.\nبالم لب شیگلم بدون رنگ را میتوان در هر گونه آب و هوایی استفاده کرد و لطافت و طراوت را به لبان خود بخشید. این محصول رطوبتی 24 ساعته و طولانی مدت با ماندگاری بالا است که محافظتی بدون درخشنگی و بدون رنگ را ایجاد میکند.\nبالم لب شگلم دارای SPF 15 است و از لب های شما مقابل اشعه UVA ، UVB و اشعه های فرابنفش محافظت میکند و این بالم لب بخاطر نداشتن الکل غیر حساسیت زا بوده و برای تمامی پوست ها مناسب میباشد.\nدرون این بالم ویتامین B5 وجود دارد که این ویتامین اثرات مثبتی در سلامتی پوست و مو ایجاد میکند و همین ویتامین موجب میشود لب های خشک و ترک خورده خود را تبدیل به لب های مرطوب و شاداب بدون زخم یا ترک و خشکی کنید.`, image: '/imgs/libglassPeach.jpg', category: 'زیبایی' },
    { id: 20, name: ' بالم لب آبرسان شیگلم،بلوبری ', price: 643_000, description: `پوست لب جزء نازک ترین پوست قسمت های بدن است و رسیدگی به آن امری مهم و ضروری است . از این رو سوالی مطرح می شود که چگونه میتوانیم از پوست لب خود محافظت کنیم ؟ در پاسخ به این سوال باید به شما بگویم که کافی است از بالم لب و محصولات مشابه آن استفاده کرد. ببالم لب شیگلم SHEGLAM مخصوص بانوان بدون رنگ یکی از محصولاتی است که کمک شایانی در حفظ سلامت لب شما میکند.\nتوجه داشته باشید که این محصول برای بانوان ساخته شده است چرا؟ زیرا بالم لب شیگلم SHEGLAM دارای ویژگی هایی است که برای بانوان مناسب تر اند.\nبالم لب شیگلم بدون رنگ را میتوان در هر گونه آب و هوایی استفاده کرد و لطافت و طراوت را به لبان خود بخشید. این محصول رطوبتی 24 ساعته و طولانی مدت با ماندگاری بالا است که محافظتی بدون درخشنگی و بدون رنگ را ایجاد میکند.\nبالم لب شگلم دارای SPF 15 است و از لب های شما مقابل اشعه UVA ، UVB و اشعه های فرابنفش محافظت میکند و این بالم لب بخاطر نداشتن الکل غیر حساسیت زا بوده و برای تمامی پوست ها مناسب میباشد.\nدرون این بالم ویتامین B5 وجود دارد که این ویتامین اثرات مثبتی در سلامتی پوست و مو ایجاد میکند و همین ویتامین موجب میشود لب های خشک و ترک خورده خود را تبدیل به لب های مرطوب و شاداب بدون زخم یا ترک و خشکی کنید.`, image: '/imgs/libglassBlue.jpg', category: 'زیبایی' },
    { id: 21, name: ' شامپو بچه کلاسیک فیروز ', price: 197_000, description: `همواره اولین تجربه های حمام برای نوزادان خیلی مهم است زیرا اگر در این تجربیات اتفاقاتی مانند سوزش چشم رخ دهد، آن‌ها همواره از حمام خواهد ترسید، بنابراین باید از شوینده‌ی ملایم برای شستن موی آن‌ها استفاده نمود. والدین عزیز باید به این نکته نیز توجه کنند که شامپویی که برای نوزادان استفاده می‌شود نباید حاوی هیچ گونه عصاره، رنگ و مواد نگهدارنده باشد. شامپو بچه کلاسیک فیروز در این خصوص کاملا مناسب است، زیرا این محصول با شوینده‌های ملایم و فاقد مواد حساسیت‌زا فرموله شده‌است در نتیجه به هیچ وجه چشم حساس نوزاد را نمی‌سوزاند. شامپو بچه کلاسیک فیروز همچنین با pH کف سر نوزاد سازگار است و با مواد نرم کننده‌ای که دارد از وز شدن موهایشان جلوگیری می‌کند و شانه‌پذیری را در آن‌ها تسهیل می‌کند.\nشامپو بچه کلاسیک 100 میل فیروز براي جلوگيري از وز شدن موها پس از استحمام، سهولت در شانه‌پذيري مو، براي شستشوی پلک‌ها در هنگام تورم و التهاب و براي كساني كه عمل چشم انجام داده‌اند و يا چشم‌ها و پوست حساسي دارند کاربرد دارد.\nشامپو بچه کلاسیک 100 میل فیروز به دلیل داشتن مواد نرم‌کننده باعث درخشندگی موهای کودک دلبند شما می‌شود و علاوه بر ترمیم ساقه‌ها از وز‌شدن موها نیز جلوگیری می‌کند. این محصول محبوب به علت داشتن pH سازگار با پوست سر حساس کودکان، از آسیب‌رسیدن به ریشه‌های موی آنها جلوگیری می‌‌کند. در ترکیبات این شامپو از هیچ ماده صابونی و الکلی حساسیت‌زا استفاده نشده‌است. به افراد بزرگسالی که موهای حساس و شکننده‌ای دارند توصیه می‌شود، برای مصارف روزانه شامپو بچه فیروز را جایگزین شامپوهای عادی نمایند\nبسته‌بندی کوچکِ شامپو بچه کلاسیک 100 میل فیروز باعث می‌شود که این محصول در هر مکانی همراه همیشگی شما باشد.`, image: '/imgs/babyShampoo.jpg', category: 'کودک' },
    { id: 22, name: ' قرص آهن یونی فررو ', price: 396_000, description: `قرص اکتی آیرون (ACTI Iron) یکی از محصولات با کیفیت برای تامین آهن زنان است و در دسته بهترین قرص برای کم خونی بانوان قرار دارد. این قرص حاوی آهن فرومات بوده که به عنوان یک منبع غذایی غنی از آهن شناخته می‌شود.\n با توجه به این که جذب آهن توسط بدن ممکن است مشکلاتی داشته باشد، قرص آهن اکتی آیرون با استفاده از ترکیبی از آهن فرومات و ویتامین بهبود جذب آهن را فراهم می‌کند.`, image: '/imgs/uniferroTtablets.jpg', category: 'درمانی' },
    { id: 23, name: ' پودر انترامیل ', price: 230_000, description: `پودر انترامیل یک مکمل غذایی پرکالری و پرپروتئین است که معمولاً برای افرادی که به دلایل مختلف قادر به دریافت کالری کافی از طریق غذاهای معمولی نیستند، تجویز می‌شود. این پودر حاوی ترکیبی از کربوهیدرات‌ها، پروتئین‌ها، چربی‌ها، ویتامین‌ها و مواد معدنی است که به بدن انرژی و مواد مغذی مورد نیاز را می‌رساند.\nانترامیل به شکل پودر خشک تولید می‌شود و معمولاً با آب یا شیر مخلوط می‌شود تا به صورت نوشیدنی مصرف شود. این محصول به ویژه برای افرادی که دچار سوء تغذیه، کاهش وزن شدید، بیماری‌های مزمن یا اختلالات بلع هستند، مفید است.`, image: '/imgs/entraMeal.jpg', category: 'درمانی' },
    { id: 24, name: ' قرص جوشان اپفیز ', price: 199_900, description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', image: '/imgs/appfiza.jpg', category: 'درمانی' },
    { id: 25, name: ' قرص کافئین کارن ', price: 198_000, description: `قرص کافئین کارن با تحریک لیپولیز و افزایش سوخت و ساز بدن باعث چربی سوزی شده و ضمن افزایش قدرت انقباضی عضلات، موجب کاهش دردهای عضلانی در فرد می‌شود.`, image: '/imgs/caffeineTablets.jpg', category: 'درمانی' },

]
export default products;