document.getElementById('send-btn').onclick = async function () {
  const input = document.getElementById('user-input').value;
  document.getElementById('response').innerText = "Thinking...";

  request = {
    "model": "lakomoor/vikhr-llama-3.2-1b-instruct:1b",
    "messages": [
      {
        "role": "system",
        "content": `Ты консультант по питанию.\
         Вежливо поприветствуй пользователя \
        Запроси у пользователя данные: пол, возраст, вес и рост.\
        Рассчитай индекс массы тела (ИМТ) и помоги построить систему похудения.\
        Отвечай вежливо. \
        Пользователь спрашивает:`
      },
      {
        "role": "user",
        "content": `${input}`
      },

      {
        "role": "user",
        "content": `Это женщина, 37 лет, рост 166 см, вес 112 кг.`
      }

    ],
    //'max_tokens': '100',
    "temperature": "0,7"
  }

  // Example ollama AI integration 
 try {
        let chunk = decoder.decode(value, { stream: true });
        let response_chunk = JSON.parse(chunk);
        if (response_chunk.message.content) {
          result += response_chunk.message.content;
        }
      } catch (e) {
        console.log(e);
      }

    }
    console.log(result);
    document.getElementById('response').innerText = result || "No response from AI.";