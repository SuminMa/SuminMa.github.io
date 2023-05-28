const quotes = [
    {
      quote: "실패는 하나의 옵션이다. 실패하지 않는다면 충분한 혁신을 하고 있지 않다는 방증이다.",
      author: "일론 머스크",
    },
    {
      quote: "훌륭한 회사는 훌륭한 제품 위에 세워진다.",
      author: "일론 머스크",
    },
    {
      quote:
        "사람들은 목표가 무엇이고 목표 달성해야 할 이유를 알 때 일을 더 잘한다.",
      author: "일론 머스크",
    },
    {
      quote: "좋은 피드백보다는 나쁜 피드백에 신경을 쓰고 그와 유사한 피드백을 받을 수 있도록 노력해야 한다. 그게 성공 비결의 전부이다.",
      author: "일론 머스크",
    },
    {
      quote: "세상을 바꿀 수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.",
      author: "스티브 잡스",
    },
    {
      quote: "어제를 뒤돌아보는 건 그만하자. 그 대신 내일을 발전시켜야 나가야 한다.",
      author: "스티브 잡스",
    },
    {
      quote: "당신은 지금 순간들이 언제가는 어떻게든 연결될 것이라 믿어야 한다. 미래에 그런 순간 도래할 것이라 믿는다면 당신은 마음이 시키는 대로 따라갈 수 있는 자신감을 갖을 수 있다.",
      author: "스티브 잡스",
    },
    {
      quote: "지난 33년 간 나는 매일 아침 거울을 들여다보며 한 가지 질문을 했다. ‘만약 오늘이 내 마지막 날이라면, 오늘 내가 하려던 일을 하고 싶을까?’ 며칠 동안 대답이 NO라면 뭔가 바꿔야 할 필요가 있다는 걸 알게 된다.",
      author: "스티브 잡스",
    },
    {
      quote: "무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다. 의심하면 의심하는 만큼 밖에는 못하고, 할 수 없다고 생각하면 할 수 없는 것이다.",
      author: "고 정주영 현대 회장",
    },
    {
      quote: "당신이 오늘도 좋은 하루를 보내길 바라요.",
      author: "마수민",
    },
  ];
  
  const quote = document.querySelector("#quote h5:first-child");
  const author = document.querySelector("#quote h5:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;