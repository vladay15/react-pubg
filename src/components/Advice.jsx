import React from 'react';

const Advice = () => {
  const [font,setFont] = React.useState(18);
  let upFont = () =>{
    setFont(font + 1);
    if(font === 40){
      setFont(18);
    }
  }
  let downFont = ()=>{
    setFont(font - 1);
    if(font === 18){
      setFont(18);
    }
  }
  return (
    <div className="advice">
      <div className="custom-btn">
        <button onClick={upFont}>+</button>
  <span>font size: {font} px</span>
        <button onClick={downFont}>-</button>
      </div>

      <div className="advice-wrap" style={{fontSize: font + 'px'}}>
        <p className="bold">Не лінуватися, щоб закрити двері</p>
        <span className="advice-text">
          Найбільшою проблемою для більшості гравців, крім їх неуважності, є їх ліні. Ви пішли в
          будинок, закрити двері позаду вас, тому що якщо досвідчений гравець приходить і бачить, що
          хтось тут, він або розвернеться і залишити, не витрачаючи час на дослідження будинку, або
          візьме вас зненацька з його появою в будинку. Він почує, що в будинку є хтось, з
          несподіванкою. Намагайтеся заплутати ворога не тільки закривши всі двері, але і викладати
          непотрібні предмети в будинку, адже затоплений будинок з закритими дверима , принаймні,
          дивно.
        </span>
        <p className="bold">Постарайтеся бути нижче трави, тихіше, ніж вода</p>
        <span className="advice-text">
          Як кажуть ви знаєте, ви повинні бути як стриманий і тихий, наскільки це можливо. Ти чув, що
          тебе застрелили? Не стріляйте назад і не починай бігати. Замість цього, краще лягти або
          зігнути вниз. Ви помітили, що двері відкриті в будівлі? Зігніть вниз і повільно увійти в
          будинок. Але найголовніше, напевно - не стріляти перпендикулярно біговому гравцеві. Ви,
          напевно, пропустите і дами собі, і він буде досвідченим гравцем, який буде плескати вас
          швидко. Якщо ви помітили ворога, просто почекайте, поки він зупиниться або відволікся.
        </span>
        <p className="bold">Не бійтеся йти прямо</p>
        <span className="advice-text">
          Якщо ви почали стріляти, не намагайтеся знайти і нейтралізувати ворога - він вб'є вас
          набагато швидше, ніж ви знайдете його. Замість цього, спробуйте взяти на себе покриття:
          прямий допоможе. Поверніть ліворуч і праворуч одночасно з переміщенням в тих самих
          напрямках. Чим складніше пряма - тим важче буде для опонентів передбачити траєкторію вашого
          руху.
        </span>
        <p className="bold">Біжіть по дорогах і обійти мости</p>
        <span className="advice-text">
          Всі дороги з твердим покриттям у грі краще бігти швидко, ніж намагатися подолати їх шляхом
          сканування. Для снайпера ви будете легкою мішенню. Також можна включити мости. Якщо можливо,
          краще не наближатися до мостів і не подолати їх машиною, набагато менше пішки. Упевнений, що
          буде засідка.
        </span>
        <p className="bold">Спробуйте зайняти найвищі посади</p>
        <span className="advice-text">
          Високий сидіти і дивитися далеко актуальні і для цієї гри, але не бути розташовані в лінії
          вогню. Якщо ваш рюкзак має снайперську гвинтівку, то попередньо займають позицію по колу і
          стріляти ворогів, що бігають за зоною з відстані.
        </span>
        <p className="bold">Розшукуй грабувати якомога швидше</p>
        <span className="advice-text">
          Не витрачайте надто багато часу на розбирання обладнання та зброї. Поки ви розібратися все
          це речі, ви можете бути легко постріл.
        </span>
        <p className="bold">Візьміть каструлі і шоломи</p>
        <span className="advice-text">
          Пан врятував 100 життів і тисячі дупи, тому важливо мати його в рюкзаку і в м'якому місці. І
          важливість шоломів і шоломів не сумнівається: наприклад, шолом спецназу 3 витримає один удар
          зі СКС або Кар98к.
        </span>
        <p className="bold">Пам'ятки допомагають не тільки в стрільбі, але і в пошуку опонентів</p>
        <span className="advice-text">
          Якщо ви не могли подбати заздалегідь, щоб знайти 4-кратні і 8-кратні пам'ятки, на завершення
          гри вам буде важко. Пам'ятки в грі допомагають не тільки в зйомках, але і в пошуку гравців,
          які люблять сидіти в кущах.
        </span>
      </div>
    </div>
  );
};

export default Advice;
